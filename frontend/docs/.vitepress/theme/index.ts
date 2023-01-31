import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Piece from './Piece.vue'
import Editor from './Editor.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('Piece', Piece)
    ctx.app.component('Editor', Editor)
  }
}