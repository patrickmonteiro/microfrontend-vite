import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import ButtonCheck from 'home/ButtonCheck'
import ButtonStop from 'home/ButtonStop'
import CartList from 'cart/CartList'

const app = createApp(App)

app.component('button-check', ButtonCheck )
app.component('button-stop', ButtonStop )
app.component('cart-list', CartList )


app.mount('#root')
