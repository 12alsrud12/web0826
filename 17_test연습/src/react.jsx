// 리엑트 로드 이벤트 필요 없음!
// 리액트 컴포넌트 생성!
function UiCard() {
    return (

    )
}

// 출력
ReactDOM.render(
    <div className="ui">
        <UiCard />
        <UiCard />
        <UiCard />
        <UiCard />
    </div>,
    document.querySelector("#ui-wrap")
);