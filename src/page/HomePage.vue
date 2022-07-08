<template>
  <div>
    <Swipper/>
    <News/>
  </div>
</template>

<script>
import Swipper from "../components/Swipper.vue"
import News from "../components/News.vue"
export default {
  name:"HomePage",
  components:{
    Swipper,News
  }
}
</script>

<style>

</style>