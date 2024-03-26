function searchBaidu() {
    // 获取输入框中的内容
    var keywords = document.getElementById('searchInput').value;
    // 将关键词填入URL中
    var searchUrl = 'https://www.baidu.com/s?wd=' + keywords;
    // 打开链接
    window.open(searchUrl);
}
function handleKeyDown(event) {
    if (event.key === "Enter") {
        // 处理回车事件
        searchBaidu();
    }
}
function rotateBtn() {
    const btn = document.querySelector(".refresh-btn");
    btn.classList.add("rotate");

    // Remove the rotate class after the animation completes
    btn.addEventListener(
        "transitionend",
        () => {
            btn.classList.remove("rotate");
        },
        { once: true }
    );
}

function fillHotSearchData(data) {
    for (let i = 0; i < data.length && i < 6; i++) {
        const hotTitleElement = document.querySelector('.hot-title-' + i);

        if (hotTitleElement) {
            hotTitleElement.textContent = data[i].title;
        }
    }
}

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://v2.api-m.com/api/baiduhot", requestOptions)
    .then(response => response.json())
    .then(result => fillHotSearchData(result.data))
    .catch(error => console.log('error', error));