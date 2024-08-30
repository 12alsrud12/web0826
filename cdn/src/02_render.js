/*  

    document.write("<hr>");

    1. 컴포넌트 형식
      function 컴포넌트(){
        return (
            JSX 문장
            <hr>
        );
      }

      가. 컴포넌트 이름의 첫 글자는 대문자로 쓴다.
      나. return 키워드 필수!
      다. JSX의 태그 끝에는 ; 을 쓰지 않는다.
      라. JSX 문장은 "" 묶으면 안된다.
      마. JSX 문장이 한 문장일 경우 (); 생략 가능
*/

// 컴포넌트 생성
function Hello() {
    // 리턴 뒤에 한 줄 문장
    return <h1>Hello World!</h1>
}


/* 
    // 라이브러리 이름: React, ReactDOM(가상돔), Babel(JSX번역)

    // 리액트의 출력
    // 객체.메서드
    ReactDOM.render(요소, 컨테이너); 
      1. ReactDOM은 가상 DOM을 생성하는 객체
      2. render()은 요소를 컨테이너에 넣는 메서드
      3. 요소는 컴포넌트의 리턴 값을 XML의 빈 요소로 쓴다.
        예) <Hello />
      4. 컨테이너는 HTML 페이지의 div#root를 말한다.
*/

// 출력 -> 렌더링
// ReactDOM.render(<App />, document.querySelector("#root"));

ReactDOM.render(
    <div style={{ display: "flex" }}>
        <Hello />
        <Hello />
        <Hello />
        <Hello />
    </div>,
    document.querySelector("#root")
);
