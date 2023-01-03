import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MarkdownIt from 'markdown-it'

import './assets/main.css'

// Markdown renderer Vue Composable
var markdown = new MarkdownIt();
export function md(input: string) {
    return markdown.render(input);
}

const app = createApp(App)

app.use(router)

app.mount('#app')
