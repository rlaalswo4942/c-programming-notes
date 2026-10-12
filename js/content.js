/* 프로그래밍의 이해 학습노트 - 사이트 설정
 * 원고 원본: Desktop/프로그래밍의_이해_ppt 의 강의 PPT 제1~16장 (2026-10-12 텍스트·슬라이드 이미지 스캔)
 *   content/textbook.md    U01~U16 = 강의 1~16장, 용어 사전, 한눈에 정리
 *   content/questions.json 자체 제작 확인 문제 (단원별 5문항)
 *   content/sources.json   S01~S24 = cppreference / Microsoft 문서 (2026-10-12 링크 확인)
 * 바꾸는 곳은 이 파일과 content/ 뿐 — 엔진(js/app.js draw.js store.js, css)은 study-site-frame 과 동일하게 유지
 */
window.SITE = {
  title: "프로그래밍의 이해",
  icon: "📘",
  eyebrow: "C 언어 · 강의 1–16장 복습",
  sub: "첫걸음부터 라이브러리 함수까지 — 강의 슬라이드를 단원별 노트와 확인 문제로",
  notice: `<b>개인 학습 노트</b> — 강의 PPT(제1~16장)를 바탕으로 정리했습니다. 슬라이드에 없던 보충 설명은 <span class="lb plan">교육용 설명</span> 라벨로 구분했고, 확인 문제는 자체 제작입니다.`,
  key: "cprog-intro",
  syncApi: "https://ai-hackathon-sync.vercel.app/api/state",
  unit: "", unitPrefix: "", unitEn: "CHAPTER",
  book: {
    start: "^시작하기",
    startDesc: "읽는 법 · 전체 지도 · 실습 환경",
    map: "## 전체 지도",
    mapDesc: "첫 목표", mapLevel: "난이도",
    dict: "^용어 사전",
    goals: "오늘의 목표",
    reviewTitle: "한눈에 정리", reviewEn: "교재 끝부분", reviewDesc: "형식 지정자·연산자·제어문 비교, 자주 하는 실수, 강의 코드 오류 모음"
  },
  labels: {
    book: "U01 – U16",
    extraGroup: "보강 자료", extra: "",
    dictTitle: "용어 사전",
    sources: "S01~S24 = C 표준 레퍼런스(cppreference)와 Microsoft 문서. 본문 개념의 근거이며, 본문 자체는 강의 PPT를 따릅니다.",
    quizNote: "자체 제작 확인 문제", scoreNote: "실제 시험 점수와 무관합니다."
  },
  features: { calc: false },
  resetEpoch: "",
  resetKeys: ""
};

window.RESEARCH_SOURCES = {};
window.EXTRA = [];
