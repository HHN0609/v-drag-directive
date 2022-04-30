<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import {vDrag} from './units/dragDirective'

</script>

<template>
<div class="box">
  <HelloWorld v-drag="{limit: 1, classList:['draging'], dragArea:'parent'}"/>
  <HelloWorld v-drag="{limit: 1, classList:['draging'], dragArea:'parent'}"/>
  <HelloWorld v-drag="{limit: 1, classList:['draging'], dragArea:'parent'}"/>
</div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
.box{
  width: 700px;
  height: 500px;
  border: solid black 20px;
  position: absolute;
  margin: 0 auto;
  left: 50px;
}
.draging{
  opacity: 0.5;
  cursor: grab;
}
</style>
