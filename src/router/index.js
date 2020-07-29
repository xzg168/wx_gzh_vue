import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Index.vue")
  },
  {
    path: "/allCategories",
    name: "Categories",
    component: () => import("../views/Categories.vue")
  },
  {
    path: "/distribution",
    name: "Distribution",
    component: () => import("../views/Distribution.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach(function(to, from, next) {
  if (to.meta.title) {
    // || store.state.title
    Vue.refreshTitle(to.meta.title); //|| store.state.title
  }
  next();
});

export default router;
