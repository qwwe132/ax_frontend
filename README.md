# AX1기 2조 — GitHub 클론 프론트엔드

## 프로젝트 구조

페이지 하나 = 폴더 하나. 각 페이지 폴더 안에 그 페이지의 **HTML + CSS + 이미지/SVG**가 모두 들어있습니다.

```
frontend_project/
├── index.html              # 홈 (진입점, 루트 고정)
├── home/                   # └ 홈 페이지 전용 에셋
│   ├── home.css
│   └── images/
├── issues/
│   ├── issues.html
│   ├── issues.css
│   └── svg/
├── pull-requests/
│   ├── pull-requests.html
│   ├── pull-requests.css
│   └── pull-requests.js    # 아직 HTML에 연결 안 됨
├── discussions/
│   ├── discussions.html
│   ├── discussions.css
│   └── images/
├── project/
│   ├── project.html
│   ├── project.css
│   └── images/
├── repositories/
│   ├── repositories.html
│   └── repositories.css
└── docs/
    └── dev_logs.md
```

## 규칙

- **내 페이지 에셋은 내 폴더에** — 다른 페이지 폴더를 참조하지 않습니다.
- **경로는 항상 상대경로로** — `/svg/icon.svg` 처럼 `/` 로 시작하면 파일을 더블클릭해서 열 때 깨집니다. `svg/icon.svg` 로 씁니다.
- **파일명은 영문 소문자 + 하이픈** — 공백이나 한글이 들어간 파일명은 URL 인코딩 때문에 환경에 따라 깨집니다.
- 페이지 간 이동은 `../다른페이지/다른페이지.html` 형태로 씁니다.

## 이전 경로 대조표

| 이전 | 현재 |
|---|---|
| `css/style.css` | `home/home.css` |
| `images/` | `home/images/` |
| `Issues.html` / `Issues.css` | `issues/issues.html` / `issues/issues.css` |
| `svg/` | `issues/svg/` |
| `all_pull_request.html` | `pull-requests/pull-requests.html` |
| `pullrequests.css` | `pull-requests/pull-requests.css` |
| `js/common.js` | `pull-requests/pull-requests.js` |
| `Discussions/Discussions.html` | `discussions/discussions.html` |
| `Discussions/css/style.css` | `discussions/discussions.css` |
| `project/project_page.html` | `project/project.html` |
| `project/project_page_style.css` | `project/project.css` |
| `project/img/` | `project/images/` |
| `project/repos/repositories.html` | `repositories/repositories.html` |
| `project/repos/repo_style.css` | `repositories/repositories.css` |
| `dev_logs.md` | `docs/dev_logs.md` |
| `main.html` | 삭제 (내용 없는 껍데기) |
