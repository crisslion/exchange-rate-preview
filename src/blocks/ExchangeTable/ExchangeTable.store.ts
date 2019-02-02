import { Action } from "redux";

import { ExchangeData } from "../../services/api";

export enum ExchangeTableAction {
    Update = "ExchangeTable/Update",
}

export interface ExchangeTableActionUpdate extends Action<ExchangeTableAction.Update> {
    data: ExchangeData;
}

export function updateExchangeData(data: ExchangeData): ExchangeTableActionUpdate {
    return {
        type: ExchangeTableAction.Update,
        data,
    };
}

export type ExchangeTableStoreData = Readonly<ExchangeData>;

export const initData: ExchangeTableStoreData = {
    base: "",
    date: "",
    rates: {},
};

export type ExchangeTableActions = ExchangeTableActionUpdate;

export function exchangeTableReducer(state = initData, action: ExchangeTableActions) {
    switch(action.type) {
        case ExchangeTableAction.Update:
            return action.data;
        default:
            return state;
    }
}
