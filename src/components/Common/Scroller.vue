<template>
    <div id="wrapper" ref="wrapper" v-alloytouch="{options: options, methods:{animationEnd: onAnimationEnd, initAlloyTouch: initAlloyTouch}, min: min, max: max}">
        <div id="scroller" class="alloytouch-target">
        {{scrollMin}}
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'scroller',
        data () {
            return {
                // 初始化设置
            options: {
                touch:"",//反馈触摸的dom
                vertical: true,//不必需，默认是true代表监听竖直方向touch
                target: '#scroller', //运动的对象
                property: "translateY",  //被滚动的属性
                sensitivity: 1,//不必需,触摸区域的灵敏度，默认值为1，可以为负数
                factor: 1,//不必需,默认值是1代表touch区域的1px的对应target.y的1
                step: 40,
            },
            // 动态设置属性
            min: 0, //不必需,滚动属性的最小值
            max: 0, //不必需,滚动属性的最大值
            handleAlloyTouch: null
            }
        },
        methods: {
            initAlloyTouch(handle){
                console.log(handle)
                this.handleAlloyTouch = handle
            },
            // 回调函数
            onAnimationEnd(){
                console.log('onAnimationEnd')
            }
        },
        mounted () {
            /*let wrapper = this.$refs.wrapper;
            this.$root.$data.wrapper_height = wrapper.offsetHeight;*/
        }
    }
</script>

<style lang="css">
    #wrapper {
        position: relative;
        top: 0;
        width: 100%;
        overflow: hidden;
        flex: 1;
    }
</style>