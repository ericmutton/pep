<script setup lang="ts">
import Writeup from './Writeup.vue';
const props = defineProps<{
  id: string
  pages: Object
}>()
</script>

<template>
    <h6>
        <slot name="name"></slot>
    </h6>
    <Writeup v-for="page in pages"
        :render=page>
        <template #name></template>
    </Writeup>
</template>