/*  
  1. 컴포넌트 이름의 첫 글자는 대문자로 쓴다.

  function 컴포넌트(){
    return JSX 문장;
  }
*/

// 컴포넌트 생성
function Hello() {
    return <h1>Hello World!</h1>;
}

// ReactDOM.render(자식요소, 부모요소)
// 자식요소를 부모요소에 넣어 화면에 표시한다.
ReactDOM.render(
  // 컴포넌트 호출
  <Hello />, // XML -> <빈 요소 /> 예) <img />
  document.querySelector("#root")
);