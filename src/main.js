import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import mixin from "./mixin";
import "@fortawesome/fontawesome-free/css/all.css";
import "github-markdown-css";

Vue.config.productionTip = false;

Vue.mixin(mixin);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
