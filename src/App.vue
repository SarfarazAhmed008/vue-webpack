<template>
  <div id="app">
      <hr>
      <router-link to="/">Home</router-link>
      <router-link to="/users/10">User for id 10</router-link>
      <router-link to="/users/20">User for id 20</router-link>
      <hr>
      <router-view></router-view>
      <hr>
      <app-message></app-message>
  </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>

<style>

</style>
