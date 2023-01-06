<script setup lang="ts">
import Writeup from '@/components/content/Writeup.vue'
import axios from 'axios'
const props = defineProps<{
  id: string
}>()
</script>

<script lang="ts">
export default {
  mounted() {
    const headers = {
			"Content-Type": "application/json"
	  }
    axios
        .get(`V1/${this.id}/collection.json`, { headers })
        .then((response) => {
            this.collection = response.data
        })
        .catch((err) => {
        console.error(`Could not GET V1/${this.id}/collection.json`);
        });
  },
  data() {
    return {
      collection: [{
        title: "",
        id: "",
        author: "",
        rating: "",
        tags: [],
        chapters: {
        }
      }]
    };
  }
}
</script>

<template>
    <h6>
        <slot name="name"></slot>
        
    </h6>

    <Writeup render="">
        <template #name></template>
    </Writeup>
</template>