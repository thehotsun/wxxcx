// pages/search.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slotStyle: 'position: absolute;left: 52rpx;top: 24rpx',
    styles: 'left: 0;top: 0;right: 0;',
    result: [
    ]
  },
  onSearch(val) {
    let value = val.detail
    if (!value)  {
      this.setData({
        result: []
      })
      return
    }
    let data = app.globalData.text
    let key = Object.keys(data)
    let arrData = []
    arrData = key.reduce((prev, next) => {
      let arr = data[next].filter((item, index) => {
        let reg = new RegExp(value, 'gi')
        item.key = `${ next } ${ index }`
        return reg.test(item.title)
      })
      return prev.concat(arr)
    }, arrData)
    this.setData({
      result: arrData
    })
    console.log(val, value)
  },
  goDetail: function (e) {
    let title = e.currentTarget.dataset.key
    wx.navigateTo({
      url: '../detail/index?title=' + title
    })
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

  }
})