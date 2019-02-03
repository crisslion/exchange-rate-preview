const fetchMock = {
    json: () => ({ data: "" }),
    ok: true,
};

jest.mock("../global", () => ({
    fetch: () => Promise.resolve(fetchMock),
}));

import {
    ApiService,
    ExchangeData,
    ExchangeDataRates,
} from "./api";

describe("Api service", () => {
    describe("getExchangeData", () => {
        test("Returns a promise", () => {
            const promise = ApiService.getExchangeData();
            expect(promise).toBeInstanceOf(Promise);
        });

        test("Returns data from promise as an object", (done) => {
            ApiService.getExchangeData().then((data) => {
                expect(typeof data).toBe("object");
                done();
            });
        });

        test("Returns reject if there is an issue", (done) => {
            fetchMock.ok = false;
            ApiService.getExchangeData().catch((err) => {
                expect(typeof err).toBe("object");
                done();
                fetchMock.ok = true;
            });
        });
    });
});
