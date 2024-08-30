// 컴포넌트 생성

/* 
    JSX?
      JSX는 JavaScript XML을 의미합니다.
        -> XML은 태그를 정의하여 사용할 수 있다. 예) <Hello />
      JSX를 사용하면 React에서 HTML을 작성할 수 있습니다.

      1. {표현식}
        - 표현식이란? 변수, 속성, JS표현식(연산 등))
        (1) {// 주석}
        (2) 인라인 스타일
            style={JS의객체}
            style={{속성: 값, 속성:값, ...}}

      2. 최상위 요소는 반드시 하나!!!
        - HTML 태그 -> 실제 DOM에 추가 된다.
        - <React.Fragment></React.Fragment> 또는 <></> -> 실제 DOM에는 보이지 않는다.

        function 함수(){
          return <h1>한 줄 문장이다</h1>
        }

        function 함수(){
          return
            <> 
              <h1>첫 번째 문장이다</h1>
              <h2>두 번째 문장</h2>
            </>
        }

        function 함수(){
          return
            <React.Fragment> 
              <h1>첫 번째 문장이다</h1>
              <h2>두 번째 문장</h2>
            </React.Fragment>
        }

        function 함수(){
          return
            <div> 
              <h1>첫 번째 문장이다</h1>
              <h2>두 번째 문장</h2>
            </div>
        }

      3. 빈 요소는 />로 닫는다.
        예) <Hello />, <img />, <input />
      
      4. class 대신 className으로 기록한다.
        <div className="card_list">

      5. JSX 내부에는 제어문을 사용할 수 없다.
        따라서 if 조건문 대신 삼항 연산자 사용한다.
*/

// JSX는 한 줄 문장의 경우 () 생략 가능!
// const myElement1 = (<h2>나는 JSX이다.</h2>);
const myElement1 = <h2>나는 JSX이다.</h2>;

// 최상위 요소는 반드시 하나!!!
// JS의 선언적 함수
function myFunction() {
  <>
    <h2>나는 함수 안의 JSX이다.</h2>
    <p>JSX는 반드시 최상위 부모는 하나!</p>
  </>;
}
// HTML DOM 요소 가져오기
const container0 = document.querySelectorAll(".item").item(0);
// 리액트 가상돔 요소 생성
const root0 = ReactDOM.createRoot(container0);
// 컴포넌트의 경우는 (<컴포넌트이름 />) 함수는 (함수())
// JS의 함수는 호출하여 사용할 수 있으나, 가급적 컴포넌트를 사용하기
root0.render(myFunction());

// 리액트의 함수형 컴포넌트
function MyFunction() {
  // 내부 스타일 -> 객체로 CSS 스타일을 변수로 선언 후 만들어서 적용하기.
  const styleObj = {
    width: "100px",
    border: "1px solid orange"
  };
  return (
    // 요기는 JS네 하하!
    <React.Fragment>
      {/* 요기가 드뎌 JSX 영역이구나!!! */}
      <h2>나는 함수 안의 JSX이다.</h2>
      <p>JSX는 반드시 최상위 부모는 하나!</p>
      {/* class를 className으로 쓴다. */}
      <p className="tomato">JSX는 반드시 최상위 부모는 하나!</p>
      {/* 
              1. 인라인 스타일
                <태그명 style={{}}>
                  -> 바깥쪽 {}는 표현식 
                  -> 안쪽 {}는 객체
                  -> 객체로 스타일을 지정한다.
                  -> 속성명은 카멜표기법으로 쓴다.
                    예) border-radius: "5px" -> 에러
                    예) "border-radius": "5px"
                    예) borderRadius: "5px" -> 카멜 표기법
                    만약에 속성명 객체로 다 묶으면 style={변수명} 이렇게 하나만 하면 다 적용된다.
                    만약 인라인, 내부 둘 다 사용시에는
                    style={{
                      // 바로 아래 카멜표기법 한게 인라인 CSS
                      borderRadius: "5px",
                      // 이 아래 둘은 위 객체에서 스타일 제작해둔 객체 (Object)
                      width: styleObj.width,
                      border: styleObj.border
                    }}

                    실무에서는 style={변수명} 이렇게 하는게 맞다.

              2. 빈 요소는 />로 닫는다.
            */}
      <img
        style={
          styleObj
        }
        src="https://images.velog.io/images/front/post/394731db-5b9d-42de-9b2f-2757c9b0b2c8/img.png"
        alt="리액트 로고"
      />
    </React.Fragment>
  );
}


// HTML DOM 요소 가져오기
const container1 = document.querySelectorAll(".item").item(1);
// 리액트 가상돔 요소 생성
const root1 = ReactDOM.createRoot(container1);
// 컴포넌트는 XML 빈 요소로 호출한다. (<태그 />) <- 이때 태그의 이름은 컴포넌트 이름으로 한다.
root1.render(<MyFunction />);
