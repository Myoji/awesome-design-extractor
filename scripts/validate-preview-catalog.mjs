import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const examples = ["genesis", "polestar", "audi", "mercedes-benz"];
const requiredSections = [
  "overview",
  "reconstruction",
  "tokens",
  "components",
  "states",
  "layout",
  "responsive",
  "limitations",
];
const requiredBadges = ["observed", "inferred", "uncertain"];
const minSurfaceSurrogates = 3;
const prohibitedSurfaceTerms = /\b(vehicle|car|logo|wing|silhouette)\b/i;
const requiredAssetRoles = ["brand-reference", "evidence-only"];
const requiredAssetPurpose = "preview-reference-only";

function assert(condition, message, failures) {
  if (!condition) failures.push(message);
}

function readText(filePath, failures) {
  if (!fs.existsSync(filePath)) {
    failures.push(`Missing file: ${path.relative(root, filePath)}`);
    return "";
  }
  return fs.readFileSync(filePath, "utf8");
}

function getAttribute(tag, name) {
  const match = tag.match(new RegExp(`${name}=["']([^"']+)["']`));
  return match ? match[1] : "";
}

function svgIsStandaloneVector(filePath) {
  if (!fs.existsSync(filePath)) return false;
  const svg = fs.readFileSync(filePath, "utf8");
  return (
    /<svg\b/i.test(svg) &&
    /viewBox=["'][^"']+["']/i.test(svg) &&
    /<path\b/i.test(svg) &&
    !/<image\b/i.test(svg) &&
    !/background(?:-color)?\s*[:=]/i.test(svg)
  );
}

function validateProtectedAssets(slug, html, failures) {
  const imgTags = html.match(/<img\b[^>]*>/g) ?? [];
  const protectedAssets = imgTags.filter((tag) => /data-asset-role=/.test(tag));

  for (const role of requiredAssetRoles) {
    assert(
      protectedAssets.some((tag) => getAttribute(tag, "data-asset-role") === role),
      `${slug}: preview.html must include a ${role} image asset`,
      failures,
    );
  }

  for (const tag of imgTags) {
    const src = getAttribute(tag, "src");
    const role = getAttribute(tag, "data-asset-role");

    assert(role, `${slug}: every preview <img> must declare data-asset-role`, failures);
    assert(
      requiredAssetRoles.includes(role),
      `${slug}: unsupported data-asset-role "${role}"`,
      failures,
    );
    assert(
      getAttribute(tag, "data-reuse") === "forbidden",
      `${slug}: protected image assets must declare data-reuse="forbidden"`,
      failures,
    );
    assert(
      getAttribute(tag, "data-asset-purpose") === requiredAssetPurpose,
      `${slug}: protected image assets must declare data-asset-purpose="${requiredAssetPurpose}"`,
      failures,
    );
    assert(
      getAttribute(tag, "data-asset-origin"),
      `${slug}: protected image assets must declare data-asset-origin`,
      failures,
    );
    assert(
      getAttribute(tag, "data-source-url"),
      `${slug}: protected image assets must declare data-source-url`,
      failures,
    );
    assert(
      getAttribute(tag, "data-capture-date"),
      `${slug}: protected image assets must declare data-capture-date`,
      failures,
    );
    assert(getAttribute(tag, "alt"), `${slug}: protected image assets must include alt text`, failures);
    assert(
      getAttribute(tag, "loading") === "lazy",
      `${slug}: protected image assets should use loading="lazy"`,
      failures,
    );
    assert(
      getAttribute(tag, "decoding") === "async",
      `${slug}: protected image assets should use decoding="async"`,
      failures,
    );
    assert(
      /^assets\//.test(src),
      `${slug}: protected image assets should be curated under assets/, got "${src}"`,
      failures,
    );
    if (/^assets\//.test(src)) {
      assert(
        fs.existsSync(path.join(root, "examples", slug, src)),
        `${slug}: protected image asset file missing: ${src}`,
        failures,
      );
    }
  }

  assert(
    /Not a reusable design asset/.test(html),
    `${slug}: preview.html must disclose that protected images are not reusable design assets`,
    failures,
  );
  assert(
    /No affiliation implied/.test(html),
    `${slug}: preview.html must disclose that no affiliation is implied`,
    failures,
  );

  if (slug === "genesis") {
    const brandTags = protectedAssets.filter((tag) => getAttribute(tag, "data-asset-role") === "brand-reference");
    for (const tag of brandTags) {
      assert(
        getAttribute(tag, "src") === "assets/brand-reference.svg",
        "genesis: brand-reference images should use the official inline SVG reference asset",
        failures,
      );
      assert(
        getAttribute(tag, "data-asset-origin") === "official-inline-svg",
        'genesis: brand-reference images must declare data-asset-origin="official-inline-svg"',
        failures,
      );
    }
    assert(
      svgIsStandaloneVector(path.join(root, "examples", slug, "assets", "brand-reference.svg")),
      "genesis: brand-reference.svg must preserve the official logo as a transparent standalone vector",
      failures,
    );
  }
}

function validatePreview(slug, failures) {
  const dir = path.join(root, "examples", slug);
  const html = readText(path.join(dir, "preview.html"), failures);
  const qa = readText(path.join(dir, "preview-qa.json"), failures);

  assert(
    html.includes("data-catalog-shell"),
    `${slug}: preview.html must expose data-catalog-shell on the catalog wrapper`,
    failures,
  );

  for (const section of requiredSections) {
    assert(
      new RegExp(`id=["']${section}["']`).test(html),
      `${slug}: preview.html missing #${section} section`,
      failures,
    );
  }

  assert(
    /href=["']DESIGN\.md["']/.test(html),
    `${slug}: preview.html must link to DESIGN.md`,
    failures,
  );
  assert(
    /href=["']EVIDENCE\.md["']/.test(html),
    `${slug}: preview.html must link to EVIDENCE.md`,
    failures,
  );
  assert(
    /data-component-tags=["'][^"']+["']/.test(html),
    `${slug}: reconstruction samples must declare data-component-tags`,
    failures,
  );

  for (const badge of requiredBadges) {
    assert(
      new RegExp(`data-evidence=["']${badge}["']`).test(html),
      `${slug}: preview.html missing ${badge} evidence badge`,
      failures,
    );
  }

  const surfaceSurrogates = html.match(/data-surface-surrogate=["'][^"']+["']/g) ?? [];
  assert(
    surfaceSurrogates.length >= minSurfaceSurrogates,
    `${slug}: preview.html must include at least ${minSurfaceSurrogates} labeled surface surrogates`,
    failures,
  );
  assert(
    !/data-media-surrogate=/.test(html),
    `${slug}: preview.html should use data-surface-surrogate instead of data-media-surrogate`,
    failures,
  );
  assert(
    /data-surrogate-type=["']css-surface["']/.test(html),
    `${slug}: surface surrogates must declare data-surrogate-type="css-surface"`,
    failures,
  );
  assert(
    /Synthetic CSS surface/.test(html),
    `${slug}: preview.html must disclose synthetic CSS surface usage`,
    failures,
  );
  for (const surrogate of surfaceSurrogates) {
    assert(
      !prohibitedSurfaceTerms.test(surrogate),
      `${slug}: surface surrogate should avoid object/logo terms: ${surrogate}`,
      failures,
    );
  }

  validateProtectedAssets(slug, html, failures);

  if (slug === "genesis") {
    assert(
      !/class=["'][^"']*\bwing\b/.test(html) && !/\.wing\b/.test(html),
      "genesis: preview.html must not recreate the Genesis wing logo with CSS/SVG",
      failures,
    );
  }

  if (qa) {
    try {
      const parsed = JSON.parse(qa);
      const checks = Array.isArray(parsed.checks) ? parsed.checks : [];
      assert(checks.length > 0, `${slug}: preview-qa.json has no checks`, failures);
      for (const check of checks) {
        assert(
          check.passed === true && check.overflow === false,
          `${slug}: ${check.viewport ?? "unknown viewport"} QA check is not passing`,
          failures,
        );
      }
    } catch (error) {
      failures.push(`${slug}: preview-qa.json is not valid JSON: ${error.message}`);
    }
  }
}

const failures = [];
for (const example of examples) validatePreview(example, failures);

if (failures.length > 0) {
  console.error("Preview catalog validation failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Preview catalog validation passed for ${examples.length} examples.`);
