import * as React from "react";
import { connect } from "react-redux";

import { ExchangeTableStoreData } from "./ExchangeTable.store";
import { CurrencyBlock } from "../../components/CurrencyBlock/CurrencyBlock";
import { State } from "../../store/state";

import "./ExchangeTable.css";

export interface ExchangeTableStateProps {
    data: ExchangeTableStoreData;
}

export class ExchangeTableBare extends React.PureComponent<ExchangeTableStateProps> {
    private get currencyBlocks() {
        const { rates } = this.props.data;
        const blocks = [];

        for(let rate in rates) {
            blocks.push(
                <div key={rate} className="exchange-table__data-block">
                    <CurrencyBlock name={rate} value={rates[rate]} />
                </div>
            );
        }
        return blocks;
    }

    public render() {
        const { base, date } = this.props.data;
        return (
            <div className="exchange-table">
                <div className="exchange-table__header">
                    <div className="exchange-table__base">Rate compared to: {base}</div>
                    <div className="exchange-table__date">{date}</div>
                </div>
                <div className="exchange-table__data">
                    {this.currencyBlocks}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: State) => ({
    data: state.exchangeTable,
});

export const ExchangeTable = connect(
    mapStateToProps,
    null,
)(ExchangeTableBare);
