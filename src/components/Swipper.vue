<template>
  <div class="banner">
    <h3>公开课</h3>
    <div class="item">
      <img :src="dataList[currentIndex].img">
    </div>
    <div class="page"
         v-if="this.dataList.length > 1">
      <span>{{dataList[currentIndex].text}}</span>
      <ul>
        <li @click="gotoPage(prevIndex)">&lt;</li>
        <li v-for="(item,index) in dataList"
            @click="gotoPage(index)"
            :class="{'current':currentIndex == index}"
            :key="index"> {{index+1}}</li>
        <li @click="gotoPage(nextIndex)">&gt;</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swipper",
  data () {
    return {
      // 所需数据
      dataList: [{
        img: require("../assets/page1.png"),
        text: "不平等和焦虑之间的联系"
      },{
        img: require("../assets/page2.png"),
        text: "眼科主治医生：警惕眼睛疲劳的信号"
      },{
        img: require("../assets/page3.png"),
        text: "神舟十四号飞天画面：震撼人心"
      },{
        img: require("../assets/page4.png"),
        text: "12个自然现象，只有1%的人见到过"
      },
      ],
      currentIndex: 0,   //默认显示图片
      timer: null    //定时器
      , time: 5000  //图片切换时间ms
    }
  },
  methods: {
    gotoPage (index) {
      this.currentIndex = index;
    },
    //定时器
    runInv () {
      this.timer = setInterval(() => {
        this.gotoPage(this.nextIndex)
      }, this.time)
    }
  },
  computed: {
    prevIndex () {
      if (this.currentIndex == 0) {
        return this.dataList.length - 1
      } else {
        return this.currentIndex - 1
      }
    },
    nextIndex () {
      if (this.currentIndex == this.dataList.length - 1) {
        return 0
      } else {
        return this.currentIndex + 1
      }
    }
  },
  mounted () {
    this.runInv()
  }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
  float: left;
  width: 30px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}
.banner {
  max-width: 950px;
  max-height: 550px;
  margin: 0 auto;
  position: relative;
  margin-top: 30px;
  margin-bottom: 30px;
}
.banner img {
  width: 100%;
  display: block;
}
.banner .page {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
}
.banner .page ul {
  float: right;
}
.current {
  color: #f34540;
}
.page > span {
  color: white;
  font-size: 18px;
  vertical-align: bottom;
  display: block;
  float: left;
  padding-top: 10px;
  padding-left: 20px;
}
.banner>h3{
  font-size: 25px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}
.item{
  margin-top: 10px;
}
</style>