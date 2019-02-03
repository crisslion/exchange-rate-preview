import { shallow } from "enzyme";
import * as React from "react";

import { NotificationsBare } from "./Notifications";
import { NotificationKind } from "./Notifications.store";

describe("Notifications", () => {
    test("show provided message", () => {
        const notifications = shallow(
            <NotificationsBare
                kind={NotificationKind.Notify}
                text={"test"}
                isShown={true}
                hideNotification={jest.fn()}
            />,
        );

        expect(notifications.text()).toBe("test");
    });

    test("show only if isShown is true", () => {
        const notifications = shallow(
            <NotificationsBare
                kind={NotificationKind.Notify}
                text={"test"}
                isShown={false}
                hideNotification={jest.fn()}
            />,
        );

        expect(notifications.text()).not.toBe("test");
    });

    test("show notification with Notify style", () => {
        const notifications = shallow(
            <NotificationsBare
                kind={NotificationKind.Notify}
                text={"test"}
                isShown={true}
                hideNotification={jest.fn()}
            />,
        );
        expect(notifications.find(".notification--notify")).toHaveLength(1);
    });

    test("show notification with Issue style", () => {
        const notifications = shallow(
            <NotificationsBare
                kind={NotificationKind.Issue}
                text={"test"}
                isShown={true}
                hideNotification={jest.fn()}
            />,
        );
        expect(notifications.find(".notification--issue")).toHaveLength(1);
    });
});
