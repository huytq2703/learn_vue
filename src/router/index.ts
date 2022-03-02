import { projectAuth } from "@/configs/firebase";
import { createRouter, createWebHistory } from "vue-router";

const requireAuth = (to, from, next) => {
  const user = projectAuth.getAuth().currentUser;
  if(!user){
    next({name: 'Login', params: {}});
  }else{
    next();
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      meta: {
        text: "Home",
        leading: true,
        footer: true,
      },
      component: () => import("@/views/index.vue"),
      
    },
    {
      path: "/register",
      name: "Register",
      meta:{
        layout: "auth",
        text: "Register",
        leading: true,
      },
      component: () => import("../views/register.vue"),
    },
    {
      path: "/login",
      name: "Login",
      meta:{
        layout: "auth",
      },
      component: () => import("../views/login.vue"),
    },

    {
      path: "/profile",
      name: "Profile",
      meta: {
        text: "Profile",
        leading: false,
        footer: true,
      },
      component: () => import("../views/profile.vue"),
      beforeEnter: [requireAuth],
    },
    {
      path: "/logout",
      name: "Logout",
      meta: {
        text: "Logout",
        leading: true,
        footer: true,
      },
      component: () => import("../views/logout.vue"),
    },
    {
      path: "/report",
      name: "Report",
      meta: {
        text: "Report",
        leading: true,
        footer: true,
      },
      component: () => import("../views/report.vue"),
      beforeEnter: [requireAuth],
    },
    {
      path: "/budget",
      name: "Budget",
      meta: {
        text: "Budget",
        leading: true,
        footer: true,
      },
      component: () => import("../views/budget.vue"),
      beforeEnter: [requireAuth],
    },
    {
      path: "/new-transection",
      name: "New-transection",
      meta: {
        text: "New-transection",
        leading: false,
        footer: false,
      },
      component: () => import("../views/new-transection.vue"),
      beforeEnter: [requireAuth],
    },

  ],
});

export default router;
