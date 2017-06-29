<template>
    <div class="navBanner">
        <div v-for="n in 2" class="navBannerRow">
            <div v-for="n in 5" class="navBannerCell">
                <div class="cellContent">
                    <div class="icon"></div>
                    <div class="tittle">{{n}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'navBanner'
    }
</script>

<style lang="scss">
    .navBannerRow {
        box-sizing: border-box;
        padding-left: 0.359rem;
        padding-right: 0.359rem;
        width: 10rem;
        
        display: flex;
        .navBannerCell {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            .icon {
                margin-top: 0.313rem;
                width: 1.625rem;
                height: 1.141rem;
                background-size: contain;
                background-color: #999
            }
            .tittle {
                box-sizing: border-box;
                line-height: 0.688rem;
                text-align: center;
                color: rgb(102, 102, 102);
                background-color: transparent;
                width: 1.625rem;
                height: 0.688rem;
            }
        }
    }
</style>