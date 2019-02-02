import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { MainLayout } from "./layouts/Main/Main";
import { createReduxStore } from "./store/store";

import { exchangeTableReducer } from "./blocks/ExchangeTable/ExchangeTable.store";
import { notificationsReducer } from "./blocks/Notifications/Notifications.store";

import "./app.css";

const store = createReduxStore({
    exchangeTable: exchangeTableReducer,
    notifications: notificationsReducer,
});

const App = (
    <Provider store={store}>
        <MainLayout />
    </Provider>
);

ReactDOM.render(App, document.getElementById("app"));
