function Snow() {

    // createElement태그로 div태그 만들기
    const el = document.createElement("div");

    // el(div)태그에 snow 클래스 적용
    el.classList.add('snow');

    // marginLeft값이 랜덤으로 적용되면서 서로 다른 위치에서 눈이 내리는 것처럼 표현
    el.style.marginLeft = random() + 'px';

    // body요소에 자식요소로 추가
    document.body.appendChild(el);

}

function random() {

    // 웹 브라우저 넒이 안에서 랜덤한 정수에 숫자가 나오게
    return Math.floor(Math.random() * window.innerWidth)

}

// 반복문을 사용하여 눈이 많이 내리게 구현
for (let i = 0; i < 300; i++) {
    Snow();
}