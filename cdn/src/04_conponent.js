/*  
    컴포넌트(구성요소)란? -> 우리말 번역으로는 "구성요소"라 한다.
        정의: 
            1. HTML 요소를 반환(return)하는 함수와 같습니다.
                -> 함수 자체는 반환할수도 안할수도 있지만 컴포넌트에서는 "무조건" 반환한다.
                -> 그래서 함수는 필요하면 쓰는 정도이다.

            2. 독립적이고 재사용 가능한 코드 조각이다.
                -> 반환(return), 독립적, 재사용 가능!
                -> 독립적,재사용: "별도의 하나의 파일"로 만들어 "사용"할 수 있다.
                    - 원래는 독립적으로 쓰기가 힘들지만 여기서는 쉽다고 한다. 컴포넌트는 다 묶어서 쓸 수도 있기 때문에
                        예) 아래 메가박스 UI card를 내보낼때
                                - 내보내기: export default hello;
                                - 불러오기: import { hello } from "04_conponent.js";
                            이렇게 쉽게 할...수 있나 ???

        종류
            1. 클래스형 컴포넌트 -> Hooks 지원 X
            2. 함수형 컴포넌트 -> Hooks 지원 O -> 우리는 이걸 사용! 이후에 JSX에서 이벤트를 쓰게 해주는 Hooks라는 기능을 써야하기 때문이다.
        
    1. 컴포넌트 형식
      function 컴포넌트(){
        return (
            JSX 문장 = HTML 요소를 JS를 사용할 수 있는 XML 언어로 기록한다.
        );
      }

      가. 컴포넌트 이름의 첫 글자는 대문자로 쓴다.
      나. return 키워드 필수!
*/
// 클래스형 컴포넌트
// extends는 상속
// Car의 부모 컴포넌트는 React.Component 이다.
// 클래스형 컴포넌트를 사용하려면 반드시 React.Component를 상속(extends)받아, 사용자 클래스 컴포넌트인 Car 컴포넌트를 생성한다.
class Comp1 extends React.Component {
    // render 메서드 내에
    render() {
        // 시작 값으로 return
        return <h2>나는 클래스 컴포넌트!</h2>;
    } // <- 여기까지가 render 이다!
}

// 함수형 컴포넌트
// 함수형 컴포넌트는 상속(extends)"받지 않고!" "render() {}" 이 필요가 없다.
function Comp2() {
    return <h2>나는 함수형 컴포넌트!</h2>;
}

// 컴포넌트 생성
function Hello() {
    // 리턴 뒤에 한 줄 문장
    // return <h1>Hello World!</h1>
    // 리턴 뒤에 두 줄 이상의 문장은 ( ); 로 묶고 문장 끝 ; 쓴다.
    return (
        // JSX의 태그 끝에는 ; 쓰지 않는다.
        // return 안의 root 태그는 1개 이어야 한다.
        <div className="card_list">
            <div className="card_img">
                <img
                    src="https://img.megabox.co.kr/SharedImg/2024/07/03/QaslTt607PkNH8mPWm6ZUH3UwDx2bHoH_420.jpg"
                    alt="사랑의 하츄핑"
                />
            </div>
            <div>
                <span className="card_age">All</span>
                <h3 className="card_tit">사랑의 하츄핑</h3>
            </div>
            <div>
                <span className="card_rate">예매율 1%</span>
                <span className="card_date">개봉일 2024.08.07</span>
            </div>
            <div className="card_btn">
                <button>487</button>
                <a href="#">예매</a>
            </div>
        </div>
    );
}

// 컴포넌트 ↓
// function App(){
//   return (
//     <div style={{display: "flex"}}>
//       <Hello />
//       <Hello />
//       <Hello />
//       <Hello />
//     </div>
//   );
// }

// 리액트 출력하기
// HTML DOM 요소 가져오기
const container0 = document.querySelectorAll(".item").item(0);
// 리액트 가상돔 요소 생성
const root0 = ReactDOM.createRoot(container0);
// 컴포넌트는 XML 빈 요소로 호출한다. (<태그 />) <- 이때 태그의 이름은 컴포넌트 이름으로 한다.
root0.render(<Comp1 />);

// HTML DOM 요소 가져오기
const container1 = document.querySelectorAll(".item").item(1);
// 리액트 가상돔 요소 생성
const root1 = ReactDOM.createRoot(container1);
// 컴포넌트는 XML 빈 요소로 호출한다. (<태그 />) <- 이때 태그의 이름은 컴포넌트 이름으로 한다.
root1.render(<Comp2 />);