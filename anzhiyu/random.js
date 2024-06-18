var posts=["2024/06/14/黄子秦/","2024/06/17/hello-world/","2024/06/18/黑奴市场/","2024/06/18/修改头像/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };