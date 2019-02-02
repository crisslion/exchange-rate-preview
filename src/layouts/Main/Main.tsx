import * as React from "react";

import { ExchangeTable } from "../../blocks/ExchangeTable/ExchangeTable";
import { LoadButton } from "../../blocks/LoadButton/LoadButton";
import { Notifications } from "../../blocks/Notifications/Notifications";

import "./Main.css";

export class MainLayout extends React.PureComponent<{}> {
    public render() {
        return (
            <div className="main-layout">
                <div className="main-layout__header">
                    <LoadButton />
                    <Notifications />
                </div>
                <div className="main-layout__content">
                    <ExchangeTable />
                </div>
            </div>
        );
    }
}
