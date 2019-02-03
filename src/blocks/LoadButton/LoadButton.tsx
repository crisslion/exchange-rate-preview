import * as React from "react";
import { ThunkDispatch } from "redux-thunk";

import { connect } from "react-redux";
import { Action } from "redux";

import { State } from "../../store/state";
import { loadExchangeData } from "./LoadButton.store";

import "./LoadButton.css";

export interface LoadButtonDispatchProps {
    loadExchangeData: () => Promise<void>;
}

export class LoadButtonBare extends React.PureComponent<LoadButtonDispatchProps> {
    public render() {
        return (
            <button
                type="button"
                className="load-button"
                onClick={this.props.loadExchangeData}
            >
                Load exchange data
            </button>
        );
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<State, void, Action<any>>) => ({
    loadExchangeData: () => dispatch(loadExchangeData()),
});

export const LoadButton = connect(
    null,
    mapDispatchToProps,
)(LoadButtonBare);
