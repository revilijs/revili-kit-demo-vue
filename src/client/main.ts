import {createApp, h} from 'vue'
import naive from 'naive-ui'
import App from './App.vue'

const createVueApp = async () => {
  const app = createApp({
    setup() {
      return () => h(App)
    },
  })

  app.use(naive)
  app.mount('#app')
}

createVueApp()
