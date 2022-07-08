<template>
  <div class="container">
    <New v-for="item,index in news" :data="item" :key="index" @click.native="toNew(item.id)"/>
  </div>
</template>

<script>
import New from "./New.vue"
export default {
  name:"News",
  components:{
    New
  },
  //获取数据
  computed:{
    news(){
      return this.$store.state.news
    }
  },methods:{
    // 跳转详情页
    toNew(id){
      this.$router.push({
        name:'detail',
        params:{
          id:id
        }
      })
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 950px;
  margin: 0 auto;
  margin-bottom: 20px;
}
</style>