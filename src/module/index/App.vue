<template>
  <div id="app">
    <index-header></index-header>
      <scroller>
        <div id="appBanner" v-if="show">
          <a id="closeAppBanner" @click="show = !show"></a>
          <a id="appDonwload" href="#">
            <i></i>
            <span>上客户端，领专属好礼！</span>
            <b>立即领取</b>
          </a>
        </div>
        <div ref="content" id="content">
            <div class="slideBanner">
              <img src="./images/p1.jpg" alt="">
            </div>
            <nav-banner></nav-banner>
        </div>
      </scroller>
    <div class="footer"></div>
  </div>
</template>

<script>
  import 'common/css/reset.css';
  import indexHeader from 'components/Index/IndexHeader';
  import navBanner from 'components/Index/Navbanner';
  import scroller from 'components/Common/Scroller';

  export default {
    name: 'app',
    components: {
      indexHeader,
      scroller,
      navBanner
    },
    data () {
      return {
        show: true,
        p1: require('./images/p1.jpg')
      }
    },
    mounted () {
      /*let scroller = this.$refs.scroller;
      //let content = this.$refs.content;
      console.log(content.offsetHeight);
      console.log(this.$root.$data.wrapper_height);
      this.min = this.$root.$data.wrapper_height - content.offsetHeight*/
    }
          
  }
</script>

<style lang="scss">
  @import '../../common/css/init.scss';
  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .footer {
    width: 100%;
    height: 1rem;
    background-color: red;
  }

  #content {
    position: relative;
    width: 10rem;
    margin: 0 auto;
  }

  #appBanner {
    position: relative;
    background-color: rgb(95, 100, 110);
    @include font-dpr(12px);
    @include font-dpr(42px,height);
    color: #fff;

    #closeAppBanner {
      position: absolute;
      @include font-dpr(42px,height);
      @include font-dpr(42px,line-height);
      @include font-dpr(35px,width);
      &:before {
        content: "\D7";
        box-sizing: content-box;
        display: inline-block;
        text-align: center;
        border: 1px solid;
        border-radius: 50%;
        font-size: inherit;
        @include font-dpr(16px,height);
        @include font-dpr(16px,line-height);
        @include font-dpr(16px,width);
        @include font-dpr(8.5px,margin-left);
      }
    }

    #appDonwload {
      height: 100%;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #fff;
      @include font-dpr(35px,margin-left);
      > i {
        background-image: url(./images/app_logo.png);
        background-repeat: no-repeat;
        background-size: cover;
        margin-right: 8px;
        width: 30px;
        height: 30px;
        [data-dpr="2"] & {
          margin-right: 8px * 2;
          width: 30px * 2;
          height: 30px * 2;
        }
        [data-dpr="3"] & {
          margin-right: 8px * 3;
          width: 30px * 3;
          height: 30px * 3;
        }
      }
      > span {
        flex:1;
      }
      > b {
        height: 100%;
        background-color: #FF5000;
        display: flex;
        align-items: center;
        font-weight: 400;
        @include font-dpr(14px);
        @include font-dpr-padding(0px,14px,0px,14px);
      }
    }
  }
  .slideBanner {
    box-sizing: border-box;
    /*line-height: 0;*/
    width: 10rem;
    height: 3.125rem;
    img {
      width: 10rem;
      height: 3.125rem;
    }
  }
</style>
