<template>
	<div class="icons">
		<swiper>
			<swiper-slide v-for="(page, index) of pages" :key="index">
				<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl" alt="item.desc">
					</div>
					<p class="icon-desc">{{ item.desc }}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>

export default{
  name: 'HomeIcons',
  data () {
  	return {
  		iconList: [{
  			id: '001',
  			imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
  			desc: '景点门票'
  		},
  		{
  			id: '002',
  			imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
  			desc: '动植物园'
  		},
  		{
  			id: '003',
  			imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png',
  			desc: '玻璃栈道'
  		},
  		{
  			id: '004',
  			imgUrl: 'https://img1.qunarzz.com/piao/fusion/1811/1d/c46140e32fffa502.png',
  			desc: '去哪臻选'
  		},
  		{
  			id: '005',
  			imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
  			desc: '亲子游'
  		},
  		{
  			id: '006',
  			imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
  			desc: '自然风光'
  		},
  		{
  			id: '007',
  			imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
  			desc: '景点门票'
  		},
  		{
  			id: '008',
  			imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
  			desc: '动植物园'
  		},
  		{
  			id: '009',
  			imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png',
  			desc: '玻璃栈道'
  		}]
  	}
  },
  computed: {
  	pages () {
  		const pages = []
  		this.iconList.forEach((item, index) => {
  			const page = Math.floor(index / 8);
  			if(!pages[page]){
  				pages[page] = [];
  			}
  			pages[page].push(item);
  		})
  		return pages
  	}
  }
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	@import '~styles/mixins.styl'
	.icons >>> .swiper-container
		height: 0
		padding-bottom: 50%	
	.icon
		position: relative
		overflow: hidden
		height: 0
		float: left
		width: 25%
		padding-bottom: 25%
		.icon-img
			position: absolute
			top: 0
			left: 0
			right: 0
			bottom: .44rem
			box-sizing: border-box
			padding: .1rem
			.icon-img-content
				display: block
				margin: 0 auto
				height: 100%
		.icon-desc
			position: absolute
			left: 0
			right: 0
			bottom: 0
			height: .44rem
			text-align: center
			line-height: .44rem
			color: $darkTextColor
			ellipsis()
</style>
