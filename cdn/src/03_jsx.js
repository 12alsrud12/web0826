// 컴포넌트 생성
/* 
    JSX?
      JSX는 JavaScript XML을 의미합니다.
      -> XML은 태그를 정의하여 사용, 예> <Hello />>
      JSX를 사용하면 React에서 HTML을 작성할 수 있습니다.

    1. JSX {표현식} - { 표현식 } 안에 React 변수, 속성, JS 표현식을 사용한다.
        - 표현식: 변수, 속성, JS표현식(연산 등)
          (1) 인라인 스타일
                - style={{속성: "값"}}
    2. 최상위 요소는 반드시 한 개여야 한다 (두 줄 부터는 하나의 최상위 요소로 감싸주어야한다.)
        - HTML 태그
        - <React.Fragment></React.Fragment>
        - <></>로 한다.
          추가로 HTML태그는 DOM 즉 HTML에 표시되지만 <React.Fragment></React.Fragment>와 <></>는 실제 DOM에는 보이지 않는다.
      예)
        1. 한 줄 문장
        function 함수() {
          return <h1>한 줄 문장이다.</h1>
        }

        2. 두 줄 문장 -> 여기서부터 HTML태그 or <React.Fragment></React.Fragment> or <></> 으로 감싸줘야한다.
        function 함수() {
          return <h1>첫 번째 문장이다.</h1>
          return <h2>두 번째 문장이다.</h2>
        }

    3. 빈 요소는 />로 닫는다.
        예) <Hello />, <img />, <input />

    4. class 대신 className으로 기록한다.
        예) <div className="card_list"></div>
    5. JSX 외부에 조건문 if 사용하기
        + 따라서 JSX 내부에 조건문을 사용할 때에는 삼항 연산자를 사용한다
*/
// JSX는 한 줄 문장의 경우 ( 이 안에만 JSX! ) 생략가능!
const myElement1 = (<h2>나는 JSX이다.</h2>);
// () <-생략이 되지만 그 바깥은 JS 라서 아래는 </h2>옆에 ; 추가해야한다.
const myElement2 = <h2>나는 JSX이다.</h2>;

// 최상위 요소는 반드시 하나!
// JS의 선언적 함수~
function myFunction() {
  <>
    <h2>나는 함수 안의 JSX이다.</h2>
    <p>JSX는 두 개의 부모 태그를 가지면 안되고 반드시! 하나의 부모만 있어야 한다.</p>
  </>
}
// 이번엔 리액트의 함수형 컴포넌트! + 리액트는 첫 글자는 대문자! + return!
function MyFunction() {
  return (
    // 놀랍게도 여기까지는 아직 JS 지롱!
    <React.Fragment>
      {/* 요기 안부터는 드디어 JSX 영역이구나! */}
      <h2>나는 함수 안의 JSX이다.</h2>
      <p>JSX는 두 개의 부모 태그를 가지면 안되고 반드시! 하나의 부모만 있어야 한다.</p>
      {/* 그리고 React에서는 안쓰는 편이 비교적 좋기는 하지만 HTML과는 다르게 이렇게 인라인 CSS 를 사용해도 된다고 한다. */}
      {/* JSX 인라인 스타일 -> style={{속성: "값"}} */}
      <img style={{ border: "1px solid red" }} src="https://images.velog.io/images/front/post/394731db-5b9d-42de-9b2f-2757c9b0b2c8/img.png" alt="리액트 로고" />
    </React.Fragment>
  );
  // 인라인 CSS란? HTML태그에 즉발로 style을 적용하는 방식
}

/* 
    리액트의 출력
      1. 첫 번째 방법 
        ReactDOM.render(element, container); 

        (1) ReactDOM은 가상 DOM을 생성하는 객체
        (2) render()은 element를 container에 넣는 메서드
        (3) element는 변수명으로 쓴다.
        (4) container는 HTML 페이지의 div#root를 말한다.

      2. 두 번째 방법
        const container = document.getElementById('root');
        const root = ReactDOM.createRoot(container);
        root.render(<p>Hello</p>);

        (5) ReactDOM.createRoot()는 HTML 요소를 가져와서 새롭게 루트(root)를 생성한다.

      우리는 복잡하더라도 두번째 방법을 써야한다고 한다.
*/
function Hello() {

  return (
    <div className="card_list">
      <div className="card_img">
        <img
          src="https://img.megabox.co.kr/SharedImg/2024/07/03/QaslTt607PkNH8mPWm6ZUH3UwDx2bHoH_420.jpg"
          alt="사랑의 하츄핑"
        />
      </div>
      <div>
        {/* {{}} -> 바깥쪽 괄호는 표현식 */}
        {/* {{}} -> 안쪽 객체 괄호 */}
        {/* 객체로 스타일을 지정한다. */}
        {/* 속성명은 카멜표기법으로 쓴다. 예) borderRadius 또는 "border-radius" */}
        <span className="card_age">All</span>
        {/* class -> className 으로 기록한다.*/}
        <h3 className="card_tit">사랑의 하츄핑</h3>
      </div>
      <div>
        <span className="card_rate">예매율 1%</span>
        <span className="card_date">개봉일 2024.08.07</span>
      </div>
      <div className="card_btn">
        <button className="card_heart">❤ 487</button>
        <button className="card_reservation">예매</button>
      </div>
    </div>
  );
}

// 출력 -> 렌더링
ReactDOM.render(h1, document.querySelector("#root"));
// HTML DOM 요소 가져오기
const container = document.getElementById('root');
// 리액트 가상돔 요소 생성
const root = ReactDOM.createRoot(container);
// ↓ 리액트 출력
root.render(<p>Hello</p>);
