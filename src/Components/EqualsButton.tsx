import React, { Component } from 'react'

interface Props {
    cb: Function;
    isNegativeIn: boolean;
    currNumIn: number;
    formulaNumsIn: Array<number>;
    formulaOpsIn: Array<string>;
    currStateIn: number;
    resultIn: number;
}
interface State {
    isNegative: boolean;
    currNum: number;
    formulaNums: Array<number>;
    formulaOps: Array<string>;
    currState: number;
    result: number;
}

export default class EqualsButton extends Component<Props, State> {
    /* *************** CONSTRUCTOR *************** */
    constructor(props: Props) {
        super(props);
        this.state = {
            isNegative: this.props.isNegativeIn,
            currNum: this.props.currNumIn,
            formulaNums: this.props.formulaNumsIn,
            formulaOps: this.props.formulaOpsIn,
            currState: this.props.currStateIn,
            result: this.props.resultIn
        };
    }
    /* ********************************************** */

    /* *************** OTHER FUNCTIONS *************** */

    componentDidUpdate = () => {
        if (this.state.isNegative !== this.props.isNegativeIn) {
            this.setState({ isNegative: this.props.isNegativeIn });
        }

        if (this.state.currNum !== this.props.currNumIn) {
            this.setState({ currNum: this.props.currNumIn });
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

        if (this.state.result !== this.props.resultIn) {
            this.setState({ result: this.props.resultIn });
        }
    }

    sendData = () => {
        this.props.cb(
            this.state.isNegative,
            this.state.currNum,
            this.state.formulaNums,
            this.state.formulaOps,
            this.state.currState,
            this.state.result
        );
    }

    pressButton = () => {
        if ((this.state.currState === 2) || (this.state.currState === 4)) {
            if (this.state.isNegative) {
                this.setState({
                    currNum: this.state.currNum * -1,
                    isNegative: false
                }, this.sendData)
            }

            this.saveNumbersAndReset();
            this.setResult();

            /**
             * We won't need to adjust isNegative since if we press "+/-", we'll
             * just multiply result by -1, and the screen will display the change
             * in sign. If we press an operator, it will save the current result, which
             * will already have the correct sign and then move on to state 1. 
             */

            //reset formulaNums and formulaOps
            this.setState({
                formulaNums: [],
                formulaOps: []
            }, this.sendData);
        }
    }

    saveNumbersAndReset = () => {
        var newFormulaNums: Array<number> = this.state.formulaNums;
        newFormulaNums.push(this.state.currNum);

        this.setState({
            formulaNums: newFormulaNums,
            currNum: 0
        }, this.sendData);

        this.setState({
            currState: 3
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

    /* ********************************************** */

    /* *************** RENDER FUNCTION *************** */
    render() {
        return (
            <div>
                <button onClick={this.pressButton}>=</button>
            </div>
        )
    }
    /* ********************************************** */
}
