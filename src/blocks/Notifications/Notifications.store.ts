import { Action } from "redux";

export enum NotificationKind {
    Notify,
    Issue,
}

export enum NotificationsAction {
    Show = "Notifications/Show",
    Hide = "Notifications/Hide",
}

export interface NotificationsActionShow extends Action<NotificationsAction.Show> {
    kind: NotificationKind;
    text: string;
}

export function showNotification(kind: NotificationKind, text: string): NotificationsActionShow {
    return {
        type: NotificationsAction.Show,
        kind,
        text,
    };
}

export type NotificationsActionHide = Action<NotificationsAction.Hide>;

export function hideNotification(): NotificationsActionHide {
    return {
        type: NotificationsAction.Hide,
    };
}

export interface NotificationsStoreData {
    readonly isShown: boolean;
    readonly kind: NotificationKind;
    readonly text: string;
};

export const initData: NotificationsStoreData = {
    isShown: false,
    kind: NotificationKind.Notify,
    text: "",
};

export type NotificationsActions = NotificationsActionShow | NotificationsActionHide;

export function notificationsReducer(state = initData, action: NotificationsActions) {
    switch(action.type) {
        case NotificationsAction.Show:
            return {
                kind: action.kind,
                text: action.text,
                isShown: true,
            };
        case NotificationsAction.Hide:
            return {
                kind: NotificationKind.Notify,
                text: "",
                isShown: false,
            };
        default:
            return state;
    }
}
 
