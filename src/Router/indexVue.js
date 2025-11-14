import {createRouter, createWebHistory} from 'vue-router'


const routers = [
     {
         path: '/dataBase',
         name: 'dataBase',
         component: DataBase
     },
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routers
  })

  export default router
