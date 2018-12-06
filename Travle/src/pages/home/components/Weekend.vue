<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" :alt="item.title">
                </div>                
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                </div>   
            </li>
        </ul>
    </div>
</template>

<script>

export default{
    name: 'HomeWeekend',
    props: {
        list: Array
    },
    // data () {
    //     return {
    //         weekendList: [{
    //             id: '001',
    //             imgUrl: 'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
    //             title: '浮在海上的绿洲',
    //             desc: '南国滨海之城，阳江等你'
    //         },{
    //             id: '002',
    //             imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
    //             title: '南国冰雪乐园',
    //             desc: '这里可以让你在南国感受到北国风光'
    //         },{
    //             id: '003',
    //             imgUrl: 'http://img1.qunarzz.com/sight/source/1509/86/e3a589b8ac4498.jpg_r_640x214_b8678794.jpg',
    //             title: '东莞赏秋胜地',
    //             desc: '在东莞，边走边摄的醉美秋色'
    //         },]
    //     }
    // }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        line-height: .8rem
        background: #eee
        text-indent: .2rem  
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 37.09%
        .item-img
            width: 100%
    .item-info
        padding: .1rem
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color: #ccc
            ellipsis()
</style>
