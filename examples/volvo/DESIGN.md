# Volvo Cars 글로벌 디자인 시스템

> 기준: `https://www.volvocars.com/intl/`, 2026-07-10 공개 렌더링 분석
> 상세 근거와 한계: [EVIDENCE.md](EVIDENCE.md)

이 문서는 Volvo Cars 글로벌 사이트를 복제하기 위한 명세가 아니라, 반복해서 관찰된 시각 언어를 다른 제품 UI에 안전하게 적용하기 위한 디자인 시스템 가이드다. `observed`는 렌더링 DOM·computed style·공개 CSS 변수에서 직접 확인된 규칙, `inferred`는 여러 페이지의 반복 패턴을 보수적으로 일반화한 규칙, `uncertain`은 사용 전 추가 검증이 필요한 항목을 뜻한다.

`preview.html`에는 원본 재구성도를 검증하기 위해 글로벌 홈에 실제 렌더링된 워드마크와 메인 히어로를 보호 참고 자료로 제한 포함한다. 두 파일은 `data-reuse="forbidden"`인 근거 자료이며 이 가이드의 재사용 가능한 디자인 자산이 아니다. 상세 출처와 권리 경계는 `EVIDENCE.md`의 보호 참고 자산 표를 따른다.

## 1. Visual Theme & Atmosphere — 시각 테마와 분위기

### 핵심 인상

- **차분한 스칸디나비안 에디토리얼** (`observed`): 흰 바탕, 검은 텍스트, 넓은 여백, 큰 미디어 밴드가 기본이다.
- **사람과 사용 장면을 앞세운 제품 표현** (`observed`): 홈·안전·지속가능성·액세서리에서 차량만 고립시키기보다 사람, 자연, 생활 장면을 함께 보여준다.
- **큰 이야기 단위와 짧은 정보 블록의 교차** (`observed`): full-bleed 히어로/영상 구간 뒤에 2–3열 카드, 사양 목록, 짧은 설명을 배치한다.
- **절제된 장식** (`observed`): 큰 카드 그림자, 유리 효과, 광택 그라디언트, 장식성 테두리가 없다. 대비는 흑백, 미디어, 섹션 간 여백으로 만든다.
- **부드러운 액션과 각진 콘텐츠의 대비** (`observed`): CTA는 완전 pill이지만 카드·미디어·콘텐츠 패널은 대부분 `0px` radius다.

### 적용하기 좋은 제품

- 모빌리티·하드웨어·지속가능성·안전처럼 신뢰와 제품 서사가 모두 필요한 서비스
- 사진 또는 고품질 미디어가 중심이고 UI가 이를 방해하지 않아야 하는 마케팅/제품 탐색 경험
- 소수의 분명한 행동과 긴 에디토리얼 스크롤을 함께 제공하는 사이트

### 분위기 키워드

`calm`, `human`, `precise`, `editorial`, `open`, `safety-led`, `material`, `high-contrast`

## 2. Color Palette & Roles — 색상 팔레트와 역할

### 핵심 역할 토큰

| 역할 | 값 | 근거 | 사용 규칙 |
| --- | --- | --- | --- |
| `background-primary` | `#FFFFFF` | observed | 기본 페이지와 카드 배경 |
| `foreground-primary` | `#000000` | observed | 본문, 제목, 검정 CTA |
| `foreground-muted` | `#5E5E5E` | observed | 보조 설명, 메타데이터, 낮은 우선순위 텍스트 |
| `surface-subtle` | `#FAFAFA` | observed | 에디토리얼 카드, 정보 모듈, 번갈아 나오는 섹션 |
| `border-subtle` | `rgba(0,0,0,.12)` | observed | 약한 구분선과 선택 탭 표면 |
| `surface-accent-blue` | `#0B2DED` | observed | 구성·탐색 등 중요한 문맥 CTA. 모든 CTA에 일괄 적용하지 않는다. |
| `surface-accent-safety` | `#FC6408` | observed token | 안전 전용 선언 토큰. 반복된 실제 사용은 미확인이다. |
| `surface-feedback-green` | `#048220` | observed token | 성공 역할이 이름으로 선언됨. 실제 검증 상태는 미확인이다. |
| `surface-feedback-orange` | `#CE6700` | observed token | 경고 역할이 이름으로 선언됨. 실제 검증 상태는 미확인이다. |
| `surface-feedback-red` | `#E52715` | observed token | 오류 역할이 이름으로 선언됨. 실제 검증 상태는 미확인이다. |
| `foreground-inverted` | `#FFFFFF` | observed | 다크 미디어와 검정 CTA 위 텍스트 |

### 조합 원칙

1. 기본은 `white surface + black text`다.
2. 검정 표면은 히어로, 영상, 스토리 밴드, CTA처럼 국소적인 대비에 사용한다.
3. 파란색은 선택적 주요 행동에만 사용한다. 볼보 스타일을 표현한다는 이유로 제목, 아이콘, 카드 배경 전체에 확산하지 않는다.
4. `#FAFAFA`는 흰 배경과 미세하게 분리되는 정보 표면으로 사용하며, 그림자를 대신한다.
5. 피드백 색상은 선언 토큰으로 존재하지만 실제 상태 패턴이 관찰되지 않았다. 새 UI에서는 접근성 대비와 제품 의미를 별도로 검증한다.
6. focus 색상은 추출되지 않았다. `#0B2DED`를 focus ring으로 자동 승격하지 않는다.

### 권장 CSS 토큰

```css
:root {
  --volvo-bg: #fff;
  --volvo-surface-subtle: #fafafa;
  --volvo-text: #000;
  --volvo-text-muted: #5e5e5e;
  --volvo-border: rgb(0 0 0 / 12%);
  --volvo-accent: #0b2ded;
  --volvo-feedback-success: #048220;
  --volvo-feedback-warning: #ce6700;
  --volvo-feedback-error: #e52715;
}
```

## 3. Typography Rules — 타이포그래피 규칙

### 글꼴

```css
font-family: "Volvo Centum", "Helvetica Neue", Helvetica, "Noto Sans",
  "Segoe UI", Arial, sans-serif;
```

- 위 스택은 모든 표본 페이지의 computed style에서 반복됐다 (`observed`).
- `"Volvo Broad Pro", "Volvo Broad", "Arial Black", sans-serif` 변수도 선언돼 있었지만 샘플 텍스트에 실제 적용된 computed family는 확인되지 않았다. Broad 계열은 근거가 추가되기 전까지 기본 UI에 사용하지 않는다 (`uncertain usage`).
- 폰트 파일은 이 패키지에 포함되지 않는다. 라이선스와 배포 경로가 없으면 시스템 fallback을 사용한다.

### 타입 스케일

| 역할 | 데스크톱 | 모바일 override | Weight | 사용 |
| --- | --- | --- | --- | --- |
| Product statement | `106px / 114px` | `36px / 44px` | 400 | 제품 상세의 짧은 모델명 한정 |
| Page H1 | `48px / 56px` | `32px / 40px` | 400 | 홈·콘텐츠 페이지 제목 |
| Build H1 | `54px / 62px` | `36px / 44px` | 400 | 간결한 구성 랜딩 문맥 |
| Section H2 | `28px / 36px` | `24px / 32px` | 400 | 주요 에디토리얼 섹션 |
| Module heading | `20px / 28–30px` | `16–20px / 24–28px` | 400 또는 600 | 카드 제목과 작은 섹션 라벨 |
| Body / control | `16px / 24px` | 동일 | 400 | 본문, 버튼, 링크 |
| Small UI | `14px / 22.008px` | 동일 | 400 | 탭, 제품 서브내비게이션 |
| Caption | `12px / 20.004px` | 동일 | 400 | 면책, 보조 표기 |

### 위계 원칙

- 기본 weight는 `400`이다. `600`은 작은 제목·라벨·강조에만 사용한다.
- 큰 제목도 bold로 만들지 않는다. 크기와 line-height, 주변 여백이 위계를 담당한다.
- 제품 statement는 매우 짧은 텍스트에서만 사용한다. 문장이 길면 Section H2 또는 Page H1로 낮춘다.
- 영문 기준 letter spacing은 대부분 `normal`이었다. 임의의 강한 음수 자간을 추가하지 않는다.
- 모바일에서 statement가 큰 폭으로 축소된다. 단순 비율 축소가 아니라 명시적 모바일 타입 역할로 처리한다.

### 관찰된 유동 크기 토큰

```css
--heading-1: round(down, clamp(2rem, 2.143vw + 1.357rem, 3.5rem), 2px);
--heading-2: round(down, clamp(1.5rem, 0.714vw + 1.286rem, 2rem), 2px);
--statement-1: round(down, clamp(5rem, 15.714vw + 0.286rem, 16rem), 2px);
```

브라우저 지원 범위를 고려해야 한다면 `round()` 없이 동일 min/max를 유지하는 `clamp()`로 보수적으로 대체한다.

## 4. Component Stylings — 컴포넌트 스타일

### 전역 내비게이션

- 데스크톱 기본 높이 `64px` (`--v-size-navigation-bar-height: 4rem`).
- 흰 배경, 검정 컨트롤, 카테고리 버튼과 브랜드 링크의 단순한 수평 구성.
- 모바일에서 높이는 실제 약 `48px`이고 카테고리 버튼이 사라지며 `Menu`와 브랜드 링크만 남는다.
- 열린 메뉴 상태는 상호작용 제한으로 확인하지 못했다. overlay 크기, blur, shadow를 발명하지 않는다.

### CTA 버튼

| 변형 | 높이 / Padding | 형태 | 색상 |
| --- | --- | --- | --- |
| Primary dark | `48px`, `0 24px` | `9999px` pill | 검정 배경, 흰 텍스트 |
| Primary blue | `48px`, `0 24px` | `9999px` pill | `#0B2DED`, 흰 텍스트 |
| Light on dark | `48px`, `0 24px` | `9999px` pill | 흰 배경, 검정 텍스트 |
| Outline | `48px`, `0 24px` | `9999px` pill | 투명 배경, 대비색 `1px inset` outline |
| Compact | `32px`, `0 16px` | `9999px` pill | 제품 서브내비게이션·밀집 문맥 |

- 모바일 히어로 CTA는 `390px` 뷰포트에서 `342px` 폭으로 전폭에 가깝게 스택된다.
- CTA 그룹의 세로 간격은 홈에서 `8px`이었다.
- 아이콘만 있는 캐러셀/유틸리티는 `40–48px` 원형 예외다.

### 텍스트 링크

- 기본 본문 크기 `16/24px`.
- CTA보다 낮은 우선순위의 `Explore`, `Learn more`, `Read more`는 배경·테두리 없는 텍스트 링크다.
- 링크를 모두 pill 버튼으로 승격하지 않는다.

### 탭과 제품 서브내비게이션

- 높이 `32px`, inline padding `8px`, 작은 UI `14/22px`.
- 선택 상태는 `rgba(0,0,0,.12)` 배경이며 radius는 `0px`다.
- 모바일에서도 탭은 유지되며, 한 줄에 맞지 않으면 탭 레일 자체만 수평 스크롤한다.
- 탭 주변 페이지 전체가 가로로 늘어나서는 안 된다.

### 카드와 미디어 모듈

- 카드 셸은 `0px` radius, 반복 shadow 없음.
- 흰색 또는 `#FAFAFA` 표면을 사용하고 이미지·텍스트·링크를 여백으로 구분한다.
- 데스크톱 2–3열에서 모바일 1열로 전환한다.
- 감정적 제품/스토리 이미지는 크게, 정보 카드 이미지는 정돈된 동일 비율로 사용한다.
- 보호 자산을 사용할 수 없다면 실제 차량 실루엣을 그리지 말고 crop, 조명 방향, 재질면, 섹션 색상만 CSS 대체 표면으로 재구성한다.

### 제품 스펙

- 작은 `16/24px` 라벨과 충분한 세로 간격을 사용한다.
- 데스크톱에서는 2열로 나눌 수 있으나 모바일은 단일 열로 유지한다.
- 수치 강조가 필요해도 카드 그림자나 과도한 배지 대신 큰 숫자와 여백을 사용한다.

### FAQ

- 접힌 `Show more` 컨트롤과 `aria-expanded=false`만 관찰했다.
- 펼침 애니메이션, 아이콘 회전, 열린 배경, 자동 스크롤은 근거가 없다.
- 새 구현에서 접근 가능한 `aria-expanded`/`aria-controls` 계약은 유지하되 시각 상태는 제품 요구에 맞춰 별도 검증한다.

### 폼

대표 input/select/validation UI가 성공한 공개 페이지에서 렌더링되지 않았다. 필드 radius, 높이, 오류 메시지 배치, focus ring을 이 시스템에서 추출된 규칙으로 주장하지 않는다.

## 5. Layout Principles — 레이아웃 원칙

### 그리드와 폭

```css
--grid-max-width: 81rem;
--page-margin: clamp(1rem, 4.286vw - 0.286rem, 4rem);
```

- 홈의 실제 `1265px` client width에서 반복 콘텐츠는 약 `1210px`, 좌우 약 `28px`였다.
- 모바일 `390px`에서 일반 콘텐츠는 `342px`, 좌우 `24px`였다.
- 히어로 CTA는 좌우 `12px`까지 넓어져 시각적 우선순위를 높였다.

### 섹션 문법

1. `full-bleed media/contrast band`
2. `constrained text or card grid`
3. `large vertical breathing room`
4. `short CTA or text-link exit`

이 순서를 반복해 긴 페이지에 리듬을 만든다. 모든 섹션을 동일 카드 컨테이너로 감싸지 않는다.

### 관찰된 유동 간격

| 역할 | 값 |
| --- | --- |
| Small responsive gap | `clamp(1rem, 1.429vw + .571rem, 2rem)` |
| Medium section gap | `clamp(2rem, 2.143vw + 1.357rem, 3.5rem)` |
| Large section gap | `clamp(3rem, 2.143vw + 2.357rem, 4.5rem)` |
| Fixed utility spacing | `16px`, `24px`, `32px`, `48px` 토큰이 함께 선언됨 |

### 정렬

- 본문과 카드 텍스트는 기본 left alignment.
- 모델명·스토리 문장은 큰 스케일로 left alignment하며 화면 중앙 장식에 의존하지 않는다.
- CTA는 문맥에 따라 left 또는 centered이지만, 카드 내부 텍스트 정렬과 충돌시키지 않는다.

## 6. Depth & Elevation — 깊이와 고도

- 기본은 **평면**이다 (`observed`).
- 카드·콘텐츠 패널에 반복 shadow가 없다.
- 버튼 outline만 `0 0 0 1px inset`으로 경계를 만든다.
- dark band와 white text, full-bleed media가 가장 강한 z-axis 대비 역할을 한다.
- CTA와 원형 유틸리티 외 큰 표면에 `9999px`/`50%` radius를 사용하지 않는다.
- CSS 토큰에 `4px`, `8px` radius가 선언돼 있어도 반복 카드 셸에는 실제 적용되지 않았다. 작은 내부 UI가 필요할 때만 보조적으로 검토한다.
- modal, dropdown, 열린 전역 메뉴의 shadow/overlay는 관찰하지 못했다. 임의의 blur나 glass surface를 추가하지 않는다.

## 7. Do's and Don'ts — 해야 할 것과 피할 것

### Do

- 흰 배경과 검정 텍스트를 기본으로 두고 미디어가 시각적 감정을 담당하게 한다.
- 큰 제목은 weight `400`, 넓은 line-height, 충분한 여백으로 표현한다.
- 주요 CTA는 pill로, 카드·미디어는 각진 형태로 유지한다.
- full-bleed 섹션과 최대 `81rem` 콘텐츠 그리드를 교차한다.
- 사람, 자연, 안전, 사용 장면을 제품과 함께 보여주는 이미지 방향을 선택한다.
- 모바일에서 CTA를 넓게 스택하고 카드/스펙을 1열로 전환한다.
- 보호 자산 대신 관찰된 crop, 명암, 재질, 배경색을 활용한 합성 표면을 사용한다.

### Don't

- 모든 컴포넌트를 둥근 카드로 만들지 않는다.
- 카드 그림자, glassmorphism, 강한 blur, 과도한 elevation을 추가하지 않는다.
- 파란색을 페이지 전체 브랜드 배경이나 모든 링크에 사용하지 않는다.
- 큰 제목을 무조건 bold로 만들거나 강한 음수 자간을 주지 않는다.
- 독립 다크 모드가 있다고 가정하지 않는다.
- 확인되지 않은 focus, hover, form validation, menu-open 상태를 Volvo 고유 규칙으로 주장하지 않는다.
- 공식 로고, 차량 실루엣, 제품 사진을 CSS/SVG로 모사하거나 재사용 가능한 자산처럼 제공하지 않는다. 프리뷰에 포함된 두 보호 참고 파일도 제품 산출물에 재사용하지 않는다.
- 작은 대시보드 카드의 과밀한 격자로 에디토리얼 리듬을 대체하지 않는다.

## 8. Responsive Behavior — 반응형 동작

### 직접 관찰한 데스크톱 → 모바일 변화

| 영역 | 데스크톱 기본 | `390 × 844` override |
| --- | --- | --- |
| 전역 내비게이션 | `64px`, 카테고리 버튼 + 브랜드 | 약 `48px`, `Menu` + 브랜드 |
| Page H1 | `48/56px` | `32/40px` |
| Build H1 | `54/62px` | `36/44px` |
| Product statement | `106/114px` | `36/44px` |
| Section H2 | `28/36px` | `24/32px` |
| 홈 서비스/콘텐츠 카드 | 2–3열 | 1열 스택 |
| 히어로 CTA | 내용 폭 pill, 수평 그룹 가능 | `342px` 전폭형, 세로 스택 |
| 제품 스펙 | 2열 가능 | 1열 |
| 탭 | 수평 행 | 내부 스크롤 가능한 탭 레일 |

### 구현 규칙

- 원본 사이트의 정확한 breakpoint 값은 직접 측정하지 않았다. 임의의 숫자를 Volvo 토큰으로 명명하지 않는다.
- 앱의 콘텐츠가 위 표의 모바일 상태로 자연스럽게 전환되는 지점에서 breakpoint를 선택한다.
- page-level `overflow-x`는 금지한다. 탭·캐러셀처럼 의도적으로 수평인 컴포넌트만 자체 컨테이너에 `overflow-x: auto`를 둔다.
- grid/flex 자식에 `min-width: 0`, 미디어에 `max-width: 100%`를 적용한다.
- 긴 레이블은 줄바꿈하거나 밀도를 낮춘다. 컨테이너 밖으로 밀어내지 않는다.
- 모바일 네 표본 페이지의 실제 `scrollWidth`와 `clientWidth`가 모두 `390px`로 일치했다. 이를 최소 QA 기준으로 삼는다.

## 9. Agent Prompt Guide — 에이전트 적용 가이드

다른 코딩 에이전트에는 다음 지침을 제공한다.

```text
Volvo Cars 글로벌 공개 사이트에서 관찰된 디자인 언어를 참고해 UI를 구현하라.

1. 흰 배경, 검정 전경, #5E5E5E 보조 텍스트, #FAFAFA 보조 표면을 기본으로 사용한다.
2. 기본 글꼴은 "Volvo Centum"과 시스템 sans fallback이며, 파일이 없으면 fallback만 사용한다.
3. 제목은 weight 400을 유지하고 크기·line-height·여백으로 위계를 만든다.
4. 주요 CTA는 48px 높이, 24px inline padding, 완전 pill이다. 검정·흰색·#0B2DED 변형만 근거가 있다.
5. 카드와 미디어 패널은 각진 평면 구조다. 반복 shadow나 rounded card shell을 만들지 않는다.
6. 최대 81rem 콘텐츠 그리드와 full-bleed 미디어/대비 밴드를 교차한다.
7. 데스크톱의 2–3열 카드와 2열 스펙은 모바일에서 1열로 스택한다.
8. 모바일 H1은 32/40px, section H2는 24/32px, product statement는 36/44px를 기준으로 한다.
9. 탭과 캐러셀만 내부 수평 스크롤을 허용하고 페이지 전체 가로 오버플로는 막는다.
10. 공식 로고, 차량 사진, 차량 실루엣을 제품 자산으로 복사하거나 재현하지 않는다. 프리뷰의 두 보호 참고 파일은 헤더 비율과 히어로 crop 검증에만 사용하고, 실제 구현은 흑백 대비, 자연광, 재질면, crop framing, section band를 CSS 대체 표면 또는 적법하게 확보한 프로젝트 자산으로 구성한다.
11. 폼, focus ring, menu-open, FAQ-expanded, 독립 dark mode는 관찰 근거가 부족하므로 발명하지 않는다.
12. 구현 결과를 데스크톱과 390px 모바일에서 렌더링해 scrollWidth <= clientWidth를 검증한다.
```

### 최종 점검 질문

- UI가 콘텐츠보다 장식적으로 더 시끄럽지 않은가?
- CTA는 부드럽고 카드/미디어는 각진 대비를 유지하는가?
- 파란색이 중요한 행동에만 제한됐는가?
- 제목이 bold가 아니라 크기와 여백으로 위계화됐는가?
- 모바일에서 카드·CTA·탭이 페이지 폭을 밀어내지 않는가?
- 보호 참고 자산을 제거해도 crop, 명암, 재질, 섹션 리듬으로 분위기를 전달하는가?
- 근거가 없는 상태나 토큰을 Volvo 규칙처럼 주장하지 않았는가?
