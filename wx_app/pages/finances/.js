Page({
    data: {
        phone:null
    },
    getPost(){
      if (this.phone.length>=11){
        wx.navigateTo({ url: `../finances/financesdetail/index` });
      }else{
        wx.showToast({
          title: '您输入的号码长度有误！',
          duration: 2000
        })
      }
    },
    bindKeyInput(e){
      this.phone = e.detail.value;
    }
})