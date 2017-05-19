import Util from '../../util/util.js'
let app = getApp();
Page({
    data: {
        giftContents: [
            {
                title: `信用贷款`,
                content: `额度最高30万，年利率5.6%`
            },
            {
                title: `活期理财`,
                content: `闲钱理财，存取自由`
            }
        ]
    },
    onLoad() {
        Util.changeTitle('小程序');
        console.log(app);
    },
    call() {
        wx.makePhoneCall({
            phoneNumber: '13828477648'
        })
    },
    goTo(event) {
        let index = event.currentTarget.dataset.index;
        console.log(index);
        if(index == 0) {
          wx.navigateTo({ url:`../loan/search/search`});
        } else if(index == 1) {
          wx.navigateTo({ url:`../finances/finances`});
        } else {
          wx.navigateTo({ url:`../service/service`});
        }
    }
    
})