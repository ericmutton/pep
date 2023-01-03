<script setup lang="ts">
import Shelf from './Shelf.vue'
</script>

<script lang="ts">
export default {
  data() {
    return {
      shelves: [
        { name: "Computer Science", collections: [
            { name: "Nand-to-Tetris",
                id: "nand-to-tetris",
                orders: {
                    hardware:["logic-gates","arithmetics","switching","conditions","arithmetic-logic-unit","memory","processor"],
                    software:["low-level"]
                }
            }
        ]},
        { name: "Cybersecurity", collections: [
            { name: "Linux",
                id: "linux",
                orders: {}
            }
        ]}
      ]
    }
  }
}
</script>

<template>
    <h2>Shelves:</h2>
    <Shelf v-for="shelf in shelves"
        :collections=shelf.collections
    >
        <template #name>{{ shelf.name }}</template>
    </Shelf>
</template>