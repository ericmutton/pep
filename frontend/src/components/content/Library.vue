<script setup lang="ts">
import axios from 'axios';
import Shelf from './Shelf.vue'
</script>

<script lang="ts">
//Load library shelf information
export default {
	mounted() {
        const headers = {
			"Content-Type": "application/json"
		}
		axios
			.get('/V1/shelves.json', { headers })
			.then((response) => {
				this.shelves = response.data.shelves
      })
	},
	data() {
        return {
            shelves: [{name:"", collections:[{name:"",id:""}]}]
        };
    }
}
</script>

<template>
    <h2>Shelves:</h2>
    <Shelf v-for="shelf in shelves"
        :collections="shelf.collections"
    >
        <template #name>{{ shelf.name }}</template>
    </Shelf>
</template>