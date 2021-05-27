import{DBPost} from '../../db/DBPost.js';

Page({
  data:{
  },
  onLoad:function(){
   var dbPost=new DBPost();
   this.setData({
     postList:dbPost.getAllPostData()
   });
  },
  onTapToDetail(event){
   var postId=event.currentTarget.dataset.postId;
   console.log(postId);
   wx.navigateTo({
     url: 'post-detail/post-detail?id='+postId,
   })
  }
}),
{
  "pages":[
    "pages/welcome/welcome",
    "pages/post/post"
  ],
  "window":{
    "navigationBarBackgroundColor": "#ECC0A8",
  }
}





