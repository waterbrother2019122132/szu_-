const app = getApp();

var util = require('../../utils/util.js')
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    feed: [],
    feed_length: 0,
    gridCol: 3,
    skin: false
  },
  // lifetimes: {
  //   attached: function () {
  //     // 在组件实例进入页面节点树时执行
  //     console.log('onLoading')
  //     var that = this
  //     //调用应用实例的方法获取全局数据
  //     this.getData()
  //   },
  //   detached: function () {
  //     // 在组件实例被从页面节点树移除时执行
  //   },
  // },
  //使用本地 fake 数据实现刷新效果
  getData: function () {
    var feed = util.getData2()
    console.log('loaddata')
    var feed_data = feed.data
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length,
    })
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  gridchange: function (e) {
    this.setData({
      gridCol: e.detail.value
    });
  },
  gridswitch: function (e) {
    this.setData({
      gridBorder: e.detail.value
    });
  },
  menuBorder: function (e) {
    this.setData({
      menuBorder: e.detail.value
    });
  },
  menuArrow: function (e) {
    this.setData({
      menuArrow: e.detail.value
    });
  },
  menuCard: function (e) {
    this.setData({
      menuCard: e.detail.value
    });
  },
  switchSex: function (e) {
    this.setData({
      skin: e.detail.value
    });
  },

  // ListTouch触摸开始
  ListTouchStart(e) {
    this.setData({
      ListTouchStart: e.touches[0].pageX
    })
  },

  // ListTouch计算方向
  ListTouchMove(e) {
    this.setData({
      ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
    })
  },

  // ListTouch计算滚动
  ListTouchEnd(e) {
    if (this.data.ListTouchDirection == 'left') {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    } else {
      this.setData({
        modalName: null
      })
    }
    this.setData({
      ListTouchDirection: null
    })
  },


})