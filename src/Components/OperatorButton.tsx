import React, { Component } from 'react'
import { Button } from 'reactstrap'
import "../Styles/Button.css"

/**
 * <OperatorButton/> is a button component that simulates an operator button
 * on a handheld calculator
 */

interface Props {
    key: string;
    signIn: string;
    cb: Function;
    currNumIn: number;
    isNegativeIn: boolean;
    formulaNumsIn: Array<number>;
    formulaOpsIn: Array<string>;
    currStateIn: number;
    numDecimalPointsIn: number;
    resultIn: number;
}
interface State {
    sign: string;
    currNum: number;
    isNegative: boolean;
    formulaNums: Array<number>;
    formulaOps: Array<string>;
    currState: number
    numDecimalPoints: number;
    result: number;
}

export default class OperatorButton extends Component<Props, State> {
    /* *************** CONSTRUCTOR *************** */
    constructor(props: Props) {
        super(props);
        this.state = {
            sign: this.props.signIn,
            currNum: this.props.currNumIn,
            isNegative: this.props.isNegativeIn,
            formulaNums: this.props.formulaNumsIn,
            formulaOps: this.props.formulaOpsIn,
            currState: this.props.currStateIn,
            numDecimalPoints: this.props.numDecimalPointsIn,
            result: this.props.resultIn
        };
    }
    /* ********************************************** */

    /* *************** OTHER FUNCTIONS *************** */

    componentDidUpdate = () => {
        if (this.state.currNum !== this.props.currNumIn) {
            this.setState({ currNum: this.props.currNumIn });
        }

        if (this.state.isNegative !== this.props.isNegativeIn) {
            this.setState({ isNegative: this.props.isNegativeIn });
        }

        if (this.state.formulaNums !== this.props.formulaNumsIn) {
            this.setState({ formulaNums: this.props.formulaNumsIn });
        }

        if (this.state.formulaOps !== this.props.formulaOpsIn) {
            this.setState({ formulaOps: this.props.formulaOpsIn });
        }

        if (this.state.currState !== this.props.currStateIn) {
            this.setState({ currState: this.props.currStateIn });
        }

        if (this.state.numDecimalPoints !== this.props.numDecimalPointsIn) {
            this.setState({ numDecimalPoints: this.props.numDecimalPointsIn });
        }

        if (this.state.result !== this.props.resultIn) {
            this.setState({ result: this.props.resultIn });
        }
    }

    sendData = () => {
        this.props.cb(
            this.state.currNum,
            this.state.isNegative,
            this.state.formulaNums,
            this.state.formulaOps,
            this.state.currState,
            this.state.numDecimalPoints,
            this.state.result
        );
    }

    pressButton = () => {
        if ((this.state.currState === 2) || (this.state.currState === 4)) {
            this.pressButton_state2_state4();
        } else {
            this.pressButton_state3();
        }
    }

    pressButton_state2_state4 = () => {
        this.setState({
            numDecimalPoints: 1
        })

        if (this.state.isNegative) {
            this.setState({
                currNum: this.state.currNum * -1,
                isNegative: !this.state.isNegative
            }, this.sendData)
        }

        this.saveNumbersAndReset();
        this.addOperator();
        this.setResult();

        this.setState({
            currState: 1
        }, this.sendData);
    }

    pressButton_state3 = () => {
        this.saveResultAndReset();
        this.addOperator();

        this.setState({
            currState: 1
        }, this.sendData);
    }

    saveNumbersAndReset = () => {
        var newFormulaNums: Array<number> = this.state.formulaNums;
        newFormulaNums.push(this.state.currNum);

        this.setState({
            formulaNums: newFormulaNums,
            currNum: 0
        }, this.sendData);
    }

    addOperator = () => {
        var newFormulaOps: Array<string> = this.state.formulaOps;
        newFormulaOps.push(this.state.sign);

        this.setState({
            formulaOps: newFormulaOps
        }, this.sendData);
    }

    setResult = () => {
        var temp: number = this.state.formulaNums[0];
        for (var i: number = 1; i < this.state.formulaNums.length; i++) {
            if (this.state.formulaOps[i - 1] === "+") {
                temp += this.state.formulaNums[i];
            } else if (this.state.formulaOps[i - 1] === "-") {
                temp -= this.state.formulaNums[i];
            } else if (this.state.formulaOps[i - 1] === "*") {
                temp *= this.state.formulaNums[i];
            } else if (this.state.formulaOps[i - 1] === "/") {
                temp /= this.state.formulaNums[i];
            }
        }

        this.setState({
            result: temp
        }, this.sendData)
    }

    saveResultAndReset = () => {
        var newFormulaNums: Array<number> = this.state.formulaNums;
        newFormulaNums.push(this.state.result);

        this.setState({
            formulaNums: newFormulaNums,
            currNum: 0
        }, this.sendData);
    }

    /* ********************************************** */

    /* *************** RENDER FUNCTION *************** */
    render() {
        return (
            <div className="Button">
                <Button
                    onClick={() => this.pressButton()}
                    color="info"
                    block
                >
                    {this.state.sign}
                </Button>
            </div>
        )
    }
    /* ********************************************** */
}