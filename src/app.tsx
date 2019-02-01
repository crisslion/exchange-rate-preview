import * as React from "react";
import * as ReactDOM from "react-dom";

import { HelloWorld } from "./components/default";

import "./style.css";

class App extends React.PureComponent<{}, {}> {
    render() {
        return (
	    <div>
	        asdas
            	<HelloWorld />
	    </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
