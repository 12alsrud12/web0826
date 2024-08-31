// 리엑트 로드 이벤트 필요 없음!
// 리액트 컴포넌트 생성!
function UiCard() {
    return (
        <div className="ui-card">
            <div className="ui-img">
            </div>
            <div className="ui-bx">

            </div>
        </div>
    );
}

// 출력
ReactDOM.render(
    <div className="ui-card-list">
        <UiCard />
        <UiCard />
        <UiCard />
        <UiCard />
    </div>,
    document.querySelector("#ui-card")
);