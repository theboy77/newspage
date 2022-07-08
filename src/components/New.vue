<template>
  <div class="new">
    <h3>{{data.title}}</h3>
    <div class="bottom">
      <img :src="data.img">
      <div class="right">
        <p v-if="data.type">类型：{{data.type}}</p>
        <p>时间：{{data.time}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"New",
  props:["data"]
}
</script>

<style scoped>
.new{
  width: 400px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px;
}
.new:hover{
  background-color: #ddd;
}
img{
  width: 200px;
  padding: 5px;
  border-radius: 5px;
  margin-top:5px;
}
.new>h3{
  font-size: 17px;
  padding: 5px;
  border-bottom: 1px solid #cc3232;
}
.bottom{
  display: flex;
}
.right>p{
  font-size: 14px;
  color: #BBBBBB;
  padding: 10px;
}
.right{
  margin-top: 20px;
}
</style>