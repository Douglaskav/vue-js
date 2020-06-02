import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home';
import Cursos from './views/Cursos';
import Curso from './views/Curso';
import CursoAulas from './views/CursoAulas';
import CursoDescricao from './views/CursoDescricao';
import Acoes from './views/Acoes';
import AcoesDados from './views/AcoesDados';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,

  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/acoes",
      component: Acoes,
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
  ]
});