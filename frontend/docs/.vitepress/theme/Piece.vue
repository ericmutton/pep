<script setup lang="ts">
const props = defineProps<{
  type: string
}>()
</script>

<template>
  <div v-if="this.type == 'CUSTOM'">
  <svg width=128 height=64 class="piece" :id="type" viewBox="-3 -3 131 67" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect fill="white" rx="10" ry="10" x="3" y="3" width="123" height="59"
      style="stroke:black; stroke-width:6; -moz-stroke-width:6; -webkit-text-stroke-width: 6;" />
    <text x="50%" y="55%" text-anchor="middle" alignment-baseline="central" fill="black">{{ type }}</text>
  </svg>
  </div>
  <div v-if="this.type == 'BUFFER'">
    <svg id="buffer" width="128px" height="128px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path fill="white" style="stroke:black; stroke-width:6; -moz-stroke-width:6; -webkit-text-stroke-width:6;"
        d="M 105,111.3 V 400.7 L 365.5,256 Z M 16,247 v 18 h 71 v -18 z m 400,-14 z m 40,14 c 0.6,2.9 1,5.9 1,9 0,3.1 -0.4,6.1 -1,9 h 40 v -18 z" />
    </svg>
  </div>
  <div v-if="this.type == 'NOT'">
    <svg id="not" width="128px" height="128px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path fill="white" style="stroke:black; stroke-width:6; -moz-stroke-width:6; -webkit-text-stroke-width:6;"
        d="M 105,111.3 V 400.7 L 365.5,256 Z M 16,247 v 18 h 71 v -18 z m 400,-14 c -12.8,0 -23,10.2 -23,23 0,12.8 10.2,23 23,23 12.8,0 23,-10.2 23,-23 0,-12.8 -10.2,-23 -23,-23 z m 40,14 c 0.6,2.9 1,5.9 1,9 0,3.1 -0.4,6.1 -1,9 h 40 v -18 z" />
    </svg>
  </div>
  <div v-if="this.type == 'AND'">
    <svg id="and" width="128px" height="128px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path fill="white" style="stroke:black; stroke-width:6; -moz-stroke-width:6; -webkit-text-stroke-width:6;"
        d="M105 105v302h151c148 0 148-302 0-302H105zm-89 46v18h71v-18H16zm368.8 96c.2 6 .2 12 0 18H496v-18H384.8zM16 343v18h71v-18H16z" />
    </svg>
  </div>
  <div v-if="this.type == 'NAND'">
    <svg id="nand" width="128px" height="128px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path fill="white" style="stroke:black; stroke-width:6; -moz-stroke-width:6; -webkit-text-stroke-width:6;"
        d="M105 105v302h151c148 0 148-302 0-302H105zm-89 46v18h71v-18H16zm368.8 96c.2 6 .2 12 0 18H496v-18H384.8zM16 343v18h71v-18H16z" />
    </svg>
  </div>
</template>
  
<script lang="ts">

</script>

<style>
svg.piece {
  text-align: center;
  user-select: none;
}
</style>