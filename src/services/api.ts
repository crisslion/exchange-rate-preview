import { fetch } from "../global";

export interface ExchangeDataRates {
    [key: string]: number;
}

export interface ExchangeData {
    base: string;
    date: string;
    rates: ExchangeDataRates;
}

export class ApiService {
    public static getExchangeData(): Promise<ExchangeData> {
        return fetch("https://api.exchangeratesapi.io/latest")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject({
                        status: response.status,
                        statusText: response.statusText,
                    });
                }
            });
    }
}
