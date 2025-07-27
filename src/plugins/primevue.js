import { InputText, InputNumber } from "primevue";
import Button from "primevue/button";
import Card from "primevue/card";
import Dialog from "primevue/dialog";
import Select from "primevue/select";
import Avatar from "primevue/avatar";
import Drawer from "primevue/drawer";

export default {
  install(app) {
    app.component("Button", Button);
    app.component("Card", Card);
    app.component("Dialog", Dialog);
    app.component("InputText", InputText);
    app.component("InputNumber", InputNumber);
    app.component("Select", Select);
    app.component("Avatar", Avatar);
    app.component("Drawer", Drawer);
    // Register other PrimeVue components here as needed
  },
};
