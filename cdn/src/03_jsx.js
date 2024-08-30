// 컴포넌트 생성
/* 
    JSX
*/
function Hello() {
  // 리턴 뒤에 한 줄 문장
  // return <h1>Hello World!</h1>
  // 리턴 뒤에 두 줄 이상의 문장은 ( ); 로 묶고 문장 끝 ; 쓴다.
  return (
    // JSX의 태그 끝에는 ; 쓰지 않는다.
    // return 안의 root 태그는 1개 이어야 한다.
    <div className="card_list">
      {/* XML에서 빈 요소는 끝에 <img /> */}
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
