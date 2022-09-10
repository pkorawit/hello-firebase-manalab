import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

import { auth } from '../services/firebase'
import { onAuthStateChanged } from "firebase/auth";

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach((to, from, next) => {  

    console.log(from.path + " => " + to.path);
    if(to.matched.some((record) => record.meta.requiresAuth)){
      console.log('Require authentication');
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          next();
        } else {
          next({
            path: '/signin'
          })
        }
      });
    }
    else {
      next()
    }
    
  })

  return Router
}
