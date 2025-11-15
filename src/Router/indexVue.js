import {createRouter, createWebHistory} from 'vue-router'
import dataBaseEmployee from '../components/dataBaseEmployee.vue'
import HomePage from '../components/HomePage.vue'


const routes = [
     {
         path: "/database",
         name: "database",
         component: dataBaseEmployee
     },
     {
        path: "/homepage",
        name: "homepage",
        component: HomePage

     },
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  })

  export default router;
