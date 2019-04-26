//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    styles: 'left: 0;bottom: 0;right: 0;',
    isCenter: false,
    isSend: false,
    commentValue: '',
    commentLists: [
      {
        userName: 'viva la vida',
        date: '2019-04-23',
        comments: 'the shy教会我们不要怂，就要莽'
      },
      {
        userName: 'viva la vida',
        date: '2019-04-23',
        comments: 'the shy教会我们不要怂，就要莽'
      }
    ]
  },
  onChange (e) {
    this.setData({
      isSend: !!e.detail.value.length,
      commentValue: e.detail.value
    })
  },
  getNowDate () {
    let sj = new Date()
    let year = sj.getFullYear()
    let month =
      sj.getMonth() + 1 < 10 ? '0' + (sj.getMonth() + 1) : sj.getMonth() + 1
    let today = sj.getDate() < 10 ? '0' + sj.getDate() : sj.getDate()
    return `${year}-${month}-${today}`
  },
  onSend () {
    if (!this.data.isSend) return
    let params = [{
      userName: app.globalData.userName,
      date: this.getNowDate(),
      comments: this.data.commentValue
    }]
    let commentLists = params.concat(this.data.commentLists)
    this.setData({
      commentLists,
      commentValue: ''
    })
  },
  //事件处理函数
  goback: () => {
    wx.redirectTo('../index/index')
    // wx.navigateTo()
  },
  format: function (e, v) {
    let info = e
    if (/文明/gi.test(v)) {
      info.detail = info.detail.replace(/［/g, '\n［')
    } else if (/哲学/gi.test(v)) {
      info.detail = info.detail.replace(/。 /g, '。\n')
    } else if (/诗歌/gi.test(v)) {
      info.detail = info.detail.replace(/。/g, '。\n')
      this.setData({
        isCenter: true
      })
    } else {
    }
    return info
  },
  getUserInfo () {
    wx.getUserInfo({
      success(res) {
        const userInfo = res.userInfo
        const nickName = userInfo.nickName
        const avatarUrl = userInfo.avatarUrl
        const gender = userInfo.gender // 性别 0：未知、1：男、2：女
        const province = userInfo.province
        const city = userInfo.city
        const country = userInfo.country
      }
    })
  },
  onLoad: function(options) {
    this.getUserInfo()
    console.log(options, this.getNowDate())
    let arr = options.title.split(' ')
    // console.log(app.globalData.文学诗歌, [arr[1]])
    let detail = this.format(app.globalData.text[arr[0]][arr[1]], [arr[0]])
    this.setData({
      detail
    })
  }
})
