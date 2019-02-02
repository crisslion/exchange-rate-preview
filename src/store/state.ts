import { NotificationsStoreData } from "../blocks/Notifications/Notifications.store";
import { ExchangeTableStoreData } from "../blocks/ExchangeTable/ExchangeTable.store";

export interface State {
    exchangeTable: ExchangeTableStoreData;
    notifications: NotificationsStoreData;
}
