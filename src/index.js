import React from "react";
import { render } from "render-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App.jsx";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);