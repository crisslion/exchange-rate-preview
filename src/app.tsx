import * as React from "react";
import * as ReactDOM from "react-dom";

import { HelloWorld } from "./components/HelloWorld";

import "./style.css";

class App extends React.PureComponent<{}, {}> {
    public render() {
        return (
            <div>
                <HelloWorld />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app"),
);
