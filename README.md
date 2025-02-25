# React + Vite

<pre>
MBTI 성격 유형 테스트 서비스를 직접 만들기

api: glitch활용 json-server 생성 서버 활용 로그인 회원가입.


1. 테스트 기능 
2. 회원가입/로그인
3. 프로필 관리
4. 테스트 결과 저장
5. JWT 인증 (중요)
6. REST API 통신 (중요)


이번 프로젝트의 목표
- 인증 및 권한 관리를 통해 사용자의 데이터를 안전하게 보호
- Axios와 Tanstack Query(React Query)를 활용하여 비동기 데이터를 효율적으로 관리 
- json-server를 사용해 로컬 환경에서 API 서버를 구축

</pre>

<div>
현재 문제점: 
<p> (1) 네비게이션바가 로그인 시 적용되지 않음 > 새로고침으로 이겨냈으나 제대로 구현했다 볼 수 없음..</p>
<p> (2) 시간에 쫒겨서 나중에 바꿔야지 하고 결국 바꾸지 못한 alert 창이 한 가득.. </p>
<p> (3) 컴포넌트를 더 나누지 못했다.</p>
<br/>
느낀점:
<p> (1) 생각보다 데이터를 관리하는 것이 아직 어렵다. 코드가 처음 주어졌을 때, 해석하는 데 시간을 오래 쏟는 것 같다.</p>
<p> (2) 요구사항을 확실히 보고 시작하자! 제대로 확인하지 않고 진행하다가 되돌아갔었다..</p>
<br/>
배운점: 
<p> (1) . privateRoute를 처음으로 사용해봤다. 아직 잘 모르겠다.</p>
<p> (2) . 서버와 관련된 다양항 오류를 봤다. 400.. 401.. 404.. 405.. 공부하면 좋은 기회가 될 것 같다. </p>
<p> (3) . Tailwind CSS를 공부했다. 생각보다 적용하는 방법이 쉬웠다. 단위가 달라서 처음에 당황했다. </p>

<br/> 
목표 개선사항:
<p> (1). Tanstack Query 사용 </p>
<p> (2). alert 대신 모달 등, 다른 것 사용 </p>
</div>

```
mbti-test
├─ db.json
├─ eslint.config.js
├─ index.html
├─ package.json
├─ postcss.config.js
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ api
│  │  ├─ auth.js
│  │  └─ testResults.js
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  ├─ Navbar.jsx
│  │  └─ TestForm.jsx
│  ├─ data
│  │  └─ questions.js
│  ├─ index.css
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ Home.jsx
│  │  ├─ Login.jsx
│  │  ├─ Profile.jsx
│  │  ├─ Signup.jsx
│  │  ├─ TestPage.jsx
│  │  └─ TestResultPage.jsx
│  ├─ route
│  │  └─ Router.jsx
│  └─ utils
│     └─ calculateMBTI.js
├─ tailwind.config.js
├─ vite.config.js
└─ yarn.lock

```
