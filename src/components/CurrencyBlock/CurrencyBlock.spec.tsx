import * as React from "react";
import { shallow } from "enzyme";

import { CurrencyBlock } from "./CurrencyBlock";

describe("Currency block", () => {
    test("Renders currency block", () => {
        const block = shallow(<CurrencyBlock name="EUR" value={100} />);

        expect(block.text()).toContain("EUR");
        expect(block.text()).toContain("100");
    });
});
