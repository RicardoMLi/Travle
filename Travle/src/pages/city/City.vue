<template>
    <div>
        <city-header></city-header>
        <search-header></search-header>
        <city-list></city-list>
        <city-alphabet></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import SearchHeader from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default{
  name: 'City',
  components: {
    CityHeader,
    SearchHeader,
    CityList,
    CityAlphabet
  }
}
</script>

<style lang="stylus" scoped>

</style>