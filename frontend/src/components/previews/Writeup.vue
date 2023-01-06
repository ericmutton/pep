<script setup lang="ts">
import { md } from '@/main';
const props = defineProps<{
  render: any
}>()

</script>

<template>
    <div class="concept">
        <i><slot name="name"></slot></i>
        <!-- {{ markdown }} -->
        <strong><slot name="page"></slot></strong>
    </div>
</template>