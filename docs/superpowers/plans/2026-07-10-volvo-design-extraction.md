# Volvo Global Design Extraction Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Volvo Cars 글로벌 공개 사이트의 렌더링 근거를 수집해 `examples/volvo/`에 감사 가능한 디자인 시스템 문서와 정적 카탈로그를 만든다.

**Architecture:** 인앱 브라우저의 렌더링·DOM·computed style을 주 증거로 사용하고, 동일 출처의 대표 페이지를 9개 완성도 항목에 따라 적응형으로 선택한다. 증거를 먼저 문서화한 다음 그 범위 안에서 `DESIGN.md`와 네트워크 독립형 `preview.html`을 만들고, 정적 계약 검사와 데스크톱·모바일 브라우저 QA를 함께 기록한다.

**Tech Stack:** Codex 인앱 브라우저 Playwright API, 정적 HTML/CSS, Markdown, JSON, Node.js 정적 검증

---

### Task 1: 작업공간 격리와 RED 계약 검사

**Files:**
- Reference: `docs/superpowers/specs/2026-07-10-volvo-design-extraction-design.md`
- Reference: `scripts/validate-preview-catalog.mjs`
- Test target: `examples/volvo/`

- [ ] **Step 1: 작업공간 격리 상태를 확인한다**

```powershell
$gitDir = (git rev-parse --path-format=absolute --git-dir).Trim()
$gitCommon = (git rev-parse --path-format=absolute --git-common-dir).Trim()
$branch = (git branch --show-current).Trim()
[pscustomobject]@{ GitDir = $gitDir; GitCommonDir = $gitCommon; Branch = $branch }
```

Expected: 현재 체크아웃이 일반 작업공간인지 연결된 worktree인지와 브랜치가 명확히 출력된다. 일반 작업공간이면 `using-git-worktrees`의 사용자 동의 절차를 따른다.

- [ ] **Step 2: 기존 카탈로그 검증의 기준 상태를 확인한다**

Run: `node scripts/validate-preview-catalog.mjs`

Expected: 기존 예시에 대한 검증이 통과한다. 기존 사용자 변경 때문에 실패하면 Volvo 작업과 무관한 기준선 실패로 기록하고 사용자 동의 없이 수정하지 않는다.

- [ ] **Step 3: Volvo 산출물 계약 검사를 RED로 실행한다**

```powershell
@'
const fs = require('node:fs');
const path = require('node:path');
const dir = path.join(process.cwd(), 'examples', 'volvo');
const required = ['EVIDENCE.md', 'DESIGN.md', 'preview.html', 'evidence-summary.json', 'aggregate-insights.json', 'preview-qa.json'];
const missing = required.filter((name) => !fs.existsSync(path.join(dir, name)));
if (missing.length) throw new Error(`Missing Volvo artifacts: ${missing.join(', ')}`);
'@ | node
```

Expected: `Missing Volvo artifacts` 오류로 실패한다. 경로 오타나 런타임 오류가 아니라 기능 부재 때문에 실패해야 한다.

### Task 2: 렌더링 증거 수집과 적응형 크롤링

**Files:**
- Create: `examples/volvo/evidence-summary.json`
- Create: `examples/volvo/aggregate-insights.json`
- Optional ignored evidence: `examples/volvo/screenshots/`
- Optional ignored evidence: `examples/volvo/evidence-raw.json`

- [ ] **Step 1: 글로벌 홈의 데스크톱 기준을 수집한다**

인앱 브라우저를 `1440 x 1000` 기준으로 설정하고 `https://www.volvocars.com/intl/`을 연다. 최종 URL, 제목, 내비게이션, 쿠키 UI, 동일 출처 링크, 대표 헤딩·버튼·카드·푸터를 DOM 스냅샷과 computed style로 확인한다.

Expected: 최종 URL이 공식 `volvocars.com` 글로벌 경로이고, 홈의 색상·타이포·레이아웃·주요 컴포넌트 근거가 확보된다.

- [ ] **Step 2: 대표 페이지를 적응형으로 확장한다**

홈에서 실제로 노출된 링크를 우선 사용해 차량 목록/상세, 전동화, 안전, 지속가능성, 구성 또는 구매 진입, 지원·서비스, 콘텐츠 페이지를 최대 20페이지 안에서 방문한다. 각 패스 뒤 9개 완성도 항목을 평가하고 `missing`이 남거나 두 항목 이상이 `weak`이면 관련 공개 페이지를 추가한다.

Expected: 방문·실패·제외 URL과 종료 이유가 명확하며, 남은 약한 항목은 접근 제한 또는 공개 UI 부재로 설명할 수 있다.

- [ ] **Step 3: 컴포넌트 상태를 결정적으로 확인한다**

최신 DOM 스냅샷에서 고유성이 확인된 메뉴, 버튼, 탭 또는 아코디언만 조작한다. 클릭 전 locator count가 `1`인지 확인하고, 조작 후 `aria-expanded`, `aria-selected`, computed style 또는 가시성 변화 중 하나를 기록한다. 폼 제출, 계정, 구매, 위치 권한은 실행하지 않는다.

Expected: 관찰 가능한 상태만 `observed`로 승격되고 나머지는 `uncertain` 또는 `not inspected`로 남는다.

- [ ] **Step 4: 모바일 오버라이드를 수집한다**

브라우저를 `390 x 844` 기준으로 전환해 홈과 대표 차량·콘텐츠·구매/지원 진입 페이지를 다시 확인한다. 내비게이션 축약, 컬럼 스택, 타이포·간격 변화, 숨김·재배치, 수평 스크롤 영역을 기록한다.

Expected: 데스크톱을 기본값으로 유지하면서 모바일 차이를 명시적인 오버라이드로 설명할 수 있다.

- [ ] **Step 5: 요약 JSON을 작성하고 구문을 검증한다**

`evidence-summary.json`에는 메타데이터, 방문·실패·제외 URL, desktop/mobile 표본, 상태 관찰을 기록한다. `aggregate-insights.json`에는 역할별 색상, 타이포, 컴포넌트, 레이아웃, 깊이, 반응형 패턴과 증거 등급을 기록한다.

Run:

```powershell
node -e "for (const f of ['examples/volvo/evidence-summary.json','examples/volvo/aggregate-insights.json']) { JSON.parse(require('fs').readFileSync(f,'utf8')); console.log('valid', f) }"
```

Expected: 두 파일 모두 `valid`로 출력된다.

### Task 3: 감사 문서와 9개 섹션 디자인 가이드

**Files:**
- Create: `examples/volvo/EVIDENCE.md`
- Create: `examples/volvo/DESIGN.md`

- [ ] **Step 1: `EVIDENCE.md`를 먼저 작성한다**

감사 메타데이터, 방문·실패·제외 URL, 색상·타이포·컴포넌트·상태·레이아웃·깊이·반응형 증거표, 데스크톱/모바일 충돌 규칙, 크롤 종료 이유, 법적·범위 메모를 포함한다. 모든 주요 행에 `observed`, `inferred`, `uncertain` 중 하나를 표시한다.

- [ ] **Step 2: 완성도 평가 블록을 검증한다**

```powershell
rg -n "Completeness Evaluation|Visual Theme|Color Palette|Typography|Component Stylings|Layout Principles|Depth & Elevation|Do's and Don'ts|Responsive Behavior|Agent Prompt Guide" examples/volvo/EVIDENCE.md
```

Expected: 9개 항목이 coverage, confidence, strongest evidence, gaps 열과 함께 존재한다.

- [ ] **Step 3: 근거 범위 안에서 `DESIGN.md`를 작성한다**

다음 9개 최상위 섹션을 순서대로 사용한다: Visual Theme & Atmosphere, Color Palette & Roles, Typography Rules, Component Stylings, Layout Principles, Depth & Elevation, Do's and Don'ts, Responsive Behavior, Agent Prompt Guide. 값은 `EVIDENCE.md`가 지지할 때만 수치로 제시하고 약하거나 누락된 항목은 제한사항으로 표시한다.

- [ ] **Step 4: 디자인 문서 구조를 검증한다**

```powershell
@'
const text = require('fs').readFileSync('examples/volvo/DESIGN.md', 'utf8');
const sections = ['Visual Theme & Atmosphere','Color Palette & Roles','Typography Rules','Component Stylings','Layout Principles','Depth & Elevation',"Do's and Don'ts",'Responsive Behavior','Agent Prompt Guide'];
const missing = sections.filter((s) => !text.includes(s));
if (missing.length) throw new Error(`Missing DESIGN sections: ${missing.join(', ')}`);
console.log('Volvo DESIGN sections complete');
'@ | node
```

Expected: `Volvo DESIGN sections complete`가 출력된다.

### Task 4: 정적 카탈로그 구현

**Files:**
- Create: `examples/volvo/preview.html`

- [ ] **Step 1: 필수 카탈로그 셸을 구현한다**

외부 네트워크 의존성 없이 `[data-catalog-shell]`, 출처·날짜·뷰포트·증거 요약, `DESIGN.md`/`EVIDENCE.md` 상대 링크, Overview/Reconstruction/Tokens/Components/States/Layout/Responsive/Limitations 내비게이션을 만든다.

- [ ] **Step 2: 근거 기반 재구성과 토큰·컴포넌트 표본을 구현한다**

관찰된 헤더/히어로, 차량 탐색 또는 모델 카드, 전동화·안전 콘텐츠, 구성/지원 진입, 푸터 조합을 보여준다. 각 재구성에는 `data-component-tags`와 증거 배지를 넣고, 원본 차량·로고 대신 `data-surface-surrogate`가 붙은 관찰 기반 CSS 표면을 최소 3개 사용한다.

- [ ] **Step 3: 상태·레이아웃·반응형·한계를 구현한다**

실제로 확인한 기본·선택·메뉴 열림 상태만 관찰로 표시하고, 미확인 hover/focus/disabled는 생략하거나 `uncertain`으로 표시한다. 그리드, 최대 폭, 섹션 리듬, 모바일 스택과 내부 전용 수평 오버플로 규칙을 포함한다.

- [ ] **Step 4: 정적 계약 검사를 실행한다**

```powershell
@'
const fs = require('node:fs');
const html = fs.readFileSync('examples/volvo/preview.html', 'utf8');
const ids = ['overview','reconstruction','tokens','components','states','layout','responsive','limitations'];
const required = ['data-catalog-shell','href="DESIGN.md"','href="EVIDENCE.md"','data-component-tags','data-surface-surrogate','observed','inferred','uncertain'];
const missing = [...ids.filter((id) => !html.includes(`id="${id}"`)), ...required.filter((x) => !html.includes(x))];
if (missing.length) throw new Error(`Missing preview contracts: ${missing.join(', ')}`);
if ((html.match(/data-surface-surrogate/g) || []).length < 3) throw new Error('Need at least 3 surface surrogates');
console.log('Volvo preview static contract passed');
'@ | node
```

Expected: `Volvo preview static contract passed`가 출력된다.

### Task 5: 브라우저 QA와 최종 GREEN

**Files:**
- Create: `examples/volvo/preview-qa.json`
- Verify: `examples/volvo/preview.html`
- Verify: `examples/volvo/EVIDENCE.md`
- Verify: `examples/volvo/DESIGN.md`

- [ ] **Step 1: 데스크톱 프리뷰를 렌더링한다**

인앱 브라우저에서 로컬 `preview.html`을 `1440 x 1000` 기준으로 열고 카탈로그 셸, 8개 섹션, 로컬 링크, 재구성, 토큰, 컴포넌트와 텍스트 가독성을 확인한다.

Expected: `scrollWidth <= clientWidth`이고 필수 섹션과 링크가 모두 가시적이다.

- [ ] **Step 2: 모바일 프리뷰를 렌더링한다**

같은 파일을 `390 x 844` 기준으로 확인하고 본문 가로 오버플로, 긴 레이블, 버튼, 카드, 토큰 그리드, 섹션 내 수평 요소의 격리를 점검한다.

Expected: 본문 수준 가로 오버플로가 없고 의도적인 가로 요소는 자기 컨테이너 내부에서만 스크롤한다.

- [ ] **Step 3: `preview-qa.json`을 작성하고 검증한다**

데스크톱·모바일 뷰포트, 문서 너비, 오버플로 결과, 필수 섹션, 로컬 링크, 재구성 태그, 배지, 표면 대체재와 제한사항 검사 결과를 boolean check 배열로 기록한다.

Run: `node -e "const q=JSON.parse(require('fs').readFileSync('examples/volvo/preview-qa.json','utf8')); if(!q.checks?.length || q.checks.some(x=>x.pass!==true)) throw new Error('Volvo QA failed'); console.log('Volvo QA passed')"`

Expected: `Volvo QA passed`가 출력된다.

- [ ] **Step 4: 최초 RED 계약 검사를 GREEN으로 재실행한다**

```powershell
@'
const fs = require('node:fs');
const path = require('node:path');
const dir = path.join(process.cwd(), 'examples', 'volvo');
const required = ['EVIDENCE.md', 'DESIGN.md', 'preview.html', 'evidence-summary.json', 'aggregate-insights.json', 'preview-qa.json'];
const missing = required.filter((name) => !fs.existsSync(path.join(dir, name)));
if (missing.length) throw new Error(`Missing Volvo artifacts: ${missing.join(', ')}`);
console.log('Volvo artifact contract passed');
'@ | node
```

Expected: `Volvo artifact contract passed`가 출력된다.

- [ ] **Step 5: 전체 정적 검증과 변경 범위를 확인한다**

```powershell
node scripts/validate-preview-catalog.mjs
git diff --check
git status --short
```

Expected: 기존 카탈로그 검증이 기준선과 동일하거나 통과하고, whitespace 오류가 없으며, Volvo 산출물과 계획 문서 외 기존 사용자 변경은 그대로 보존된다.

- [ ] **Step 6: Volvo 산출물만 커밋한다**

```powershell
git add -- docs/superpowers/plans/2026-07-10-volvo-design-extraction.md examples/volvo/DESIGN.md examples/volvo/EVIDENCE.md examples/volvo/preview.html examples/volvo/evidence-summary.json examples/volvo/aggregate-insights.json examples/volvo/preview-qa.json
git diff --cached --check
git commit -m "Add Volvo design extraction example"
```

Expected: 기존 `scripts/validate-preview-catalog.mjs` 변경과 `examples/mercedes-benz/`는 커밋에 포함되지 않는다.
