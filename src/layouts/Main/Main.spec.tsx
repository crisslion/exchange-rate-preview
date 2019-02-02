import * as React from "react";
import { shallow } from "enzyme";

import { MainLayout } from "./Main";
import { Notifications } from "../../blocks/Notifications/Notifications";
import { LoadButton } from "../../blocks/LoadButton/LoadButton";
import { ExchangeTable } from "../../blocks/ExchangeTable/ExchangeTable";

describe("Main layout", () => {
    test("Should render notification component", () => {
        const layout = shallow(<MainLayout />);
        expect(layout.find(Notifications)).toHaveLength(1);
    });
    test("Should render loading button component", () => {
        const layout = shallow(<MainLayout />);
        expect(layout.find(LoadButton)).toHaveLength(1);
    });
    test("Should render exchange table component", () => {
        const layout = shallow(<MainLayout />);
        expect(layout.find(ExchangeTable)).toHaveLength(1);
    });
});
