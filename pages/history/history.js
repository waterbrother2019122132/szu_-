Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    starCount: 0,
    forksCount: 0,
    visitTotal: 0,
    currentIndex: 0,
    // 那个选项卡的暂定数据
    firstList: [
      { name: 'w券1', money: '5.00' },
      { name: 'w券2', money: '50.00' },
    ],
    secondList: [
      { name: 'y券1', money: '10.00' },
      { name: 'y券2', money: '20.00' },
    ],
    thirdList: [
      { name: 'g券1', money: '30.00' },
      { name: 'g券2', money: '40.00' },
    ],
  },
  methods: {
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
    },
  },
})
