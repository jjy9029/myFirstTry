import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import router from "@/router/index.js";
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";
const app = createApp(App);
const pinia = createPinia();
const persistedstate = createPersistedState();
pinia.use(persistedstate);
app.use(pinia);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}



