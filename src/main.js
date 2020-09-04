import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import mixin from "./mixin";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.config.productionTip = false;

Vue.mixin(mixin);
Vue.use(mavonEditor);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
