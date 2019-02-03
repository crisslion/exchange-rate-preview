import {
    updateExchangeData,
    ExchangeTableAction,
    exchangeTableReducer,
    initData,
} from "./ExchangeTable.store";

describe("Exchange table", () => {
    const data = {
        base: "test",
        date: "testDate",
        rates: {},
    };

    describe("updateExchangeData Action", () => {
        test("Has correct type", () => {
            const action = updateExchangeData(data);
            expect(action.type).toBe(ExchangeTableAction.Update);
        });

        test("Has data passed in", () => {
            const action = updateExchangeData(data);
            expect(action.data).toBe(data);
        });
    });

    describe("exchangeTableReducer", () => {
        test("Handles update action correcty", () => {
            const state = exchangeTableReducer(initData, updateExchangeData(data));

            expect(state).toBe(data);
        });
        test("Handles default action", () => {
            const state = exchangeTableReducer(initData, { type: "Something" } as any);
            expect(state).toBe(initData);
        });
    });
});
