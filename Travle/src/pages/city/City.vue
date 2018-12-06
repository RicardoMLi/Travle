<template>
    <div>
        <city-header></city-header>
        <search-header></search-header>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import SearchHeader from './components/Search'
export default{
  name: 'City',
  components: {
    CityHeader,
    SearchHeader,
  }
}
</script>

<style lang="stylus" scoped>

</style>