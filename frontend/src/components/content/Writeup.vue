<script setup lang="ts">
import { md } from '@/main';
const props = defineProps<{
  render: any
}>()
//Temporary filesystem usage
const mdfiles = import.meta.glob('@/nand-to-tetris/*/*.md');
const jsonfiles = import.meta.glob('@/nand-to-tetris/*/*.json');
console.log(mdfiles,jsonfiles);

console.log(Object.getPrototypeOf(props.render));

</script>

<template>
    <div class="concept">
        <i><slot name="name"></slot></i>
        <!-- {{ markdown }} -->
        <strong><slot name="page"></slot></strong>
    </div>
</template>