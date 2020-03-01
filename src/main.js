import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Characters from "./components/Characters";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { name: "homePage", path: "/", component: Characters },
    { name: "myList", path: "/my-characters", component: Characters }
  ],
  mode: "history"
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
