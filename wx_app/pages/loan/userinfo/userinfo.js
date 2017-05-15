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
        phoneVal: '',
        nameVal: '',
        active: [`active`,``,``],
        on: ['',''],
        tempInputData: [
            {
                inputTitle: `身份证号码：`,
                inputPlaceholder: `请输入您的身份证号码`,
                inputType: `idcard`,
                blurEvent: `getPhoneValue`
            },
            {
                inputTitle: `姓    名：`,
                inputPlaceholder: `请输入您的姓名`,
                inputType: `text`,
                blurEvent: `getNameValue`
            }
        ],
        isChecked: true
    },
    onLoad: function(options) {
        Util.changeTitle('信用贷款');
    },
    goNext: function() {
        // console.log(phoneVal,nameVal)
        if(this.data.phoneVal == '') {
            wx.showToast({
                title: '请输入正确的手机号码',
                image: '../../../images/icon-error.png'
            })
            return;
        }
        if (this.data.nameVal == '') {
            wx.showToast({
                title: '请输入您的名字',
                image: '../../../images/icon-error.png'
            })
            return;
        }
        if(this.data.isChecked == false) {
            wx.showToast({
                title: '请阅读并同意协议',
                image: '../../../images/icon-error.png'
            });
            return;
        }
        wx.navigateTo({
            url: '../limit/limit',
        })
    },
    getPhoneValue: function(e) {
        this.data.phoneVal = e.detail.value;
    },
    getNameValue: function(e) {
        this.data.nameVal = e.detail.value;
    },
    checkboxChange: function(e) {
        if(e.detail.value[0] == 'agree') {
            this.data.isChecked = true;
        } else {
            this.data.isChecked = false;
        }
    }
})