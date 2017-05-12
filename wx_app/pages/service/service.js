import Util from '../../util/util.js'
Page({
    data: {
        localLocation: '',
        systemInfo: ''
    },
    onLoad: function() {
        let that = this;
        wx.getLocation({
            type: 'gcj02',
            success: function(res) {
                console.log('callBack data:',res)
                // that.data.localLocation = res;
                Util.changeTitle(`便民服务`)
                wx.openLocation({
                    latitude: res.latitude,
                    longitude: res.longitude,
                    scale: 18
                })
            },
            fail: function(res) {
                console.log('callBack fail:', res)
            }
        });
        wx.getSystemInfo({
            success: function(res) {
                console.log(res);
                that.setData({
                    systemInfo: res
                })
            },
            fail: function(res) {
                console.log(res)
            }
        })
    }
})