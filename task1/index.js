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


function fillHotList(data) {
    const hotList = document.querySelector('.hot-list');

    // 清空热搜列表
    hotList.innerHTML = '';

    // 填充热搜标题
    data.slice(0, 6).forEach((item, index) => {
        const { title } = item;

        const li = document.createElement('li');

        const a = document.createElement('a');
        a.classList.add(`hot-link-${index}`);
        a.href = `#${index}`;

        const spanNum = document.createElement('span');
        spanNum.classList.add(`hot-num-${index}`);
        spanNum.textContent = index + 1;

        const spanTitle = document.createElement('span');
        spanTitle.classList.add(`hot-title-${index}`);
        spanTitle.textContent = title;

        a.appendChild(spanNum);
        a.appendChild(spanTitle);

        li.appendChild(a);

        hotList.appendChild(li);
    });
}

// 调用API获取数据
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://v2.api-m.com/api/baiduhot", requestOptions)
    .then(response => response.json())
    .then(result => fillHotList(result.data))
    .catch(error => console.log('error', error));