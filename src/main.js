import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//引入字体文件及初始化项目配置
import "@/assets/font/iconfont.css";
import "@/assets/css/reset.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
