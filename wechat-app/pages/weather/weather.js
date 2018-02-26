// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weather:'天气信息',
    city:null,
    locationCity:'',
    tmp:'',
    wind_dir:'',
    wind_spd:''
  },
  getWeather:function(){
    let city = this.data.city;

    //根据用户输入的城市名，请求API获取城市天气信息
    const KEY = '99b1a2d10e9b42b3b137a6df06a17c20';
    let url = `https://free-api.heweather.com/s6/weather/now?location=${city}&key=${KEY}`;
    wx.request({
      url: url,
      success:(res)=>{
        let weather = res.data.HeWeather6[0].now.cond_txt;
        let locationCity = res.data.HeWeather6[0].basic.parent_city;
        let tmp = res.data.HeWeather6[0].now.tmp;
        let wind_dir = res.data.HeWeather6[0].now.wind_dir;
        let wind_spd = res.data.HeWeather6[0].now.wind_spd;
        this.setData({
          weather: weather,
          locationCity: locationCity,
          tmp:tmp+'°',
          wind_dir: wind_dir,
          wind_spd: wind_spd+'级'
        })  
      }
    });    
  },
  getCity:function(event){
    let city = event.detail.value;
    this.setData({
      city: city
    }) 
  },
//key:99b1a2d10e9b42b3b137a6df06a17c20 
//url:https://free-api.heweather.com/s6/weather/now?location=广州&key=99b1a2d10e9b42b3b137a6df06a17c20

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