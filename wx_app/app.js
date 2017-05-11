App({
  
    onLaunch() {
        //调用API从本地缓存中获取数据
       
    },
    getUserInfo(cb){
        let that = this;
        if(this.globalData.userInfo){
            typeof cb == "function" && cb(this.globalData.userInfo)
        }else{
        //调用登录接口
        wx.login({
            success() {
            wx.getUserInfo({
                success(res) {
                that.globalData.userInfo = res.userInfo;
                typeof cb == "function" && cb(that.globalData.userInfo)
                }
            })
            }
        });
        }
    },
    globalData:{
        userInfo:null
    }
})