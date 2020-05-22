const app = getApp();
var util = require('../../utils/util.js')
Page({
  
  data: {

    ciyun: 'adw',
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList,
    color: 'red',
    index: null,
    picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
    multiArray: [
      ['无脊柱动物', '脊柱动物'],
      ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'],
      ['猪肉绦虫', '吸血虫']
    ],
    objectMultiArray: [
      [{
        id: 0,
        name: '无脊柱动物'
      },
      {
        id: 1,
        name: '脊柱动物'
      }
      ],
      [{
        id: 0,
        name: '扁性动物'
      },
      {
        id: 1,
        name: '线形动物'
      },
      {
        id: 2,
        name: '环节动物'
      },
      {
        id: 3,
        name: '软体动物'
      },
      {
        id: 3,
        name: '节肢动物'
      }
      ],
      [{
        id: 0,
        name: '猪肉绦虫'
      },
      {
        id: 1,
        name: '吸血虫'
      }
      ]
    ],
    multiIndex: [0, 0, 0],
    time: '12:01',
    date: '2018-12-25',
    region: ['广东省', '广州市', '海珠区'],
    imgList: [],
    modalName: null,
    textareaAValue: '',
    textareaBValue: ''
  },
  
  onShow:function(){
    let that = this;
    that.setData({ciyun: util.getDiscovery()["ciyun"]})
    this.innit();
  }
  ,
  
  innit() {
    var self = this;
    var tagEle = [{
      title: self.data.ciyun.word_dict[0],
      x: 0,
      y: 0,
      z: 0,
      s: 0,
      o: 1,
      f: 15,
      angleX: 0,
      angleY: 0
    },
    {
      title: self.data.ciyun.word_dict[1],
      x: 0,
      y: 0,
      z: 0,
      s: 0,
      o: 1,
      f: 15,
      angleX: 0,
      angleY: 0
    },
    {
      title: self.data.ciyun.word_dict[2],
      x: 0,
      y: 0,
      z: 0,
      s: 0,
      o: 1,
      f: 15,
      angleX: 0,
      angleY: 0
    },
    {
      title: self.data.ciyun.word_dict[3],
      x: 0,
      y: 0,
      z: 0,
      s: 0,
      o: 1,
      f: 15,
      angleX: 0,
      angleY: 0
    },
    {
      title: self.data.ciyun.word_dict[4],
      x: 0,
      y: 0,
      z: 0,
      s: 0,
      o: 1,
      f: 15,
      angleX: 0,
      angleY: 0
    },
    {
      title: self.data.ciyun.word_dict[5],
      x: 0,
      y: 0,
      z: 0,
      s: 0,
      o: 1,
      f: 15,
      angleX: 0,
      angleY: 0
    },
    {
      title: self.data.ciyun.word_dict[6],
      x: 0,
      y: 0,
      z: 0,
      s: 0,
      o: 1,
      f: 15,
      angleX: 0,
      angleY: 0
    },
    {
      title: self.data.ciyun.word_dict[7],
      x: 0,
      y: 0,
      z: 0,
      s: 0,
      o: 1,
      f: 15,
      angleX: 0,
      angleY: 0
    },
    {
      title: self.data.ciyun.word_dict[8],
      x: 0,
      y: 0,
      z: 0,
      s: 0,
      o: 1,
      f: 15,
      angleX: 0,
      angleY: 0
    },
    {
      title: self.data.ciyun.word_dict[9],
      x: 0,
      y: 0,
      z: 0,
      s: 0,
      o: 1,
      f: 15,
      angleX: 0,
      angleY: 0
    },
    {
      title: self.data.ciyun.word_dict[10],
      x: 0,
      y: 0,
      z: 0,
      s: 0,
      o: 1,
      f: 15,
      angleX: 0,
      angleY: 0
    },
    {
      title: self.data.ciyun.word_dict[11],
      x: 0,
      y: 0,
      z: 0,
      s: 0,
      o: 1,
      f: 15,
      angleX: 0,
      angleY: 0
    },
    {
      title: self.data.ciyun.word_dict[12],
      x: 0,
      y: 0,
      z: 0,
      s: 0,
      o: 1,
      f: 15,
      angleX: 0,
      angleY: 0
    },
    {
      title: self.data.ciyun.word_dict[13],
      x: 0,
      y: 0,
      z: 0,
      s: 0,
      o: 1,
      f: 15,
      angleX: 0,
      angleY: 0
    },
    {
      title: self.data.ciyun.word_dict[14],
      x: 0,
      y: 0,
      z: 0,
      s: 0,
      o: 1,
      f: 15,
      angleX: 0,
      angleY: 0
    },
    {
      title: self.data.ciyun.word_dict[15],
      x: 0,
      y: 0,
      z: 0,
      s: 0,
      o: 1,
      f: 15,
      angleX: 0,
      angleY: 0
    },
    {
      title: self.data.ciyun.word_dict[16],
      x: 0,
      y: 0,
      z: 0,
      s: 0,
      o: 1,
      f: 15,
      angleX: 0,
      angleY: 0
    },
    {
      title: self.data.ciyun.word_dict[17],
      x: 0,
      y: 0,
      z: 0,
      s: 0,
      o: 1,
      f: 15,
      angleX: 0,
      angleY: 0
    },
    {
      title: self.data.ciyun.word_dict[18],
      x: 0,
      y: 0,
      z: 0,
      s: 0,
      o: 1,
      f: 15,
      angleX: 0,
      angleY: 0
    }
    ]
    for (var i = 0; i < tagEle.length; i++) {
      var fallLength = 100 //圆的焦点
      var angleX = Math.PI / 100
      var angleY = Math.PI / 100
      var k = (2 * (i + 1) - 1) / tagEle.length - 1;
      //计算按圆形旋转
      var a = Math.acos(k);
      var b = a * Math.sqrt(tagEle.length * Math.PI);
      //计算元素x，y坐标
      var numx = 120 * Math.sin(a) * Math.cos(b)
      var numy = 120 * Math.sin(a) * Math.sin(b);
      var numz = 220 * Math.cos(a);

      // console.log(numo)
      //计算元素缩放大小
      tagEle[i].x = numx * 2
      tagEle[i].y = numy * 2
      tagEle[i].z = numz
      tagEle[i].s = 250 / (400 - tagEle[i].z)
    }
    //动画
    setInterval(() => {
      for (var i = 0; i < tagEle.length; i++) {
        var a = Math.acos(k);
        var numz = 240 * Math.cos(a);
        tagEle[i].s = 250 / (400 - tagEle[i].z)
        var cos = Math.cos(angleX);
        var sin = Math.sin(angleX);
        var y1 = tagEle[i].y * cos - tagEle[i].z * sin;
        var z1 = tagEle[i].z * cos + tagEle[i].y * sin;
        tagEle[i].y = y1;
        tagEle[i].z = z1;

        var cos = Math.cos(angleY);
        var sin = Math.sin(angleY);
        var x1 = tagEle[i].x * cos - tagEle[i].z * sin;
        var z1 = tagEle[i].z * cos + tagEle[i].x * sin;
        tagEle[i].x = x1;
        tagEle[i].z = z1;
        this.setData({
          tagEle: tagEle
        })
      }
    }, 100)
  }
  ,
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log(e.detail.value.name)
    wx.request({
      url: 'http://www.baidu.com/s',
      method: 'POST',
      data: { 'wd': e.detail.value.name },
      success: function (res) {
        var list = res.data.list;
        console.log(1)
      }
    })
    console.log('awdwadwadwadaw')
  }
  ,
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },
  MultiChange(e) {
    this.setData({
      multiIndex: e.detail.value
    })
  },
  MultiColumnChange(e) {
    let data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
            data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
            break;
          case 1:
            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
            data.multiArray[2] = ['鲫鱼', '带鱼'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                break;
              case 1:
                data.multiArray[2] = ['蛔虫'];
                break;
              case 2:
                data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                break;
              case 3:
                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                break;
              case 4:
                data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['鲫鱼', '带鱼'];
                break;
              case 1:
                data.multiArray[2] = ['青蛙', '娃娃鱼'];
                break;
              case 2:
                data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        break;
    }
    this.setData(data);
  },
  TimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  RegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '召唤师',
      content: '确定要删除这段回忆吗？',
      cancelText: '再看看',
      confirmText: '再见',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  textareaAInput(e) {
    this.setData({
      textareaAValue: e.detail.value
    })
  },
  textareaBInput(e) {
    this.setData({
      textareaBValue: e.detail.value
    })
  },
  onLoad:function(option) {
    let that = this;
    setTimeout(function () {
      that.setData({
        loading: true
      })
    }, 500)
    var d = JSON.parse(decodeURIComponent(option.d));
    that.setData({ per: d.per });
    that.setData({ ciyun: d.word_dict });
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
  SetColor(e) {
    this.setData({
      color: e.currentTarget.dataset.color,
      modalName: null
    })
  },
  SetActive(e) {
    this.setData({
      active: e.detail.value
    })
  }

})


