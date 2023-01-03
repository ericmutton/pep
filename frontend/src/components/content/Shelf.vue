<script setup lang="ts">
import Collection from './Collection.vue'
const props = defineProps<{
  collections: any
}>()
</script>

<template>
    <strong><slot name="name"></slot></strong>
    <Collection v-for="collection in collections" :id=collection.id :pages=collection.orders>
        <template #name>{{ collection.name }}</template>
    </Collection>
</template>