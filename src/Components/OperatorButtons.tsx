import React, { Component } from 'react'
import OperatorButton from './OperatorButton'
import '../Styles/OperatorButtons.css'

interface Props {
    cb: Function
    currNumIn: number;
    isNegativeIn: boolean;
    formulaNumsIn: Array<number>;
    formulaOpsIn: Array<string>;
    currStateIn: number;
    numDecimalPointsIn: number;
    resultIn: number;
}
interface State {
    signs: Array<string>;
}

export default class OperatorButtons extends Component<Props, State> {
    /* *************** CONSTRUCTOR *************** */
    constructor(props: Props) {
        super(props);
        this.state = {
            signs: ["+", "-", "*", "/"]
        };
    }
    /* ********************************************** */

    /* *************** OTHER FUNCTIONS *************** */

    sendData = (
        newCurrNum: number,
        newIsNegative: boolean,
        newFormulaNums: Array<number>,
        newFormulaOps: Array<string>,
        newCurrState: number,
        newNumDecimalPoints: number,
        newResult: number
    ) => {
        this.props.cb(
            newCurrNum,
            newIsNegative,
            newFormulaNums,
            newFormulaOps,
            newCurrState,
            newNumDecimalPoints,
            newResult
        );
    }

    /* ********************************************** */

    /* *************** RENDER FUNCTION *************** */
    render() {
        var buttons = this.state.signs.map(sign => (
            <OperatorButton
                signIn={sign}
                cb={this.sendData}
                key={sign.toString()}
                currNumIn={this.props.currNumIn}
                isNegativeIn={this.props.isNegativeIn}
                formulaNumsIn={this.props.formulaNumsIn}
                formulaOpsIn={this.props.formulaOpsIn}
                currStateIn={this.props.currStateIn}
                numDecimalPointsIn={this.props.numDecimalPointsIn}
                resultIn={this.props.resultIn}
            />
        ));

        return (
            <div className="grid-container2">
                <div className="grid-item">{buttons[0]}</div>
                <div className="grid-item">{buttons[1]}</div>
                <div className="grid-item">{buttons[2]}</div>
                <div className="grid-item">{buttons[3]}</div>
            </div>
        )
    }
    /* ********************************************** */
}
