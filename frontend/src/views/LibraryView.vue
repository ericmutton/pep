<script setup lang="ts">
import Library from '@/components/content/Library.vue'
</script>

<template>
  <head>
    <title>TARP &middot; Learn ECS</title>
  </head>
  <div id="tabs">
        <ul></ul>
    </div>
    <div id="workspace">
        <div id="panels"></div>
    </div>
  <main class="library">
    <h1>
        <Library />
    </h1>
  </main>
</template>
  
<style>
    @media (min-width: 1024px) {
        .library {
            min-height: 100vh;
            display: flex;
        }
    }
</style>
  