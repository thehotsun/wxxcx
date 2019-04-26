// compoents/input.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder: String,
    styles: String,
    isSearch: Boolean,
    isSearchPage: Boolean,
    slotStyle: String
  },
  attached () {
    this.setData({
      focus: !!this.properties.isSearchPage
    })
  },
  /**
   * 组件的初始数据
   */
  data: {
    focus: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange (e) {
      this.triggerEvent('search', e.detail.value)
    },
    go () {
      console.log(this.properties.styles, this.data)
      if (this.properties.isSearch) {
        wx.navigateTo({
          url: '../search/search'
        })
      }
    }
  }
})
