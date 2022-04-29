<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import {vGrag} from './units/gragDirective'


</script>

<template>
  <HelloWorld v-grag:limit="0.2"/>
  <HelloWorld v-grag></HelloWorld>
  <HelloWorld v-grag></HelloWorld>
  <HelloWorld v-grag></HelloWorld>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
