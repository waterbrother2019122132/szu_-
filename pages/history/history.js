var util = require('../../utils/util.js')
var app = getApp()
Page({
  options: {
    addGlobalClass: true,

  },
  data: {
    starCount: 0,
    forksCount: 0,
    visitTotal: 0,
    currentIndex: 0,
    feed: [],
    feed_length: 0,
    // 那个选项卡的暂定数据
    firstList: [{
        name: 'w券1',
        money: '5.00'
      },
      {
        name: 'w券2',
        money: '50.00'
      },
    ],
    secondList: [{
        name: 'y券1',
        money: '10.00'
      },
      {
        name: 'y券2',
        money: '20.00'
      },
    ],
    thirdList: [{
        name: 'g券1',
        money: '30.00'
      },
      {
        name: 'g券2',
        money: '40.00'
      },
    ],

  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    this.getData()
  },
  //事件处理函数
  bindItemTap: function () {
    wx.navigateTo({
      url: '../front/front',
    })
  },
  bindQueTap: function () {
    wx.navigateTo({
      url: '../question/question',
    })
  },
  bindToTap: function () {
    wx.switchTab({
      url: '../tiezi/tiezi',
    })
  },

  pagechange: function (e) {
    if ('touch' === e.detail.source) {
      let currentPageIndex = this.data.currentIndex
      currentPageIndex = (currentPageIndex + 1) % 3
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
  }, //使用本地 fake 数据实现刷新效果
  getData: function () {
    var feed = util.getData2()
    console.log('loaddata')
    var feed_data = feed.data
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length,
    })
  },
  refresh: function () {
    wx.showToast({
      title: '刷新中',
      icon: 'loading',
      duration: 800,
    })
    var feed = util.getData2()
    console.log('loaddata')
    var feed_data = feed.data
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length,
    })


  }


})