import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import Material from "@primeuix/themes/material";
import primevue from "./plugins/primevue";

import "./style.css"; // your custom styles

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(primevue); // plugin to register components

app.mount("#app");
