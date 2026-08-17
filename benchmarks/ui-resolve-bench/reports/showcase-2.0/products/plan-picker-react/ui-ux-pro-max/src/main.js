import { h, render } from "preact";
import { applyTheme } from "./theme.js";
import { App } from "./app.js";

applyTheme();
render(h(App), document.getElementById("app"));
