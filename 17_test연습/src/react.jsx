// 리엑트 로드 이벤트 필요 없음!
// 리액트 컴포넌트 생성!
function UiCard1() {
    return (
        <div className="ui-card">
            <div className="ui-img">
                <img src="../images/ui-card-img1.svg" alt="ui_카드_이미지1" />
            </div>
            <div className="ui-bx">
                <h4>라온</h4>
                <p>0<span>(0)</span></p>
                <h6>부산 수영구 · 모든견종 · 무선인터넷 · 엘리베이터</h6>
                <h5>100,000원</h5>
            </div>
        </div>
    );
}

// 출력
ReactDOM.render(
    <div className="ui-card-list">
        <UiCard1 />
        <UiCard1 />
        <UiCard1 />
        <UiCard1 />
    </div>,
    document.querySelector("#ui")
)