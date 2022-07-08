<template>
  <div class="detail">
    <h3>{{data.title}}</h3>
    <img :src="data.img" alt="">
    <div class="text" v-html="data.detail"></div>
  </div>
</template>

<script>
export default {
  name:"Detail",
  computed:{
    //获取路由传递参数
    id(){
      return this.$route.params.id
    },
    // 获取数据
    data(){
      return this.$store.state.news[this.id-1]
    }
  }
}
</script>

<style>
.detail{
  width: 1200px;
  margin-top: 20px;
  margin: 0 auto;
  text-align: center;
}
.detail>h3{
  font-size: 30px;
  padding: 15px;
  border-bottom: 1px solid #ddd;
}
.detail>img{
  width: 800px;
  height: 500px;
  padding: 50px;
}
.text{
  font-size: 20px;
  text-align: left;
}
.text>p{
  padding: 15px;
}
</style>