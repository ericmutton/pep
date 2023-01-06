<script setup lang="ts">
import Collection from './Collection.vue'
const props = defineProps<{
  collections: any
}>()
</script>

<template>
  <strong>
    <slot name="name"></slot>
  </strong>
  <div v-for="collection in collections">
    <Collection v-if="collection.id != ''" :id=collection.id>
      <template #name>{{ collection.name }}</template>
    </Collection>
  </div>
</template>