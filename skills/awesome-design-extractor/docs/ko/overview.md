# awesome-design-extractor 개요

`awesome-design-extractor`는 대표 URL을 입력받아 `awesome-design-md` 스타일의 디자인 시스템 산출물을 만들기 위한 문서형 Codex skill입니다.

v1은 실행형 크롤러가 아닙니다. 대신 Claude Code, Codex, OpenCode 등 다양한 코딩 에이전트가 자기 환경에서 사용할 수 있는 브라우저 자동화 도구를 선택해 디자인 시스템을 추출하도록 절차와 산출물 계약을 강하게 규정합니다.

## 핵심 방향

- 단순 HTML fetch가 아니라 렌더링된 웹페이지를 기준으로 분석합니다.
- Playwright, Playwright MCP, 브라우저 MCP, 에이전트 내장 브라우저 등을 우선 사용합니다.
- 필요한 경우 headed browser, 저장된 세션, Chrome 제어, computer use 같은 보조 경로를 사용할 수 있습니다.
- 도구나 접근 제한 때문에 확인하지 못한 부분은 숨기지 않고 `EVIDENCE.md`에 기록합니다.

## 산출물

기본 산출물은 다음과 같습니다.

- `DESIGN.md`: 최종 디자인 시스템 문서
- `EVIDENCE.md`: 관찰 근거, 추론, 한계, 완성도 평가
- `preview.html`: 추출된 디자인 시스템을 보여주는 정적 미리보기
- `preview-dark.html`: 다크 모드 근거가 충분할 때만 생성하는 선택 산출물

## 평가 기준

스킬은 `awesome-design-md`의 9개 디자인 시스템 요소를 출력 목차이자 완성도 평가 루브릭으로 사용합니다.

1. Visual Theme & Atmosphere
2. Color Palette & Roles
3. Typography Rules
4. Component Stylings
5. Layout Principles
6. Depth & Elevation
7. Do's and Don'ts
8. Responsive Behavior
9. Agent Prompt Guide

각 항목은 `coverage`, `confidence`, `evidence`, `gaps` 기준으로 평가합니다.

## 언어 정책

스킬 본문과 레퍼런스 문서는 영어로 작성합니다. 다만 스킬을 사용해 생성하는 최종 산출물은 사용자가 요청한 언어를 우선합니다. 브랜드명, CSS 토큰, UI 라벨처럼 원문 유지가 정확한 항목은 원문을 유지할 수 있습니다.

## 호환성

이 저장소의 루트는 Codex plugin 형식입니다. `.codex-plugin/plugin.json`은 Codex 전용 포장 메타데이터이므로 Claude Code가 직접 읽는 범위는 아닙니다.

다만 내부의 `skills/awesome-design-extractor/` 폴더는 `SKILL.md`, `references/`, `agents/openai.yaml`로 구성된 Agent Skill 형태를 유지합니다. Claude Code에서 사용할 때는 이 내부 skill 폴더를 Claude Code가 인식하는 skill 위치로 복사하거나 가져가면 됩니다.
