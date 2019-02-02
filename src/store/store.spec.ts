import { Action, Store, Dispatch } from "redux";
import { createReduxStore, Reducers } from "./store";

type TestAction = Action<"TEST">;

describe("Store", () => {
    describe("createReduxStore", () => {
        const action: TestAction = {
            type: "TEST",
        };
        const defaultState = 1;
        const reducers: Reducers = {
            foo: (store = defaultState, action: TestAction) => action.type === "TEST" ? store + 1 : store,
        };
        let store: Store;

        beforeEach(() => {
            store = createReduxStore<typeof defaultState, TestAction>(reducers);
        });

        test("Returns a store", () => {

            expect(store.dispatch).toBeInstanceOf(Function);
            expect(store.subscribe).toBeInstanceOf(Function);
        });

        test("Have thunk ability", (done) => {
            const store = createReduxStore(reducers);

            store.subscribe(() => {
                if (store.getState().foo >= 2) {
                    expect(store.getState().foo).toBe(2);
                    done();
                }
            });

            store.dispatch((dispatch: Dispatch<TestAction>) => {
                dispatch({
                    type: "TEST",
                });
            });
        });
    });
});
