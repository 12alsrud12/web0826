// 리엑트 로드 이벤트 필요 없음!
// 리액트 컴포넌트 생성!
function UiCard1() {
    return (
        <div className="ui-card">
            <div className="ui-img">
                <img src="https://raw.githubusercontent.com/12alsrud12/web0826/445e06bfbd1f464ce7a60ee3210644af5fd6f4ce/17_test%EC%97%B0%EC%8A%B5/images/ui-card-img1.svg" alt="ui_카드_이미지1" />
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

function UiCard2() {
    return (
        <div className="ui-card">
            <div className="ui-img">
                <img src="https://raw.githubusercontent.com/12alsrud12/web0826/445e06bfbd1f464ce7a60ee3210644af5fd6f4ce/17_test%EC%97%B0%EC%8A%B5/images/ui-card-img2.svg" alt="ui_카드_이미지2" />
            </div>
            <div className="ui-bx">
                <h4>가평 체리쉬애견팬션</h4>
                <p>0<span>(0)</span></p>
                <h6>경기 가평군 · ~20kg · 소형견 · 중형견 · 애견수영장</h6>
                <h5>39,000원</h5>
            </div>
        </div>
    );
}

function UiCard3() {
    return (
        <div className="ui-card">
            <div className="ui-img">
                <img src="https://raw.githubusercontent.com/12alsrud12/web0826/445e06bfbd1f464ce7a60ee3210644af5fd6f4ce/17_test%EC%97%B0%EC%8A%B5/images/ui-card-img3.svg" alt="ui_카드_이미지3" />
            </div>
            <div className="ui-bx">
                <h4>도그팰리스 프리미엄 독채 글램핑</h4>
                <p>5<span>(13)</span></p>
                <h6>충남 당진시 · 모든견종 ·맹견가능 · 드라이룸</h6>
                <h5>205,000원</h5>
            </div>
        </div>
    );
}

function UiCard4() {
    return (
        <div className="ui-card">
            <div className="ui-img">
                <img src="https://raw.githubusercontent.com/12alsrud12/web0826/445e06bfbd1f464ce7a60ee3210644af5fd6f4ce/17_test%EC%97%B0%EC%8A%B5/images/ui-card-img4.svg" alt="ui_카드_이미지4" />
            </div>
            <div className="ui-bx">
                <h4>경주 마법의성 애견펜션</h4>
                <p>4.9<span>(19)</span></p>
                <h6>경북 경주시 · ~10kg · 소형견 · 애견수영장 · 애견놀이터</h6>
                <h5>70,000원</h5>
            </div>
        </div>
    );
}

// 출력
ReactDOM.render(
    <div className="ui-card-list">
        <UiCard1 />
        <UiCard2 />
        <UiCard3 />
        <UiCard4 />
    </div>,
    document.querySelector("#ui")
)