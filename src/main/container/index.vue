<template>
<div class="index-page">
    <div class="fix-bg-img"></div>
    <header class="head-title">
        <i class="head-pic"></i>
        <ul class="base-flex title-right">
            <li v-for="item in HEADLIST" class=" base-flex">
                <i class="head-right-pic" :class="'head-pic-'+item.className"></i>
                <a :href="item.linkUrl" target="_blank" class="icon-text">{{item.text}}</a>
            </li>
        </ul>
    </header>
</div>
</template>

<script>
import {HEADLIST} from '../mods/constant';
import PageTitle from '../components/page-title.vue'
export default {
    name: 'corepage',
    components: {
        PageTitle
    },
    data() {
        return {
            HEADLIST
        }
    },
    props: {
        data: {}
    },
    mounted() {
    },
    methods: {
        // getOptions(dir) {
        //     return {
        //         model: {
        //             jsonPath: dir,
        //         },
        //         display: {
        //             superSample: 2,
        //             width: 150,
        //             height: 300,
        //             position: 'right',
        //             hOffset: 0,
        //             vOffset: 0,
        //         },
        //         mobile: {
        //             show: true,
        //             scale: 1,
        //             motion: true,
        //         },
        //         react: {
        //             opacityDefault: 0.85,
        //             opacityOnHover: 0.2,
        //         },
        //     }

        // },
        onRouterPage1BtnClick(){
            this.$router.push({ name: 'routerpage1'});
        },
        onRouterPage2BtnClick(){
            this.$router.push({ name: 'routerpage2'});
        },
        onRouterPage3BtnClick(){
            this.$router.push({ name: 'routerpage3'});
        }
    },
    computed: {

    }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.base-flex {
    display: flex;
    display: -webkit-flex;
}
.base-flex-1 {

}
.index-page {
    .fix-bg-img {
        opacity: 0.5;
        position: fixed;
        background-image: url(../img/background.jpg);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-size: cover;
    }
    .head-title {
        position: fixed;
        z-index: 10;
        top: 0;
        padding: 20px;
        width: 100%;
        box-shadow: 0px 0px 5px #efef;
        .head-pic {
            display: inline-block;
            width: 60px;
            height: 60px;
            background-image: url('../img/nry.jpg');
            background-size: cover;
            border-radius: 50%;
        }
        .title-right {
            float: right;
            margin: 20px 40px 0;
            .icon-text {
                margin-right: 10px;
                color: #be89c1;
            }
        }
    }
    .head-right-pic {
        display: inline-block;
        width: 20px;
        height: 20px;
        background-size: cover;
    }
    .head-pic-lemon {
        background-image: url('../img/lemon.png');
    }
    .head-pic-strawberry {
        background-image: url('../img/strawberry.png');
    }
    .head-pic-watermelon {
        background-image: url('../img/watermelon.png');
    }
}
</style>
