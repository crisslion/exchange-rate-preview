import {
    hideNotification,
    initData,
    NotificationKind,
    NotificationsAction,
    notificationsReducer,
    showNotification,
} from "./Notifications.store";

describe("Notifications", () => {
    describe("showNotification", () => {
        test("has right type and props", () => {
            const action = showNotification(NotificationKind.Notify, "test");
            expect(action.type).toBe(NotificationsAction.Show);
            expect(action.kind).toBe(NotificationKind.Notify);
            expect(action.text).toBe("test");
        });
    });

    describe("hideNotification", () => {
        test("has right type", () => {
            const action = hideNotification();
            expect(action.type).toBe(NotificationsAction.Hide);
        });
    });

    describe("notificationReducer", () => {
        test("handles Show Action correctly", () => {
            const state = notificationsReducer(initData, showNotification(
                NotificationKind.Issue,
                "test",
            ));
            expect(state).toEqual({
                isShown: true,
                kind: NotificationKind.Issue,
                text: "test",
            });
        });
        test("handles Hide Action correctly", () => {
            const state = notificationsReducer(initData, hideNotification());
            expect(state).toEqual({
                isShown: false,
                kind: NotificationKind.Notify,
                text: "",
            });
        });
        test("handles Default Action correctly", () => {
            const state = notificationsReducer(initData, { type: "some" } as any);
            expect(state).toEqual(initData);
        });
    });
});
