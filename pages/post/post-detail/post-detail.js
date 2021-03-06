// pages/post/post-detail/post-detail.js
var DBPost=require('../../../db/DBPost.js').DBPost;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
 onLoad:function(options){
   var postId=options.id;
   this.dbPost=new DBPost(postId);
   this.postData=this.dbPost.getPostItemById().data;
   this.setData({
     post:this.postData
   })
   this.addReadingTimes();
 },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.postData.title
    })
  },

  onCollectionTap:function(event){
    //dbPost对象已在onLoad函数里被保存到了this变量中，无须再次实例化
    var newData=this.dbPost.collect();
    this.setData({
      'post.collectionStatus':newData.collectionStatus,
      'post.collectionNum':newData.collectionNum
    })
    wx.showToast({
      title: newData.collectionStatus?"收藏成功":"取消成功",
      duration:1000,
      icon:"success",
      mask:true
    })
  },
  onUpTap:function(event){
    var newData=this.dbPost.up();
    this.setData({
      'post.upStatus':newData.upStatus,
      'post.upNum':newData.upNum
    })
  },
  onCommentTap:function(event){
    var id=event.currentTarget.dataset.postId;
    wx.navigateTo({
      url:'../post-comment/post-comment?id='+id
    })
  },
  //阅读量+1
  addReadingTimes: function () {
    this.dbPost.addReadingTimes();
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

  },

      //4.20新编
 
})
