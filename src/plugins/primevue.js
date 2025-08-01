import { InputText, InputNumber } from "primevue";
import Button from "primevue/button";
import Card from "primevue/card";
import Dialog from "primevue/dialog";
import Select from "primevue/select";
import Avatar from "primevue/avatar";
import Drawer from "primevue/drawer";
import Divider from "primevue/divider";
import Chart from "primevue/chart";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row"; // optional

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
    app.component("Divider", Divider);
    app.component("Chart", Chart);
    app.component("DataTable", DataTable);
    app.component("Column", Column);
    app.component("ColumnGroup", ColumnGroup);
    app.component("Row", Row);
    // Register other PrimeVue components here as needed
  },
};
