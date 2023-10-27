import { createApp } from 'vue'
import './assets/main.css'
import router from './router'

import App from './App.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import NavigationComponent from './components/NavigationComponent.vue'
import LandingComponent from './components/LandingComponent.vue'
import SongListComponent from './components/SongListComponent.vue'
import SongFilterComponent from './components/SongFilterComponent.vue'
import AboutMeComponent from './components/AboutMeComponent.vue'
import FormComponent from './components/FormComponent.vue'

const app = createApp(App)

app
    .component('HeaderComponent', HeaderComponent)
    .component('NavigationComponent', NavigationComponent)
    .component('LandingComponent', LandingComponent)
    .component('SongListComponent', SongListComponent)
    .component('SongFilterComponent', SongFilterComponent)
    .component('FormComponent', FormComponent)
    .component('AboutMeComponent', AboutMeComponent)

app.use(router)
app.mount('#app')
