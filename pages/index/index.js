//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    styles: 'left: 0;top: 0;right: 0;',
    slotStyle: 'position: absolute;left: 52rpx;top: 24rpx',
    access: true
  },
  //事件处理函数
  goDetail: function(e) {
    let title = e.currentTarget.dataset.key
    wx.navigateTo({
      url: '../detail/index?title=' + title
    })
  },
  goSearch: function (e) {
    wx.navigateTo({
      url: '../search/search'
    })
  },

  bindGetUserInfo: function (e) {
    this.setData({ access : false})
    app.globalData.userName = e.detail.userInfo.nickName
    console.log(e.detail.userInfo)
  },

  onLoad: function(options) {

    if (app.globalData.text) {
      this.setData({
        text: app.globalData.text,
        hasUserInfo: true
      })
    }
  }
})
