const goodGetExchangeData = () => {
    return Promise.resolve({});
};

const badGetExchangeData = () => {
    return Promise.reject({});
};

const ApiServiceMock = {
    getExchangeData: goodGetExchangeData,
};
jest.mock("../../services/api", () => ({
    ApiService: ApiServiceMock,
}));

import { NotificationKind, NotificationsAction } from "../Notifications/Notifications.store";
import { loadExchangeData } from "./LoadButton.store";

describe("Load Button store", () => {
    describe("loadExchangeData", () => {
        const dispatch = jest.fn();

        beforeEach(() => {
            ApiServiceMock.getExchangeData = goodGetExchangeData;
            dispatch.mockClear();
        });

        test("Dispatches show notification action", () => {
            loadExchangeData()(dispatch);
            expect(dispatch).toBeCalledWith({
                kind: NotificationKind.Notify,
                text: "Loading data from server",
                type: NotificationsAction.Show,
            });
        });

        test("Dispatches hide notification action", (done) => {
            loadExchangeData()(dispatch).then(() => {
                expect(dispatch).toBeCalledWith({
                    type: NotificationsAction.Hide,
                });
                done();
            });
        });

        test("Dispatches error notification action", (done) => {
            ApiServiceMock.getExchangeData = badGetExchangeData;
            loadExchangeData()(dispatch).then(() => {
                expect(dispatch).toBeCalledWith({
                    kind: NotificationKind.Issue,
                    text: "There was an error loading data!",
                    type: NotificationsAction.Show,
                });
                done();
            });
        });
    });
});
