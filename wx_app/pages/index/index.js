
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
            },
            {
                title: `便民服务`,
                content: `生活便民，缴费一账通`
            }
        ]
    },
    onLoad: function() {
        console.log('onload');
    },
    call: function() {
        wx.makePhoneCall({
            phoneNumber: '13828477648'
        })
    },
    goTo: function(event) {
        let index = event.currentTarget.dataset.index;
        console.log(index);
        if(index == 0) {
            wx.navigateTo({url:`../loan/index`});
        } else if(index == 1) {
            wx.navigateTo({url:`../finances/index`});
        } else {
            wx.navigateTo({url:`../service/index`});
        }
    }
    
})