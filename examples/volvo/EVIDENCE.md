# Volvo Cars 글로벌 디자인 추출 근거

## 감사 메타데이터

| 항목 | 값 |
| --- | --- |
| 시작 URL | `https://www.volvocars.com/intl/` |
| 최종 렌더링 URL | `https://www.volvocars.com/intl/` |
| 크롤 날짜 | 2026-07-10 |
| 도구 | Codex 인앱 브라우저의 렌더링 DOM, computed style, CDP 모바일 기기 메트릭 |
| 데스크톱 요청 뷰포트 | `1440 × 1000` |
| 데스크톱 실제 뷰포트 | `1280 × 720` (`clientWidth: 1265px`) |
| 모바일 실제 뷰포트 | `390 × 844` (`clientWidth: 390px`) |
| 출력 폴더 | `examples/volvo` |
| 페이지 예산 | 최대 20페이지, 깊이 2 |
| 원시 요약 | `evidence-summary.json`, `aggregate-insights.json` |

인앱 브라우저의 일반 뷰포트 기능은 데스크톱 요청값을 적용한 뒤에도 실제 `1280 × 720`으로 렌더링됐다. 이 문서는 요청값이 아닌 실제 측정값을 데스크톱 기준으로 사용한다. 모바일은 같은 브라우저의 CDP 기기 메트릭으로 `390 × 844`를 적용했으며 수집 후 초기화했다.

사이트 지침이나 페이지 내부 텍스트는 데이터로만 취급했다. 로그인, 폼 제출, 구매, 위치 권한, 계정 상태 변경은 수행하지 않았다.

## 크롤 범위

### 데스크톱에서 성공한 페이지

| 분류 | 최종 URL | 결과 | 핵심 근거 |
| --- | --- | --- | --- |
| 홈 | `https://www.volvocars.com/intl/` | rendered | 글로벌 내비게이션, 히어로, 서비스 링크, 모델 캐러셀, 콘텐츠 카드, 푸터 |
| 구성 진입 | `https://www.volvocars.com/intl/build/` | rendered | 구성 랜딩 H1, 모델 비교 CTA, 짧은 페이지 구조 |
| 액세서리 | `https://www.volvocars.com/intl/collections/car-accessories/` | rendered | 긴 에디토리얼 페이지, 앵커 링크, 파란/흰색/아웃라인 CTA, 어두운 미디어 섹션 |
| 법인 | `https://www.volvocars.com/intl/business/` | rendered | 선택 탭, 2열 콘텐츠, 연락 CTA, 다크 CTA 밴드 |
| 전동화 | `https://www.volvocars.com/intl/cars/electrification/` | rendered | 탭 레일, 기능 그리드, 모델 카드, `Show more`, 검정/흰색 섹션 |
| 안전 | `https://www.volvocars.com/intl/safety/` | rendered | 리디렉션된 최종 URL, 탭, 히어로, 인용문, 영상 CTA, FAQ |
| 지속가능성 | `https://www.volvocars.com/intl/sustainability/` | rendered | 리디렉션된 최종 URL, 선택 탭, 목표 카드, 타임라인, 흑백 섹션 |
| XC60 상세 | `https://www.volvocars.com/intl/cars/xc60-hybrid/` | rendered | 제품 서브내비게이션, 대형 제품명, 사양 목록, 구성 CTA, 가로 미디어 모듈 |

### 모바일에서 재방문한 페이지

| URL | 실제 문서 폭 | 결과 | 대표 변화 |
| --- | --- | --- | --- |
| `https://www.volvocars.com/intl/` | `390 / 390px` | rendered | 카테고리 내비게이션이 메뉴 버튼으로 축약, CTA 전폭화, 카드 1열 스택 |
| `https://www.volvocars.com/intl/cars/xc60-hybrid/` | `390 / 390px` | rendered | 제품명 `106/114px → 36/44px`, 구성 CTA `358px`, 탭 레일 유지 |
| `https://www.volvocars.com/intl/safety/` | `390 / 390px` | rendered | H1 `48/56px → 32/40px`, 섹션 H2 `28/36px → 24/32px` |
| `https://www.volvocars.com/intl/build/` | `390 / 390px` | rendered | H1 `54/62px → 36/44px`, 비교 CTA `32px` 높이 |

네 모바일 페이지 모두 `scrollWidth === clientWidth === 390px`였다. 페이지 수준의 의도하지 않은 가로 오버플로는 관찰되지 않았다.

### 실패와 대체 근거

| URL/대상 | 분류 | 대체 시도 | 완성도 영향 |
| --- | --- | --- | --- |
| `https://www.volvocars.com/intl/cars/ex60-electric/` | `render_timeout` | 홈에 노출된 XC60 상세를 대신 검사 | EX60 전용 표현은 제외했지만 일반 제품 상세 규칙은 확보 |
| `https://www.volvocars.com/intl/cars/compare-cars/?models=ex60-electric` | `render_timeout` | 구성 랜딩과 제품 서브내비게이션 검사 | 비교 선택기와 비교 상태는 미검증 |
| XC60 전역 메뉴 열기 | `unsupported_interaction` | 정적 내비게이션과 선택 탭 측정 | 메뉴 열린 상태는 `observed`로 승격하지 않음 |
| 안전 FAQ `Show more` 열기 | `unsupported_interaction` | `aria-expanded=false` 접힘 상태 측정 | 펼침 상태는 미검증 |
| 모바일 홈 스크린샷 | `tool_unavailable` | 렌더링 DOM, computed style, 문서 폭 유지 | 원본 페이지 스크린샷은 산출물에 없음 |

법률, 개인정보, 쿠키, 소셜, 로그인, 결제, 지역 중복 페이지는 시각 시스템 추출 가치가 낮거나 외부 상태를 요구해 제외했다. 공개 페이지에서 대표 폼 입력이 렌더링되지 않아 폼·검증 상태는 제한사항으로 남겼다.

크롤은 데스크톱 8페이지와 모바일 4페이지 뒤 종료했다. 이 시점에 관찰 가능한 9개 항목은 모두 `complete` 또는 `partial`이었고, 남은 빈틈은 시간 초과가 난 비교 도구, 실패한 단순 상호작용, 공개 폼 부재에 한정됐다.

## 색상 근거

| 발견 | 수준 | 근거 | 해석 한계 |
| --- | --- | --- | --- |
| 기본 배경 `#FFFFFF` | observed | `--v-color-background-primary`, 홈·콘텐츠 페이지 반복 computed background | 다크 섹션은 별도 문맥 표면 |
| 기본 전경 `#000000` | observed | `--v-color-foreground-primary`, 모든 페이지에서 지배적인 텍스트 값 | 검정은 브랜드 장식보다 기능적 대비에 주로 사용 |
| 보조 텍스트 `#5E5E5E` | observed | 홈을 제외한 다수 페이지에서 반복 | 알파 토큰의 원래 이름은 확인하지 못함 |
| 보조 표면 `#FAFAFA` | observed | 법인·전동화·안전·제품 페이지의 반복 섹션 배경 | 카드 전체에 강제하지 않음 |
| 약한 구조선 `rgba(0,0,0,.12)` | observed | 탭 선택 배경, 반복 border 계산값 | 선택 탭과 일반 구분선 역할을 구별해야 함 |
| 액션 블루 `#0B2DED` | observed | `--v-color-surface-accent-blue`, 액세서리와 제품 구성 CTA | 모든 CTA가 파란색은 아님; 검정 CTA도 반복 |
| 안전 오렌지 `#FC6408` | observed | `--v-color-surface-accent-safety` 선언 | 반복된 실제 사용은 표본에서 확인하지 못함 |
| 피드백 `#048220`, `#CE6700`, `#E52715` | observed | `surface-feedback-green/orange/red` 변수 선언 | 성공·경고·오류 상호작용을 실행하지 않아 상태 사용법은 partial |
| 독립 다크 모드 | uncertain | 검은 미디어/스토리 섹션은 있으나 토글이나 독립 테마 없음 | `preview-dark.html` 미생성 |

## 타이포그래피 근거

| 발견 | 수준 | 데스크톱 | 모바일 | 비고 |
| --- | --- | --- | --- | --- |
| 기본 글꼴 | observed | `"Volvo Centum", "Helvetica Neue", Helvetica, "Noto Sans", "Segoe UI", Arial, sans-serif` | 동일 | 모든 샘플 텍스트의 computed family |
| Broad 글꼴 변수 | observed | `"Volvo Broad Pro", "Volvo Broad", "Arial Black", sans-serif` | 동일 | 변수는 선언됐지만 샘플 텍스트에 계산 적용되지 않음 |
| 일반 페이지 H1 | observed | `48px / 56px`, 400 | `32px / 40px`, 400 | 홈·안전·지속가능성·액세서리 |
| 구성 랜딩 H1 | observed | `54px / 62px`, 400 | `36px / 44px`, 400 | 문맥별 대형 변형 |
| 제품명 statement | observed | `106px / 114px`, 400 | `36px / 44px`, 400 | XC60 상세 |
| 섹션 H2 | observed | `28px / 36px`, 400 | `24px / 32px`, 400 | 대부분의 콘텐츠 섹션 |
| Body/UI | observed | `16px / 24px`, 400 | 동일 | 가장 빈번한 값 |
| 소형 UI | observed | `14px / 22.008px`, 400 | 동일 | 탭과 제품 서브내비게이션 |
| Caption | observed | `12px / 20.004px`, 400 | 동일 | 면책·보조 표기 |
| 강조 | observed | weight `600` | weight `600` | 섹션 라벨과 카드 제목에 제한적으로 사용 |

대부분의 위계는 굵기보다 크기, line-height, 여백으로 만든다. weight `400`이 압도적으로 많고 `600`은 작은 제목·라벨에 제한된다.

## 컴포넌트 근거

| 컴포넌트 | 수준 | 직접 관찰 | 추출 규칙 |
| --- | --- | --- | --- |
| 전역 내비게이션 | observed | 데스크톱 `64px` 높이, 카테고리 버튼과 브랜드 링크; 모바일은 `Menu`와 브랜드 링크만 유지 | 흰 셸, 얇은 높이, 장식 최소화 |
| 기본 CTA | observed | `48px` 높이, `0 24px`, `9999px` radius | 검정/흰색/파란색 pill 버튼 |
| Compact CTA | observed | 제품 서브내비게이션과 모바일 구성 랜딩 `32px`, `0 16px` | 밀집된 컨텍스트에서만 사용 |
| Outline CTA | observed | 투명 배경, `1px inset` black/white outline | 회색 채움 대신 문맥 대비색 outline |
| 탭/서브내비게이션 | observed | `32px` 높이, `0 8px`, 선택 배경 `rgba(0,0,0,.12)` | 모바일은 내부 가로 레일로 유지 |
| 에디토리얼 카드 | observed | 정사각 모서리, 이미지 위/옆 텍스트, `#FAFAFA` 또는 흰 배경 | 그림자·rounded container를 만들지 않음 |
| 제품 스펙 목록 | observed | 2열 데스크톱, 1열 모바일, `16/24px` 라벨 | 수치 위계는 여백과 타이포로 구분 |
| 캐러셀 | observed | 홈 모델 영역에서 비활성 이전 버튼이 접근성 스냅샷에 노출 | disable 시각값은 별도 측정하지 않음 |
| FAQ | partial | `Show more`의 `aria-expanded=false` | 접힘 상태만 지원; 펼침 상태는 미검증 |
| 폼 입력 | uncertain | 성공한 공개 페이지에서 대표 input이 렌더링되지 않음 | 프리뷰에서 브랜드 규칙으로 제시하지 않음 |

## 상태 근거

| 상태 | 수준 | 근거 | 프리뷰 처리 |
| --- | --- | --- | --- |
| 선택 탭 | observed | `32px` 높이, `rgba(0,0,0,.12)` 배경 | 독립 상태 표본 제공 |
| FAQ 접힘 | observed | 안전 페이지 `aria-expanded=false` | 접힘 행만 제공 |
| 캐러셀 이전 비활성 | observed | 홈 접근성 스냅샷의 disabled button | 비활성 원형 유틸리티 표본 제공 |
| Hover/focus-visible | uncertain | 결정적 computed delta 미수집 | 브랜드 토큰으로 주장하지 않음 |
| 메뉴 열림 | uncertain | 두 번의 클릭 시도가 런타임 제한에 걸림 | 프리뷰에서 열림 상태 제외 |
| FAQ 펼침 | uncertain | 클릭 시도가 런타임 제한에 걸림 | 프리뷰에서 펼침 상태 제외 |

## 레이아웃 근거

| 발견 | 수준 | 근거 | 규칙 |
| --- | --- | --- | --- |
| 최대 그리드 | observed | `--v-size-grid-maxwidth: min(81rem, …)` | 콘텐츠는 최대 `81rem` 안에서 배치 |
| 페이지 여백 | observed | `--v-space-pagemargin: clamp(1rem … 4rem)` | 뷰포트에 따라 16–64px 범위로 증가 |
| 홈 콘텐츠 폭 | observed | 실제 client `1265px`에서 반복 콘텐츠 `1210px`, 좌우 약 `28px` | full-bleed 미디어와 constrained content를 교차 |
| 모바일 콘텐츠 폭 | observed | `390px`에서 일반 모듈 `342px`, 좌우 `24px`; 히어로 CTA는 좌우 `12px` | 핵심 CTA는 가용 폭을 넓게 사용 |
| 에디토리얼 리듬 | observed | 긴 미디어, 짧은 텍스트 블록, 2–3열 카드, full-bleed 스토리 밴드 | 작은 카드 대시보드보다 큰 스토리 단위 우선 |
| 반응형 스택 | observed | 홈 3열 서비스와 콘텐츠 카드가 모바일 1열로 스택 | DOM 순서를 유지하며 세로 흐름으로 전환 |

## 깊이와 고도 근거

| 발견 | 수준 | 근거 | 규칙 |
| --- | --- | --- | --- |
| 평면 시스템 | observed | 대부분 `borderRadius: 0`, 반복 card shadow 없음 | 깊이는 여백·색상·미디어 대비로 만든다 |
| Inset outline | observed | black/white `0 0 0 1px inset` CTA | 아웃라인 버튼에 제한 |
| 원형/완전 pill | observed | CTA `9999px`, 캐러셀/유틸리티 `50%` | 카드나 큰 패널에는 확장하지 않음 |
| 다크 미디어 밴드 | observed | 안전·액세서리·지속가능성·제품 페이지 | 독립 다크 테마가 아니라 스토리 대비 표면 |

## 데스크톱/모바일 충돌 처리

데스크톱 렌더링을 기본 시스템으로 사용했다. 모바일의 `32/40px` H1, `24/32px` H2, `36/44px` 제품명, 1열 카드, 전폭 CTA, 축약 내비게이션은 모두 responsive override로 기록했다. 모바일 네 페이지는 정상 렌더링됐으므로 데스크톱보다 우선해야 할 예외는 없었다.

## Completeness Evaluation

| Section | Coverage | Confidence | Strongest Evidence | Gaps |
| --- | --- | --- | --- | --- |
| Visual Theme & Atmosphere | complete | high | 홈, XC60, 안전, 액세서리, 지속가능성의 반복 full-bleed·에디토리얼 패턴 | 원본 스크린샷 미보존 |
| Color Palette & Roles | partial | high | 반복 computed colors와 공개 CSS 역할 변수 | focus, disabled, 검증 상태의 실제 사용 미확인 |
| Typography Rules | complete | high | 8개 데스크톱·4개 모바일 페이지의 computed family/size/line-height | Broad 계열의 실제 적용 표본 없음 |
| Component Stylings | partial | high | CTA, 탭, 내비게이션, 카드, 스펙, FAQ 접힘 | 폼, 비교 선택기, 메뉴 열림, FAQ 펼침 미확인 |
| Layout Principles | complete | high | `81rem` 그리드 변수, 실제 콘텐츠 폭, full-bleed와 constrained section | `1440px` 실제 렌더링 불가 |
| Depth & Elevation | complete | high | 반복 `0px` radius, card shadow 부재, inset outline | modal/overlay depth 미확인 |
| Do's and Don'ts | complete | medium | 8개 페이지의 반복적인 pill-action/square-card 대비 | 일부 규칙은 반복 패턴에서 보수적으로 추론 |
| Responsive Behavior | complete | high | 홈, XC60, 안전, 구성의 실제 `390 × 844` computed 비교 | 중간 breakpoint 값은 직접 측정하지 않음 |
| Agent Prompt Guide | complete | medium | 근거 기반 토큰·컴포넌트·반응형 규칙 종합 | 보호 자산은 대체 표면으로만 안내 |

## 법적·범위 메모

- 공개 렌더링의 시각적 분석이며 Volvo Cars와의 제휴를 의미하지 않는다.
- 원본 차량 사진, 로고, 영상, 브랜드 아트워크를 재사용 가능한 디자인 자산으로 복사하지 않았다.
- `preview.html`은 관찰된 표면 문법을 CSS 색상·그라디언트·중립 기하로 재구성한다.
- 폰트 이름과 CSS 변수는 정확성을 위해 원문을 유지하지만 폰트 파일은 포함하지 않는다.
- 독립 다크 모드 근거가 없어 `preview-dark.html`은 생성하지 않는다.
