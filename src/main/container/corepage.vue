<template>
<div class="corepage">
    <page-title title="主页面"></page-title>
    <div class="router-btn" v-on:click="onRouterPage1BtnClick">路由页面1</div>
    <div class="router-btn" v-on:click="onRouterPage2BtnClick">路由页面2</div>
    <div class="router-btn" v-on:click="onRouterPage3BtnClick">路由页面3</div>
</div>
</template>

<script>
// import '../../otherjs/L2Dwidget.min';
import PageTitle from '../components/page-title.vue'
export default {
    name: 'corepage',
    components: {
        PageTitle
    },
    data() {
        return {

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
.corepage{

}
</style>
