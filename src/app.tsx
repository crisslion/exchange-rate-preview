import * as React from "react";
import * as ReactDOM from "react-dom";

import { Default } from "./components/default";

class App extends React.PureComponent<{}, {}> {
    render() {
        return (
            <Default />
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
