import { Dispatch } from "redux";

import { ApiService, ExchangeData } from "../../services/api";
import { updateExchangeData } from "../ExchangeTable/ExchangeTable.store";
import {
    showNotification,
    NotificationKind,
    hideNotification,
} from "../Notifications/Notifications.store";

export const loadExchangeData = () => (dispatch: Dispatch) => {
    dispatch(showNotification(NotificationKind.Notify, "Loading data from server"));

    return ApiService.getExchangeData()
        .then((data: ExchangeData) => {
            dispatch(
                updateExchangeData(data),
            );
            dispatch(hideNotification());
        }).catch(() => {
            dispatch(showNotification(NotificationKind.Issue, "There was an error loading data!" ));
        });;
};
