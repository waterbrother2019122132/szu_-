// pages/tiezi.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
 
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log(e.detail.value.name)
    var d= new Date();
    var date = (d.getFullYear()) + "-" +
      (d.getMonth() + 1) + "-" +
      (d.getDate());
    wx.request({
      url: 'http://127.0.0.1:5000/release',
      method: 'POST',
      data: { 
        title: e.detail.value.title,
        article: e.detail.value.content,
        author: getApp().globalData.userInfo.nickName,
        stkcd: e.detail.value.stackid,
        time: date
        }, //字段名写清楚 
      success: function (res) {

        var list = res.data;
        console.log(list)
        console.log(111)
      }
      
    })
    var AllData = util.getData2()
    AllData.data.unshift({
      "question_id": 1,
      "answer_id": 3,
      "feed_source_id": 23,
      "feed_source_name": "Rebecca",
      "feed_source_txt": "赞了回答1",
      "feed_source_img": "../../image/icon1.jpeg",
      "question": e.detail.value.name,
      "answer_ctnt": e.detail.value.author,
      "good_num": "112",
      "comment_num": "18"
    })
    console.log('awdwadwadwadaw')
  },
  formReset: function () {
    console.log('form发生了reset事件')
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
  //字数改变触发事件
  bindTextAreaChange: function (e) {
    var that = this
    var value = e.detail.value,
      len = parseInt(value.length);
    if (len > that.data.noteMaxLen)
      return;
    that.setData({
      content: value, noteNowLen: len
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
