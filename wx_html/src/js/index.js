
window.onload = () => {
    let list = ``;
    let giftContents = [
            {
                title: `信用贷款`,
                content: `额度最高30万，年利率5.6%`
            },
            {
                title: `活期理财`,
                content: `闲钱理财，存取自由`
            },
            {
                title: `便民服务`,
                content: `生活便民，缴费一账通`
            }
        ];
    giftContents.map((v,k)=>{
        list += `
            <div class="content-list-cell" data-index="${k}" onclick="goTo(${k})">
                <div class="left-cell">
                    <div class="cell-title mark-color">${v.title}</div>
                    <span class="cell-content">${v.content}</span>
                </div>
                <div class="right-cell">
                    <span>查看更多</span>
                    <img src="./src/images/icon-arrow-right.png" />
                </div>
            </div>
        `
    });
    document.querySelector('#contenlist').innerHTML = list;
};
function goTo(index) {
    if(index == 0) {
        window.location.href =  `./web/loan/loan.html` ;
    } else if(index == 1) {
        window.location.href =  `./web/finances/finances.html` ;
    } else {
        window.location.href =  `./web/service/service.html` ;
    }
};