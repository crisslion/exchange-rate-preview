import { shallow } from "enzyme";
import * as React from "react";

import { CurrencyBlock } from "../../components/CurrencyBlock/CurrencyBlock";
import { ExchangeTableBare } from "./ExchangeTable";

describe("Exchange table", () => {
    const mockData = {
        base: "EUR",
        date: "some",
        rates: {
            usd: 10.3,
            zen: 0.3,
        },
    };

    test("renders base currency", () => {
        const comp = shallow(<ExchangeTableBare data={mockData} />);
        expect(comp.find(".exchange-table__base").text()).toBe("Rate compared to: EUR");
    });

    test("renders date", () => {
        const comp = shallow(<ExchangeTableBare data={mockData} />);
        expect(comp.find(".exchange-table__date").text()).toBe("some");
    });

    test("renders currency blocks", () => {
        const comp = shallow(<ExchangeTableBare data={mockData} />);
        expect(comp.find(CurrencyBlock)).toHaveLength(2);
    });
});
