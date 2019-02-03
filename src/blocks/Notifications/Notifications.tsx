import * as React from "react";
import { connect } from "react-redux";

import "./Notifications.css";
import { hideNotification, NotificationKind } from "./Notifications.store";

import { State } from "../../store/state";

export interface NotificationsStateProps {
    kind: NotificationKind;
    isShown: boolean;
    text: string;
}

export interface NotificationsDispatchProps {
    hideNotification: typeof hideNotification;
}

export type NotificationsProps = NotificationsStateProps & NotificationsDispatchProps;

export class NotificationsBare extends React.PureComponent<NotificationsProps> {
    public render() {
        const { kind, isShown, text } = this.props;
        const kindClass = kind === NotificationKind.Notify
            ? "notification--notify"
            : "notification--issue";

        return (
            <div className="notifications">
                {isShown ? <p className={`notification ${kindClass}`}>{text}</p> : null}
            </div>
        );
    }
}

const mapStateToProps = (state: State) => ({
    isShown: state.notifications.isShown,
    kind: state.notifications.kind,
    text: state.notifications.text,
});

const mapDispatchToProps = {
    hideNotification,
};

export const Notifications = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NotificationsBare);
