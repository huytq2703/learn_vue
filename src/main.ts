import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";
import { registerGlobalComponents } from "./utils/import";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas, } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
import { projectAuth } from "./configs/firebase";
dom.watch();

let app;

projectAuth.getAuth().onAuthStateChanged(() => {
  if(!app){
    app = createApp(App);
    registerGlobalComponents(app);

    app.component("font-awesome-icon", FontAwesomeIcon);

    app.use(createPinia());
    app.use(router);

    app.mount("#app");
  }
});

// const app = createApp(App);
// registerGlobalComponents(app);

// app.component("font-awesome-icon", FontAwesomeIcon);

// app.use(createPinia());
// app.use(router);

// app.mount("#app");
