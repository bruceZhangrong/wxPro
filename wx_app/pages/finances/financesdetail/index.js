// index.js
Page({
  data:{
    getfunc:[
      `注册登录建设手机银行`,
      `选择理财`,
      `选择活期星`
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  goBack(){
    wx.navigateTo({ url: `../../index/index` });
  }
})