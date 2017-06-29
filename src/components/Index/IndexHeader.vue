<template>
    <header id="header" v-on:touchmove.prevent>
        <div id="header-wrap">
            <div id="search">
                <span>寻找宝贝店铺</span>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'indexHeader'
    }
</script>

<style lang="scss">
    @import "../../common/css/init.scss";
    @import "../../common/css/font-face.css";

    #header {
        position: relative;
        z-index: 9999;
    }

    #header-wrap {
        box-sizing: border-box;
        width: 100%;
        background-image: url(../../module/index/images/logo.png);
        background-color: #FE5400;
        background-repeat: no-repeat;
        @include font-dpr-padding(6px,0px,6px,37px);
        padding-right: 0.2rem !important;
        background-size: 27px 20px;
        background-position: 4.5px center;
        [data-dpr="2"] & {
            background-size: 27px * 2  20px * 2 ;
            background-position: 4.5px * 2 center;
        }
        [data-dpr="3"] & {
            background-size: 27px * 3  20px * 3 ;
            background-position: 4.5px * 3 center;
        }
    }
    
    #search {
        box-sizing: border-box;
        background-color: #B52600;
        text-align: center;
        width: 100%;
        @include font-dpr(4px,border-radius);

        > span {
            @include font-dpr(13px);
            @include font-dpr(25px,line-height);
            @include font-dpr(25px,height);
            color: #F0E0DC;
        }
        > span:before {
            font-family: 'h5index-iconfont';
            font-style: normal;
            -webkit-font-smoothing: antialiased;
            -webkit-text-stroke-width: 0.2px;
            -moz-osx-font-smoothing: grayscale;
            display: inline-block;
            color: #FFF;
            content: '\E600';
            font-size: 15px;
            margin-right: 5px;
            [data-dpr="2"] & {
                font-size: 15px * 2;
                margin-right: 5px * 2;
            }
            [data-dpr="3"] & {
                font-size: 15px * 3;
                margin-right: 5px * 3;
            }
        }
    }


</style>