import Vue from 'vue' 
import VueRouter from 'vue-router' 

Vue.use(VueRouter)

import Myheader from '../components/MyheaderComponent.vue' ;
import Login from '../components/LoginComponent.vue' ;
import Register from '../components/RegisterComponent.vue' ;
import Post from '../components/PostComponent.vue' ;
 
const routes = [
    // { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/Register', component: Register },
  { path: '/Post', component: Post },
]

const router = new VueRouter({
    routes,hashbang:false,mode:'history'
})


export default router ;