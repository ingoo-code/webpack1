# Blog 포ㅓㄹ더 생성
    -> back 폴더 생성
    -> front 폴더 생성 

# 작업할 디렉토리 까지 접근해야됨.


# npm init으로 node.js 환경으로 만들어줌.


# npm install next react react-dom

React 배운느낌보다
Next 기본구조 정도 배운다

# package.json 을 수정함

"dev":"next dev -p 3001 -H 0.0.0.0",
"build":"next build",
"start":"next start",
"lint":"next lint"

# pages 폴더를 생성합니다. 
    url localhost:3001/ 일때 hello world ! 
    어떻게 해야할까요 ?

    pages 폴더안에 index.jsx 파일 만들고 컴포넌트 생성하기.
    * export default 주의 


# dev server로 실행하기
npm run dev 

노트북을 사용하시는분들. wifi 핸드폰이랑 같은 wifi라면
- 윈도우키 누르고 cmd 친다음에 앤터 
    ipconfig 192.168.0.15:3001

  데스크탑인데 공유기사용하고있다 그래도 됩니다. 

  ------------- Next.js 맛보기 --------------------

  # pages 폴더
  -> index.jsx // 메인페이지
  -> join.jsx  // 회원가입
  -> login.jsx // 로그인페이지고
  -> /posts/post.jsx // 글쓰기 
  
    폴더만 생성하면됩니다.

  // localhost:3001/posts/post
  // localhost:3000/user/join


# 동적 라우팅 사용방법

1. 파일명을 배열형식으로 만든다 [post].jsx 


# 레이아웃 구성하기 
-> components 폴더를 생성
   -> BlogLayout.jsx 파일 생성 
       컴포넌트 까지 생성코드작성하기

# 또다른 레이아웃구성하기
-> compoents 폴더안에서 FormLayout.jsx 생성한뒤
    login.jsx / join.jsx에 사용하기.

# Link 컴포넌트 사용하기
  React에 사용되는 Link와 사용법이 다름 
  # import Link from 'next/link'
  ex ) react -> <Link to="/">menu1</Link>
       next.js -> <Link href="/"><a>menu1</a></Link>

# index.html 어디감?


# Next 모든 컴포넌트를 실행하기전에 거처가는 컴포넌트가 있습니다.

# app.jsx ? 어디감? HEAD 모든곳에 공통적으로 사용이 가능하겠죠. 혹은 공통적인 CSS가있다면 여기다가 import 하는게 좋겠져. 


npm install styled-components



# Styled Components 환경설정
# _document.jsx 만들기 


# .babelrc 

