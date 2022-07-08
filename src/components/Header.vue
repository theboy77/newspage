<template>
  <div>
    <div class="header">
      <div class="box">
        <h1>
          <span>新闻网</span>
        </h1>
      <span @click="toHomePage">首页</span>
      </div>
      <div class="box">
        <input class="text"
               type="text"
               placeholder="请输入关键词~~~"
               name="search">
        <input class="button"
               type="button"
               value="搜索">
        <nav>
          <a>消息</a>
          <a>发布</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  //返回首页
  methods:{
    toHomePage(){
      this.$router.push({
        path:"/"
      })
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: #292c2f;
  color: #ffffff;

  /*吸顶效果*/
  position: sticky;
  top: 0px;                    
}
.box {
  display: flex;
  align-items: center;
}
h1 {
  display: flex;
  align-items: center;
  font: normal 28px Cookie, Arial, Helvetica, sans-serif;
  padding: 0px 20px;
}
img {
  width: 40px;
  height: 40px;
}

nav {
  display: flex;
  align-items: center;
  margin: 0px 40px;
  font: 16px Arial, Helvetica, sans-serif;
}
nav a {
  padding: 0 15px;
  width: 32px;
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: normal;
  opacity: 0.9;
}

nav a:hover {
  opacity: 1;
}

.active {
  color: #608bd2;
  pointer-events: none;
  opacity: 1;
}

/*搜索框*/

.text {
  height: 22px;
  font-size: 14px;
  border: 1px solid #ccc;
  padding: 3px 16px;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
}
.text:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
.button {
  width: 60px;
  height: 30px;
  font-size: 14px;
  margin-right: 35px;
  border: 1px solid #608bd2;
  background-color: #608bd2;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
</style>
