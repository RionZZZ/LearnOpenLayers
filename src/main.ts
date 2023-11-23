import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "ol/ol.css";
import { createRouter, createWebHashHistory } from "vue-router";

import Map from "./views/map.vue";
import Draw from "./views/draw.vue";
import Static from "./views/static.vue";
import Event from "./views/event.vue";
import Mark from "./views/mark.vue";
import Popup from "./views/popup.vue";

const routes = [
  { path: "/map", component: Map },
  { path: "/draw", component: Draw },
  { path: "/static", component: Static },
  { path: "/event", component: Event },
  { path: "/mark", component: Mark },
  { path: "/popup", component: Popup }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

createApp(App).use(router).mount("#app");
