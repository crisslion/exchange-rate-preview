import * as React from "react";

import "./CurrencyBlock.css";

export interface CurrencyBlockProps {
    name: string;
    value: number;
}

export class CurrencyBlock extends React.PureComponent<CurrencyBlockProps> {
    public render() {
        const { name, value } = this.props;
        return (
            <div className="currency-block">
                <div className="currency-block__container">
                    <p className="currency-block__name">{name}</p>
                    <p className="currency-block__value">{value}</p>
                </div>
            </div>
        );
    }
}
