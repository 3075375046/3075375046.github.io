var posts=["2024/06/14/hello-world/","2024/06/14/黄子秦/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };