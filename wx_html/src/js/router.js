let data = [
    {
        title: `./src/images/icon1.png`,
        content: `./src/images/content1.jpg`,
        link:`https://www.baidu.com/`
    },
    {
        title: `./src/images/icon2.png`,
        content: `./src/images/content2.jpg`,
        link:`https://www.tmall.com/`
    }
];
function GotoSearch(){
    window.location.href =  `./search.html`;
};
function goTo(index) {
    window.location.href =  data[index].link ;
};
function goToDetail(index) {
    window.location.href =  `./index.html`;
};
window.onload = ()=>{
    let list = ``;
    data.map((v,k)=>{
        list += `
            <div class="indexContent">
                <div class="ContentTitle">
                    <img src="${v.title}">
                </div>
                <div class="ContentBox" onclick="goToDetail()">
                    <img src="${v.content}">
                </div>
                <div class="ContentBottom" onclick="goTo(${k})" >
                    <div class="BottomLeft">查看更多</div>
                    <div class="BottomRight"><img class="floatRight" src="./src/images/icon-arrow-right.png"></div>
                    <div class="clearfix"></div>
                </div>
            </div>
        `
    });
    document.querySelector('#indexBox').innerHTML = list;
};