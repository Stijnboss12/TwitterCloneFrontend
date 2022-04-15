import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueLuxon from "vue-luxon";

// Import the Auth0 configuration
import { domain, clientId, audience } from '../auth_config.json';

// Import the plugin here
import { Auth0Plugin } from './auth';

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.use(BootstrapVue)

Vue.use(VueLuxon, {
  input: {
      zone: "utc",
      format: "iso"
  },
  output: {
    format: {
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
