<script lang="ts">
import { oneDark } from '@codemirror/theme-one-dark'
import { defineComponent, ref } from 'vue'
import VueCodemirror from 'plugins/vue-codemirror'
import { Extension } from '@codemirror/state';
import { App } from 'vue';

export default defineComponent({
  props:{
    app: {
      type: Object as () => App<any>,
      default: null
    }
  },
  components: {
    codemirror: VueCodemirror,
  },
  methods: {
    logEvent(event: any) {
      console.log(event);
    }
  },
  setup(props) {
    const code = ref('');
    const extensions = [oneDark];
    const options = ref({
      theme: 'default',
      lineNumbers: true,
      tabSize: 2,
      styleActiveLine: true,
      line: true,
      foldGutter: true,
      styleSelectedText: true,
      mode: 'text/javascript',
      keyMap: "sublime",
      matchBrackets: true,
      showCursorWhenSelecting: true,
      extraKeys: { "Ctrl": "autocomplete" },
      hintOptions:{
        completeSingle: false
      }
    });
    // Codemirror EditorView instance ref
    const view = shallowRef();
    const handleReady = (payload: { view: any; }) => {
      view.value = payload.view
    };

    // Status is available at all times via Codemirror EditorView
    const getCodemirrorStates = () => {
      const state = view.value.state
      const ranges = state.selection.ranges
      const selected = ranges.reduce((r: any, range: { to: any; from: number; }) => r + range.to - range.from, 0)
      const cursor = ranges[0].anchor
      const length = state.doc.length
      const lines = state.doc.lines
      // more state info ...
      // return ...
    };

    return {
      code,
      options,
      extensions,
      handleReady
    };
  }
});
</script>