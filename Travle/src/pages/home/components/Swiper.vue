<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
			<swiper-slide v-for="item of swiperList" :key="item.id">
				<img :src="item.imgUrl" class="swiper-img">
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>

export default{
    name: 'HomeSwiper',
 	data() {
 		return {
 			swiperOption: {
 				pagination: '.swiper-pagination',
 				loop: true
 			},
 			swiperList: [{
 				id: '001',
 				imgUrl: require('../../../assets/index-swiper/1.jpg')
 			},{
 				id: '002',
 				imgUrl: require('../../../assets/index-swiper/2.jpg')
 			},{
 				id: '003',
 				imgUrl: require('../../../assets/index-swiper/3.jpg')
 			}]
 		}
 	}
}
</script>

<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination-bullet-active
		background: white !important
	.wrapper
		overflow: hidden
		width: 100%
		height: 0
		padding-bottom: 26.67%
		background: #eee
		.swiper-img
			width: 100%
</style>
