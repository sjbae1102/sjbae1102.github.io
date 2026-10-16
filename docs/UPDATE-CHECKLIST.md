# 홈페이지 업데이트 체크리스트

`data/site-data.js` 한 곳을 수정한 뒤, 아래 항목을 따라 **Eng/Kor**·**모든 페이지**가 맞는지 확인합니다. 상세 규칙은 [UPDATING.md](../UPDATING.md)를 참고하세요.

공통으로 **항상** 갱신:

| 필드 | 위치 |
| --- | --- |
| `lastUpdated` | `data/site-data.js` 상단 |
| `copyrightYear` | `data/site-data.js` 상단 |
| 푸터 정적 fallback | `index.html`, `about/`, `news/`, `publications/`, `conference/`, `others/` 의 `#current-year`, `#last-updated` (JS 없을 때 표시; `site-data`와 동일 문자열) |

---

## 1. 논문 게재 (Published)

| 단계 | Eng | Kor | 데이터/파일 |
| --- | --- | --- | --- |
| 논문 목록 | Publications 페이지·홈 Publications 탭 | 동일 (본문 영어) | `publications.international` 또는 `publications.domestic` |
| Biography | Publications와 동일 목록·IF/JCR | 동일 | **자동 생성** (`js/site-render.js`) — 별도 `cvPublications` 없음 |
| 소식 | News 페이지·홈 News 탭 | `contentKo` | `news[]` 항목 추가 |
| 썸네일 | 카드 왼쪽 | — | `news/` 아래 PNG/JPG, 권장 **800×1067** (첫 페이지 스크린샷) |
| News 이미지 | 본문 카드 | — | `image: "news/..."` (동일 규칙) |
| IF/JCR | 국제저널 카드·Biography | — | `metricsHtml`: `IF x.x (연도)` · `JCR x.x%` (예: ISPRS **12.9 (2025)**, **3.0%**; RSE **11.4 (2025)**, **2.4%**) |
| DOI | 링크·`venueHtml` | — | `doi`, 필요 시 `[Dataset]` 링크 |

**검증:** `npm run validate` → Biography에 Publications의 모든 `id`가 반영되는지 확인.

---

## 2. 논문 제출 / Under review

| 단계 | Eng | Kor | 데이터/파일 |
| --- | --- | --- | --- |
| In progress 목록 | Publications 상단 | 동일 | `publications.inProgress[]` — `html`에 `status-under-review` + **Under review** |
| Biography | Publications와 동일 3건 | 동일 | **자동** (`inProgress` 렌더) |

현재 Under review 예: TGRS landslide, RSE ADAPT-TL(전지구-지역 전이), Science Advances ENSO.

---

## 3. Revision accepted → 게재로 전환

1. 해당 항목을 `publications.inProgress`에서 **삭제**.
2. `publications.international` 또는 `domestic`에 **추가** (`id`, `image`, `metricsHtml`, `doi` 등).
3. `news[]`에 게재 소식 추가(선택).
4. `lastUpdated` / 푸터 fallback 갱신.

---

## 4. 학회 참석 (Conference)

| 단계 | Eng | Kor | 데이터/파일 |
| --- | --- | --- | --- |
| Conference 페이지 | 국제·국내 목록, **전체 날짜** (`Oct 13, 2026`) | `textKo` | `conferences.international` / `conferences.domestic` |
| Biography | 학회명·배지 동일, 왼쪽 열은 **연도만** (`2026`) — Publications·Awards와 동일 | `textKo` | **자동** (`#about-conferences`, `date`에서 연도 추출) |
| 국제 Oral/Poster | 배지 | — | `presentationType`: `Oral` 또는 `Poster` (미정이면 `null`) |
| 홈 Conference 탭 | Conference 페이지와 동일 **전체 날짜** | — | `data-site-render="conferences"` |
| News | 참석/발표 소식 | `contentKo` | `news[]` |
| 사진 | News 카드 | — | `news/` 또는 `news-photos/` → `import-news-photos.py` |

**규칙:** 실제 참석(또는 확정된 일정) 후에만 추가.

### 학회 목록 문구 형식 (`textEn` / `textKo`)

Conference·홈 Conference 탭은 **한 줄 = `date` 전체 + 공식 학회명**만 표시합니다. Biography 학회 섹션은 **연도 + 학회명**만 표시합니다(Eng/Kor 모두 연도는 `2026` 형식, 월·일 없음).

| 허용 | 금지 |
| --- | --- |
| `2026 IEEE International Geoscience and Remote Sensing Symposium (IGARSS)` | 장소·국가·개최 기간 `(Aug 9–14, 2026)` |
| `5th Asian Conference on Meteorology (ACM2026)` | 따옴표 발표 제목 `"Hourly all-sky GPP..."` |
| `2026 Korean Society of Climate Change Spring Conference` | `, Sejong University`, 괄호 안 개최 기간·venue |
| 국제: `presentationType` → Oral/Poster 배지 | News에 쓰는 장황한 문장을 목록에 복사 |

**예시 (국문):** `2026 한국기후변화학회 춘계학술대회` — 국내는 영문·국문 각각 기존 항목 톤에 맞춤.

발표 제목·장소·사진·수상은 **`news[]`** 에만 작성합니다.

`npm run validate`가 학회 `textEn`/`textKo`에 따옴표·괄호 안 개최 기간·장소/발표 제목 흔적(예: `HICO`, `Sejong University`, `). "` )이 있으면 실패합니다. (학회 정식 명칭 안의 쉼표, 예: Surveying, Geodesy, … 는 허용)

---

## 5. 수상 (Award)

| 단계 | Eng | Kor | 데이터/파일 |
| --- | --- | --- | --- |
| Biography | Awards 섹션 | `textKo` | `about.awards[]` |
| News | 소식 | `contentKo` | `news[]` + `image` (예: `news/molit2026_award.jpg`) |

---

## 6. 장학·연구비 (Grant)

| 단계 | Eng | Kor | 데이터/파일 |
| --- | --- | --- | --- |
| Biography | Grants | `textKo`, `detailKo` | `about.grants[]` |

---

## 7. 신분·소속·프로필 문구

| 단계 | Eng | Kor | 위치 |
| --- | --- | --- | --- |
| 홈 프로필 | 학위·소속 | `script.js` → `translations.ko.home` | `index.html` `data-i18n` |
| Biography 상단 | Status·Major·Department | `translations.ko.about` | `about/index.html` `data-i18n` |

---

## 8. 캠퍼스/언론 링크 (External news)

| 단계 | 위치 |
| --- | --- |
| 사이드바·외부 소식 | `external-news-data.js` (기존 구조) |
| 본인 작성 News | `news[]` (캠퍼스 보도 요약 시) |

---

## 9. 최종 검증 (매 배포 전)

```bash
npm run validate
```

헤드리스 렌더 (1280px 데스크톱, 레이아웃·404 확인):

```bash
npx playwright install chromium
node scripts/screenshot-pages.mjs
```

확인 페이지: `/`, `/about/`, `/news/`, `/publications/`, `/conference/`, `/others/` — Eng/Kor 전환 후 Biography·푸터·Conference 배지.

`main` 브랜치 스크린샷과 diff가 필요하면 `docs/screenshots/`를 비교합니다.

---

## 현재 보류·미정 (사용자 확인 대기)

| 항목 | 상태 |
| --- | --- |
| 2026.06 한국기후변화학회 | 발표 **제목 미정** (참석 News·Conference 항목만 존재) |
| 2026.06 한국대기환경학회 | 발표 **제목 미정** (데이터에 아직 없음 — 추가 시 Conference·News·Biography 동시 반영) |
| UNIST 등 캠퍼스 뉴스 URL | `external-news-data.js` 링크 **사용자 제공 대기** |

---

## IF/JCR 표기 규칙 요약

- 국제 저널: Publications `metricsHtml` + Biography 자동 `(Impact Factor: …, JCR: …)` 변환.
- 연도가 있는 IF는 괄호에 표기: **12.9 (2025)**, **11.4 (2025)**.
- 국내 학술지: IF/JCR 생략.
