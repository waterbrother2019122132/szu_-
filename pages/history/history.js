Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    starCount: 0,
    forksCount: 0,
    visitTotal: 0,
    tabs: [
      { id: 0, title: '全部', isActive: true },
      { id: 1, title: '待付款', isActive: false },
      { id: 2, title: '代发货', isActive: false },
      { id: 2, title: '退款/退货', isActive: false }
    ]
   
    // currentIndex: 0,
    // "firstList": ["LXT", "LXT", "LXT", "LXT", "LXT", "LXT"],
    // "secondList": ["GFF", "GFF", "GFF", "GFF", "GFF", "GFF", "GFF", "GFF"]
  },
  
  attached() {
    console.log('success')
    let that = this
    wx.showLoading({
      title: '数据加载中',
      mask: true,
    })
    let i = 0
    numDH()
    function numDH() {
      if (i < 20) {
        setTimeout(function () {
          that.setData({
            starCount: i,
            forksCount: i,
            visitTotal: i,
          })
          i++
          numDH()
        }, 20)
      } else {
        that.setData({
          starCount: that.coutNum(3000),
          forksCount: that.coutNum(484),
          visitTotal: that.coutNum(24000),
        })
      }
    }
    wx.hideLoading()
  },
  methods: {
    handleTabsChange(e) {
      // console.log(e)
      // 获取当前点击元素的索引
      const { index } = e.detail;
      // 获取tabs
      const { tabs } = this.data
      tabs.forEach((e, i) => i === index ? e.isActive = true : e.isActive = false);
      // 把tabs的值重新赋值
      this.setData({
        tabs
      })
    },
    tabClick(val) {
      this.activeIndex = val
      this.$apply()
    },
    coutNum(e) {
      if (e > 1000 && e < 10000) {
        e = (e / 1000).toFixed(1) + 'k'
      }
      if (e > 10000) {
        e = (e / 10000).toFixed(1) + 'W'
      }
      return e
    },
    CopyLink(e) {
      wx.setClipboardData({
        data: e.currentTarget.dataset.link,
        success: (res) => {
          wx.showToast({
            title: '已复制',
            duration: 1000,
          })
        },
      })
    },
    showModal(e) {
      this.setData({
        modalName: e.currentTarget.dataset.target,
      })
    },
    hideModal(e) {
      this.setData({
        modalName: null,
      })
    },
    showQrcode() {
      wx.previewImage({
        urls: ['https://image.weilanwl.com/color2.0/zanCode.jpg'],
        current: 'https://image.weilanwl.com/color2.0/zanCode.jpg', // 当前显示图片的http链接
      })
    },

    pagechange: function (e) {
      if ('touch' === e.detail.source) {
        let currentPageIndex = this.data.currentIndex
        currentPageIndex = (currentPageIndex + 1) % 2
        this.setData({
          currentIndex: currentPageIndex,
        })
      }
    },
    //用户点击tab时调用
    titleClick: function (e) {
      let currentPageIndex = this.setData({
        //拿到当前索引并动态改变
        currentIndex: e.currentTarget.dataset.idx,
      })
    },
  },
  // 点击tab栏切换样式

})
