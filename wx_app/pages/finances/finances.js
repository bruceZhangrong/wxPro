Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:null
  },
  getPost(){
    if (this.phone == null){
      wx.showToast({
        title: '请输入您的手机号码！',
        duration: 2000
      });
      return
    }
    if(this.phone.length>10){
      wx.navigateTo({
        url: '../finances/financesdetail/index',
      })
    }else{
      wx.showToast({
        title: '您输入的号码长度有误！',
        duration:2000
      });
      console.log(this.phone.length);
    }
  },
  bindKeyInput(e){
    this.phone = e.detail.value
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  }
})