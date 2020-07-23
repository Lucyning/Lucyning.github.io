<template>
<div class="index-page">
    <div class="fix-bg-img"></div>
    <header class="head-title">
        <i class="head-pic"></i>
        <span class="head-text">这是美女小羊写给小付的网站</span>
        <ul class="base-flex title-right">
            <li v-for="item in HEADLIST" class=" base-flex">
                <i class="head-right-pic" :class="'head-pic-'+item.className"></i>
                <a :href="item.linkUrl" target="_blank" class="icon-text">{{item.text}}</a>
            </li>
        </ul>
    </header>
    <div class="center">
        <div class="base-flex">
            <div class="flex-1 common-border">
                在一起日期：2020.05.22
            </div>
            <div class="flex-1 common-border">
                <i class="main-pic img-1"></i>
                <i class="main-pic img-2"></i>
                <i class="main-pic img-4"></i>
                <i class="main-pic img-3"></i>
            </div>
            <div class="flex-1 common-border">
                未来期许：
                <div>belle 水晶鞋</div>
                <div>两只猫一只狗</div>
                <div>快快乐乐的在一起</div>
            </div>
        </div>
        <audio class="audio" src="http://52fzq.com/static/music.mp3"  controls>
        </audio>
    </div>
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
    },
    computed: {

    }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.base-flex {
    display: flex;
}
.flex-1 {
    flex: 1;
}
.common-border {
    margin: 10px;
    color: #777;
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
        padding: 10px;
        height: 60px;
        width: 100%;
        box-shadow: 0px 0px 5px #efef;
        .head-pic {
            display: inline-block;
            width: 60px;
            height: 60px;
            background-image: url('../img/beauty_1569049099328.jpg');
            background-size: cover;
            border-radius: 50%;
        }
        .head-text {
            color: #777;
            position: absolute;
            font-size: 12px;
            margin-left: 10px;
            display: inline-block;
            line-height: 60px;
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
    .center {
        margin-top: 80px;
        .audio {
            position: absolute;
            bottom: 10px;
        }
        .main-pic {
            display: inline-block;
            width: 200px;
            height: 200px;
            background-size: cover;
        }
        .img-1 {
            background-image: url('../img/main.jpg');
        }
        .img-2 {
            background-image: url('../img/beauty_1592893462730.jpg');
        }
        .img-3 {
            background-image: url('../img/beauty_1595134862783.jpg');
        }
        .img-4 {
            background-image: url('../img/beauty_1592985068100.jpg');
        }
    }
}
</style>
