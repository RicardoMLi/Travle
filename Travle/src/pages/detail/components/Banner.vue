<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1603/1d/1d756648039bf30f90.water.jpg_600x330_c2314535.jpg" alt="东莞香市动物园">
            <div class="banner-info">
                <div class="banner-title">东莞香市动物园</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe67b;</span>
                    15
                </div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-if="showGallary" @close="closeGallary"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default{
  name: 'DetailBanner',
  components: {
    CommonGallary,
  },
  data() {
    return {
        imgs: ['http://img1.qunarzz.com/sight/p0/201406/06/98025b6e52dfb6bd9963778a58e7dbac.jpg_r_800x800_71e6c6ee.jpg','http://img1.qunarzz.com/sight/p0/201406/06/17d1c0935a2136e1d0fd65067142fbf1.jpg_r_800x800_b2d58968.jpg'],
        showGallary: false
    }
  },
  methods:{
    handleBannerClick() {
        this.showGallary = true
    },
    closeGallary() {
        this.showGallary = false
    }
  }
}

</script>

<style lang="stylus" scoped>
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-img
            width: 100%
        .banner-info
            display: flex
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: .6rem
            color: #fff
            background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
            .banner-title
                flex: 1
                font-size: .32rem
                padding: 0 .2rem
            .banner-number
                padding: 0 .4rem
                line-height: .4rem
                height: .32rem
                margin-top: .14rem
                border-radius: .2rem
                background: rgba(0,0,0,.8)
                font-size: .24rem
                .banner-icon
                    font-size: .24rem
</style>