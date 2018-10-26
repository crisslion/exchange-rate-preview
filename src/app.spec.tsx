import * as React from 'react';
import * as app from "./app";
import { shallow } from "enzyme";

const Mega = app.MegaParagraph;

test("something", () => {
    expect(true).toBe(true);
    const stuff = shallow(<Mega />);
    expect(stuff.text()).not.toBe("");
});
