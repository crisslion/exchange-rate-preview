import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";

interface App {
    data: string;
}

function check(a: App) {
    return a;
}

interface HelloProps {
    toWhat: string;
}

export const MegaParagraph = styled.p`
    color: red;
    background: black;
`;

class Hello extends React.Component<HelloProps> {
  render() {
    return <div>Hello {this.props.toWhat}<MegaParagraph>Ayayayaya</MegaParagraph></div>;
  }
}

//ReactDOM.render(
//  <Hello toWhat="World" />,
//  document.getElementById('app')
//);

alert("app typescript good to go");
