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
        ],
        idCardVal: '',
        active: [`active`, `active`, `active`],
        on: ['on', 'on'],
        tempInputData: [
            {
                inputTitle: `手机号码：`,
                inputPlaceholder: `请输入您的手机号码`,
                inputType: `number`,
                blurEvent: `getIdCardValue`
            },
        ]
    },
    onLoad() {
        Util.changeTitle('信用贷款');
    },
    getIdCardValue: function(e) {
            this.data.idCardVal= e.detail.value
    },
    goNext: function() {
        if(this.data.idCardVal == '') {
            wx.showToast({
                title: '请输入您的手机号码',
                image: `../../../images/icon-error.png`
            });
            return;
        }
        wx.redirectTo({
            url: '../../components/success/index',
        })
    }
})