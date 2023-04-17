<template>
    <client-only>
        <CodeMirrorAdapter
            :app="app"
        />
    </client-only>
</template>


<script lang="ts">
    import { App } from 'vue';
    import CodeMirrorAdapter from './CodeMirrorAdapter.vue'

    export default defineComponent({
      props: {
        app: {
          type: Object as () => App<any>,
          default: null
        }
      },
      components: {
        CodeMirrorAdapter
      },
      template: `
        <CodeMirrorAdapter
          :code="app.code"
          :options="app.cmOptions"
          :extensions="app.extensions"
        />
      `
    })

    
</script>