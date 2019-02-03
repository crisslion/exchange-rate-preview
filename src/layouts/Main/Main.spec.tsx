import { shallow } from "enzyme";
import * as React from "react";

import { ExchangeTable } from "../../blocks/ExchangeTable/ExchangeTable";
import { LoadButton } from "../../blocks/LoadButton/LoadButton";
import { Notifications } from "../../blocks/Notifications/Notifications";
import { MainLayout } from "./Main";

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
