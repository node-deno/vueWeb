<template>
  <div class="main">
    <main>
      <nav :class="cssFlag">我是顶部栏</nav>
      <header ref="header">我是主要内容</header>
    </main>
    <footer>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "main1",
  data() {
    return {
      cssFlag:''
    }
  },
  computed: {},
  methods: {
    changeCss() {
      console.log(document.documentElement.scrollTop)
      //  我们可以在鼠标滚动的时候获取到距页面顶端的距离，这样我们根据此为依据进行样式的改变
      // console.log(this.$refs.header.offsetHeight)
      //当nav离开与顶部有距离时

    }
  },
  created() {

    //在这里为window添加鼠标滚动事件不能使用this.changeCss()因为这样相当于直接调用了函数，我们需要将函数赋值给window的鼠标滚动事件，
    // 就像使用window.addEventListener的原理是一样的
    window.onscroll = this.changeCss
    // window.addEventListener('scroll',this.changeCss)
  }
}
</script>

<style scoped lang="scss">
.main {
  main {
    width: 100vw;
    height: 580px;
    position: relative;

    nav {
      height: 100px;
      width: 100vw;
      background-color: red;
      line-height: 100px;
      text-align: center;
      font-size: 48px;
      position: fixed;
      top: 0;
      z-index: 1;
    }

    header {
      height: 480px;
      width: 100vw;
      line-height: 480px;
      font-size: 68px;
      text-align: center;
      background-color: greenyellow;
      position: absolute;
      top: 100px;
    }
  }
}
</style>