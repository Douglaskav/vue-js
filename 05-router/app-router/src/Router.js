import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home';
const Cursos = () => import('./views/Cursos');
const Curso = () => import(/* webpackChunkName: "curso" */ './views/Curso');
const CursoAulas = () => import(/* webpackChunkName: "curso" */ './views/CursoAulas');
const CursoDescricao = () => import(/* webpackChunkName: "curso" */ './views/CursoDescricao');
import Acoes from './views/Acoes';
import AcoesDados from './views/AcoesDados';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,

  routes: [
    {
      path: "/",
      components: {
        default: Home,
        sidebar: Acoes
      }
    },
    {
      path: "*",
      redirect: "/"
    },
    {
      path: "/acoes",
      components: {
        default: Acoes,
        sidebar: Home
      },
      children: [
        {
          name: "AcoesDados",
          path: ":simbolo",
          component: AcoesDados,
          props: true
        }
      ]
    },
    {
      path: "/cursos",
      component: Cursos,
      props: true,
      // beforeEnter: (to, from, next) => {
      //   console.log('Foi para cursos');
      //   next();
      // },
      children: [
        {
          name: "cursos",
          path: ":curso",
          component: Curso,
          props: true,

          children: [
            {
              name: "aulas",
              path: "aulas",
              component: CursoAulas
            },
            {
              name: "descricao",
              path: "descricao",
              component: CursoDescricao
            },
          ]
        }
      ]
    },
  ],
});