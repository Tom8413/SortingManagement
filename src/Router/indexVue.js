import {createRouter, createWebHistory} from 'vue-router'
import dataBaseEmployee from '../components/dataBaseEmployee.vue'


const routes = [
     {
         path: "/database",
         name: "database",
         component: dataBaseEmployee
     },
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  })

  export default router;
