import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home/Home.vue";
import GameForm from "./views/GameForm/GameForm.vue";
import GameDetail from './views/GameDetail/GameDetail.vue'

const history = createWebHistory();

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/game-form-create/',
    name: 'game-form-create',
    component: GameForm
  },
  // {
  //   path: '/game-form-update/:id',
  //   name: 'game-form-update',
  //   component: GameForm
  // },
  {
    path: '/game-detail/:id',
    name: 'game-detail',
    component: GameDetail
  }

];

const router = createRouter({ history, routes });

export default router;