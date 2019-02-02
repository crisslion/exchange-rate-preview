import * as React from "react";
import { shallow } from "enzyme";

import { LoadButtonBare } from "./LoadButton";

describe("Load button", () => {
    const loadExchangeData = jest.fn();
    let button: any;

    beforeEach(() => {
        button = shallow(<LoadButtonBare loadExchangeData={loadExchangeData} />);
        loadExchangeData.mockClear();
    });

    test("Renders a button", () => {
        expect(button.find("button")).toHaveLength(1);
    });
    test("On click calls loadExchangeData thunk", () => {
        button.simulate("click");
        expect(loadExchangeData).toBeCalled();
    });
});
