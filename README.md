# Daeyeop Kim's Portfolio

석사 지원용 포트폴리오 사이트입니다. React로 만들었고 GitHub Pages에 호스팅되어 있습니다.

**Live Site:** [daeyeopkim.github.io](https://dea980.github.io)

## 시작하기

```bash
npm install
npm start
```

로컬에서 `http://localhost:3000`으로 실행됩니다.

## 배포

```bash
npm run deploy
```

이 명령어가 빌드하고 `gh-pages` 브랜치에 푸시합니다.

## 주요 파일

- `src/portfolio.js` - 여기서 내 정보 수정
- `src/translations.js` - 한/영 번역
- `src/theme.js` - 테마 색상

## 구조

- `src/components/` - 재사용 가능한 컴포넌트들
- `src/containers/` - 각 섹션 (greeting, skills, researchInterests 등)
- `src/pages/` - 라우트 페이지들

## 사용한 기술

- React (CRA)
- react-router-dom
- styled-components
- react-reveal (애니메이션)

원본 템플릿은 [ashutosh1919/masterPortfolio](https://github.com/ashutosh1919/masterPortfolio)에서 가져왔습니다.
