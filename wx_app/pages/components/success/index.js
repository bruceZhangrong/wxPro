// index.js
import Util from '../../../util/util.js'
Page({
  data:{
    scanData: [
        {
            getfunc: [
                `注册登录建设手机银行`,
                `选择理财`,
                `选择活期星`
            ],
            backFunc: 'goBack'
        }
    ]
  },
  goBack(){
    wx.reLaunch({
        url: `../../index/index`,
    });
  },
  onLoad() {
      Util.changeTitle('领取额度');
  }
})