<template>
  <div class="home-container">
    <div class="top">
      <div class="top-main">
        <div class="top-main-left">
          <span style="cursor: pointer">
            关于翼支付
          </span>
          |
          <span style="cursor: pointer">
            翼支付APP
          </span>
        </div>
        <div class="top-main-right">
          注册
        </div>
      </div>
    </div>

    <div class="nav" :class="locationStatus" ref="nav">
      <div class="nav-main">
        <div class="nav-main-left" v-if="location">
          <img class="nav-main-left-logo" src="../assets/logo1-9ced2bb24a.png">
          <img class="nav-main-left-ipv6" src="../assets/ipv6_1-71a033e14c.png">
        </div>
        <div class="nav-main-left" v-else>
          <img class="nav-main-left-logo" src="../assets/logo-78d1d51487.png">
          <img class="nav-main-left-ipv6" src="../assets/ipv6-1ac878f82c.png">
        </div>
        <div class="nav-main-right">
          <ul>
            <li>翼支付卡</li>
            <li>商户服务</li>
            <li>登录</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="main" ref="main">
      <img class="main-img" src="../assets/portalBanner.png">
    </div>

    <div class="section1">
      <div class="section1-main">
        <div class="section1-main-left">
          <img src="../assets/item1-c9902511e5.png">
        </div>
        <div class="section1-main-right">
          <h2>生活缴费</h2>
          <div class="middle-line"></div>
          <p>无需排队，7*24小时随时随地缴费，高效稳定，极速到账，让人人享有便捷生活</p>
          <div class="jf">
            <img src="../assets/5-fdbe38852d.png">
            <div class="word">
              <h3>缴费</h3>
              <span>便捷缴费 安全省心</span>
            </div>
          </div>
          <div class="zd">
            <img src="../assets/10-42998855fd.png">
            <div class="word">
              <h3>账单</h3>
              <span>实时记录 随时查询</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section1" style="background-color: #f8f6f6">
      <div class="section1-main">
        <div class="section1-main-left">
          <img src="../assets/item1-c9902511e5.png">
        </div>
        <div class="section1-main-right">
          <h2>生活缴费</h2>
          <div class="middle-line"></div>
          <p>无需排队，7*24小时随时随地缴费，高效稳定，极速到账，让人人享有便捷生活</p>
          <div class="jf">
            <img src="../assets/5-fdbe38852d.png">
            <div class="word">
              <h3>缴费</h3>
              <span>便捷缴费 安全省心</span>
            </div>
          </div>
          <div class="zd">
            <img src="../assets/10-42998855fd.png">
            <div class="word">
              <h3>账单</h3>
              <span>实时记录 随时查询</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section1">
      <div class="section1-main">
        <div class="section1-main-left">
          <img src="../assets/item1-c9902511e5.png">
        </div>
        <div class="section1-main-right">
          <h2>生活缴费</h2>
          <div class="middle-line"></div>
          <p>无需排队，7*24小时随时随地缴费，高效稳定，极速到账，让人人享有便捷生活</p>
          <div class="jf">
            <img src="../assets/5-fdbe38852d.png">
            <div class="word">
              <h3>缴费</h3>
              <span>便捷缴费 安全省心</span>
            </div>
          </div>
          <div class="zd">
            <img src="../assets/10-42998855fd.png">
            <div class="word">
              <h3>账单</h3>
              <span>实时记录 随时查询</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hzsh" style="background-color: #f8f6f6">
      <div class="hzsh-main">
        <div class="hzsh-top">
          合作商户
        </div>
        <div class="hzsh-footer">
          <el-carousel>
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small" style="line-height: 360px;text-align: center">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>

    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: "main1",
  data() {
    return {
      locationStatus: 'locationStatus1',
      location: true
    }
  },
  computed: {},
  methods: {
    changeCss() {
      console.log(document.documentElement.scrollTop)
      console.log(this.$refs.main.clientHeight)
      if (document.documentElement.scrollTop == 0) {
        this.locationStatus = 'locationStatus1'
        this.location = true
      } else if (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < this.$refs.main.clientHeight - this.$refs.nav.clientHeight) {
        this.locationStatus = 'locationStatus2'
        this.location = true
      } else {
        this.locationStatus = 'locationStatus3'
        this.location = false
      }
    }
  },
  created() {
    window.onscroll = this.changeCss
  }
}
</script>

<style scoped lang="scss">
.home-container {
  position: relative;
  letter-spacing: .2px;

  .top {
    height: 35px;
    width: 100%;
    background-color: #020202;
    color: #fff;
    position: fixed;
    top: 0;
    box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.5);

    .top-main {
      width: 1200px;
      height: 35px;
      margin: auto;
      line-height: 35px;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
    }
  }


  .nav {
    height: 78px;
    width: 100%;
    color: #ffffff;
    position: fixed;
    top: 32px;

    .nav-main {
      width: 1200px;
      height: 78px;
      margin: auto;
      line-height: 78px;
      display: flex;
      justify-content: space-between;
      font-size: 16px;

      .nav-main-left {
        font-size: 0;

        .nav-main-left-logo {
          line-height: 78px;
          vertical-align: middle;
        }

        .nav-main-left-ipv6 {
          margin-left: 10px;
          line-height: 78px;
          vertical-align: middle;
        }
      }

      .nav-main-right {
        ul {
          height: 78px;
          list-style: none;
          margin: 0;

          li {
            float: left;
            line-height: 78px;
            margin: 0 10px;
            cursor: pointer;
          }
        }
      }
    }
  }

  .nav:hover {
    background-color: rgba(2, 2, 2, 0.3);
    transition: 0.4s;
  }

  .main {
    margin-top: 34px;

    .main-img {
      width: 100%;
    }
  }

  .section1 {
    height: 460px;
    width: 100%;

    .section1-main {
      width: 1200px;
      height: 100%;
      padding: 52px 0 0 65px;
      margin: auto;
      box-sizing: border-box;

      .section1-main-left {
        float: left;

        img {
          width: 299px;
        }
      }

      .section1-main-right {
        float: left;
        margin-left: 100px;

        h2 {
          font-size: 32px;
          font-weight: 500;
          color: #404040;
          margin: 25px 0;
        }

        .middle-line {
          width: 35px;
          border-top: 4px solid black;
        }

        p {
          font-size: 16px;
          font-weight: 400;
          color: #8c8c8c;
          margin: 25px 0;
        }

        .jf {
          height: 45px;
          width: 720px;
          margin: 30px 0;

          img {
            width: 40px;
            height: 40px;
            float: left;
          }

          .word {
            float: left;
            margin-left: 25px;

            h3 {
              margin-top: 0;
              color: #666;
              margin-bottom: 0px;
            }

            span {
              font-size: 14px;
              color: #8c8c8c;
            }
          }
        }

        .zd {
          height: 45px;
          width: 720px;
          margin: 30px 0;

          img {
            width: 40px;
            height: 40px;
            float: left;
          }

          .word {
            float: left;
            margin-left: 25px;

            h3 {
              margin-top: 0;
              color: #666;
              margin-bottom: 0px;
            }

            span {
              font-size: 14px;
              color: #8c8c8c;
            }
          }
        }
      }
    }
  }

  .hzsh {
    height: 558px;
    width: 100%;

    .hzsh-main {
      width: 1200px;
      height: 100%;
      margin: auto;
      display: flow-root;

      .hzsh-top {
        width: 311px;
        height: 120px;
        background: url("../assets/15-a8cd733877.png");
        color: #ffffff;
        margin: -35px auto 0;
        line-height: 100px;
        text-align: center;
        font-size: 32px;
      }

      .hzsh-footer {
        width: 1200px;
        height: 360px;
        background-color: gray;
        margin-top: 50px;
      }
    }
  }

  .footer {
    height: 94px;
    width: 100%;
    background-color: #343434;
  }
}

.locationStatus1 {
  background-color: rgba(255, 255, 255, 0);
  transition: 0.4s;
}

.locationStatus2 {
  background-color: rgba(2, 2, 2, 0.3);
  transition: 0.4s;
}

.locationStatus3 {
  background-color: rgba(255, 255, 255) !important;
  box-shadow: 1px 1px 10px 1px rgba(2, 2, 2, 0.5) !important;
  color: black !important;
  transition: 0.2s;
}
</style>