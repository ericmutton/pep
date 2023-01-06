import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import axios from 'axios'
import MarkdownIt from 'markdown-it'

import '@/assets/main.css'

// Markdown renderer Vue Composable
var markdown = new MarkdownIt();
export function md(input: string) {
    return markdown.render(input);
}
// Axios Vue Composable
// export function explore(input: string) {
//     const headers = {
//         "Content-Type": "application/json"
//     }
//     axios
//         .get('/V1/'+input, { headers })
//         .then((response) => {
//             return response.data.shelves;
//     })
//     return [];
// }

const app = createApp(App)

app.use(router)

app.mount('#app')
