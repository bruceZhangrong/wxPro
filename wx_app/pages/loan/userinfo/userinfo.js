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
        nameVal: '',
        active: [`active`,``],
        on: ['',''],
        tempInputData: [
            {
                inputTitle: `身份证号码：`,
                inputPlaceholder: `请输入您的身份证号码`,
                inputType: `idcard`,
                blurEvent: `getIdCardValue`
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
        // console.log(idCardVal,nameVal)
        if (!Util.checkIdCard(this.data.idCardVal)) {
            wx.showToast({
                title: '身份证号码格式不正确',
                image: '../../../images/icon-error.png'
            })
            return;
        }
        if (!Util.checkNickName(this.data.nameVal)) {
            wx.showToast({
                title: '姓名格式不正确',
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
        wx.request({
            url: 'http://10.100.99.68:8080/WheatInterface/network/quotaInquiry',
            data: {
                cid: 123,
                name: '张荣'
            },
            method: 'GET',
            header: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            success: function (res) {
                let quote = res.data;
                let params = 'quote=' + quote;   
                wx.navigateTo({
                    url: '../limit/limit?' + params
                })
            },
            error: function (res) {
                console.log('error', res.data)
            }
        });
        
    },
    getIdCardValue: function(e) {
        this.data.idCardVal = e.detail.value;
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
    },
    goPotocol: function() {
        wx.navigateTo({
            url: '../msgPotocol/msgPotocol',
        })
    }
})