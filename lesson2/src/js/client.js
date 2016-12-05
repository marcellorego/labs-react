import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

const app = document.getElementById('app');

const name = app.getAttribute("data-props-name");

const layoutRenderer = (<Layout name="World"/>);

ReactDOM.render(layoutRenderer, app);