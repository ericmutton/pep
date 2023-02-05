<script setup lang="ts">

import { useData } from 'vitepress'
const { isDark } = useData()

const fillColor = isDark.value ? "white" : "black";
console.log(isDark.value, fillColor);

const props = defineProps<{
  shape: string
  type: string
}>()
</script>

<script lang="ts">
  export default {
    data() {
        return {
            inverted: this.type.startsWith('N') || this.type == 'XNOR'
        };
    }
  }
</script>

<template>
  <div v-if="this.shape == 'ANSI'">
    <div v-if="this.type == 'CUSTOM'">
      <svg width=128 height=64 class="piece" :id="type" viewBox="-3 -3 131 67" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect fill="white" rx="10" ry="10" x="3" y="3" width="123" height="59"
          style="stroke:black; stroke-width:6; -moz-stroke-width:6; -webkit-text-stroke-width: 6;" />
        <text x="50%" y="55%" text-anchor="middle" alignment-baseline="central" fill="black">{{ type }}</text>
      </svg>
    </div>
    <svg v-else :id="this.type.toLowerCase()" width="128px" height="64px" viewBox="0 0 128 64" xmlns="http://www.w3.org/2000/svg">
      <g v-if="this.type == 'BUFFER' || this.type == 'NOT'">
        <path v-if="this.inverted" transform="translate(11,0)" :stroke=fillColor style="stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
        d="M 80,25 A 4,4 0 1 1 72,25 A 4,4 0 1 1 80,25 z" />
        <path :stroke=fillColor style="stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
        d="M 39.043478,25 L 15.043478,25"/>
        <path :stroke=fillColor style="stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
        d="M 82,25 L 105.08571,25"/>
        <path :fill=fillColor
        d="M 38,2.59375 L 38,5 L 38,45 L 38,47.40625 L 40.15625,46.34375 L 81.1875,26.34375 L 84.03125,25 L 81.1875,23.65625 L 40.15625,3.65625 L 38,2.59375 z M 41,7.40625 L 77.125,25 L 41,42.59375 L 41,7.40625 z" />
      </g>
      <g v-if="this.type.includes('AND')">
        <path :stroke=fillColor style="stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          d="M 41,15 L 15,15"/>
        <path :stroke=fillColor style="stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          d="M 42,35 L 15,35"/>
        <path :stroke=fillColor style="stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          d="M 80,25 C 100,25 105,25 105,25"/>
        <path v-if="this.inverted" transform="translate(9,0)" :stroke=fillColor style="stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          d="M 80,25 A 4,4 0 1 1 72,25 A 4,4 0 1 1 80,25 z" />
        <path :fill=fillColor
          d="M 40,5 L 40,6.4285714 L 40,43.571429 L 40,45 L 41.428571,45 L 60.47619,45 C 71.744098,45 80.47619,35.999955 80.47619,25 C 80.47619,14.000045 71.744099,5.0000002 60.47619,5 C 60.47619,5 60.47619,5 41.428571,5 L 40,5 z M 42.857143,7.8571429 C 50.834264,7.8571429 55.918368,7.8571429 58.095238,7.8571429 C 59.285714,7.8571429 59.880952,7.8571429 60.178571,7.8571429 C 60.327381,7.8571429 60.409227,7.8571429 60.446429,7.8571429 C 60.465029,7.8571429 60.471543,7.8571429 60.47619,7.8571429 C 70.236853,7.857143 77.142857,15.497098 77.142857,25 C 77.142857,34.502902 69.760662,42.142857 60,42.142857 L 42.857143,42.142857 L 42.857143,7.8571429 z" />
      </g>
      <g v-if="this.type.includes('OR')">
        <path :stroke=fillColor style="stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          d="M 41.03125,15 L 15.03125,15"/>
        <path :stroke=fillColor style="stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          d="M 80.03125,25 C 100.03125,25 105.03125,25 105.03125,25"/>
        <path :stroke=fillColor style="stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          d="M 42.03125,35 L 15.03125,35"/>
        <path v-if="this.inverted" transform="translate(10,0)" :stroke=fillColor style="stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          d="M 80,25 A 4,4 0 1 1 72,25 A 4,4 0 1 1 80,25 z" />
        <path transform="translate(26.5,-39.5)" :fill=fillColor
          d="M 7.625,44.5 L 9.625,46.9375 C 9.625,46.9375 15.28125,53.937549 15.28125,64.5 C 15.28125,75.062451 9.625,82.0625 9.625,82.0625 L 7.625,84.5 L 10.78125,84.5 L 24.78125,84.5 C 27.189326,84.500001 32.470949,84.524514 38.40625,82.09375 C 44.341551,79.662986 50.942786,74.750484 56.09375,65.21875 L 54.78125,64.5 L 56.09375,63.78125 C 45.790637,44.71559 29.537824,44.5 24.78125,44.5 L 10.78125,44.5 L 7.625,44.5 z M 13.5,47.5 L 24.78125,47.5 C 29.465423,47.5 43.0681,47.369793 52.75,64.5 C 47.983214,72.929075 42.228719,77.18391 37.03125,79.3125 C 31.670589,81.507924 27.189325,81.500001 24.78125,81.5 L 13.53125,81.5 C 15.404838,78.391566 18.28125,72.45065 18.28125,64.5 C 18.28125,56.526646 15.372719,50.599815 13.5,47.5 z" />
      </g>
      <g v-if="this.type == 'XOR' || this.type == 'XNOR'">
        <path :stroke=fillColor style="stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          d="M 41.03125,15 L 15.03125,15"/>
        <path :stroke=fillColor style="stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          d="M 80.03125,25 C 100.03125,25 105.03125,25 105.03125,25"/>
        <path :stroke=fillColor style="stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          d="M 42.03125,35 L 15.03125,35"/>
        <path v-if="this.inverted" transform="translate(10,0)" :stroke=fillColor style="stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          d="M 80,25 A 4,4 0 1 1 72,25 A 4,4 0 1 1 80,25 z" />
        <path transform="translate(36.53125,-39.5)" :fill=fillColor
          d="M -2.25,81.500005 C -3.847374,84.144405 -4.5,84.500005 -4.5,84.500005 L -8.15625,84.500005 L -6.15625,82.062505 C -6.15625,82.062505 -0.5,75.062451 -0.5,64.5 C -0.5,53.937549 -6.15625,46.9375 -6.15625,46.9375 L -8.15625,44.5 L -4.5,44.5 C -3.71875,45.4375 -3.078125,46.15625 -2.28125,47.5 C -0.408531,50.599815 2.5,56.526646 2.5,64.5 C 2.5,72.45065 -0.396697,78.379425 -2.25,81.500005 z" />
        <path transform="translate(36.53125,-39.5)" :fill=fillColor
          d="M -2.40625,44.5 L -0.40625,46.9375 C -0.40625,46.9375 5.25,53.937549 5.25,64.5 C 5.25,75.062451 -0.40625,82.0625 -0.40625,82.0625 L -2.40625,84.5 L 0.75,84.5 L 14.75,84.5 C 17.158076,84.500001 22.439699,84.524514 28.375,82.09375 C 34.310301,79.662986 40.911536,74.750484 46.0625,65.21875 L 44.75,64.5 L 46.0625,63.78125 C 35.759387,44.71559 19.506574,44.5 14.75,44.5 L 0.75,44.5 L -2.40625,44.5 z M 3.46875,47.5 L 14.75,47.5 C 19.434173,47.5 33.03685,47.369793 42.71875,64.5 C 37.951964,72.929075 32.197469,77.18391 27,79.3125 C 21.639339,81.507924 17.158075,81.500001 14.75,81.5 L 3.5,81.5 C 5.3735884,78.391566 8.25,72.45065 8.25,64.5 C 8.25,56.526646 5.3414686,50.599815 3.46875,47.5 z"/>
      </g>
    </svg>
  </div>
</template>

<style>
svg.piece {
  text-align: center;
  user-select: none;
}
</style>