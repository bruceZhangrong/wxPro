import Util from '../../../util/util.js'
Page({
    data: {
        bannerBottomAd: [
            {
                content: `年利率`,
                variable: `5.6%`
            },
            {
                content: `用时起息`
            },
            {
                content: `期限`,
                variable: `12个月`
            },
            {
                content: `随借随还`
            },
        ]
    },
    onLoad() {
        Util.changeTitle('信用贷款');
    },
    searchLoanBalance: function(e) {
        wx.navigateTo({
            url: '../userinfo/userinfo'
        })
    }
})