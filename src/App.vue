<template>
  <div id="app">
    <m-header></m-header>
    <m-tab></m-tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
import MHeader from 'components/MHeader'
import MTab from 'components/MTab'
import Player from 'components/Player'
export default {
  name: 'app',
  components: {
    MHeader,
    MTab,
    Player
  }
}
</script>

<style>
</style>
