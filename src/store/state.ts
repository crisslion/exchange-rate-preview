import { ExchangeTableStoreData } from "../blocks/ExchangeTable/ExchangeTable.store";
import { NotificationsStoreData } from "../blocks/Notifications/Notifications.store";

export interface State {
    exchangeTable: ExchangeTableStoreData;
    notifications: NotificationsStoreData;
}
