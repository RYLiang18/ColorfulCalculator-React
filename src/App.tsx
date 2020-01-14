import React, { Component } from "react";
import NumericButtons from "./Components/NumericButtons"
import OperatorButtons from "./Components/OperatorButtons"
import DecimalButton from "./Components/DecimalButton"
import SignChangeButton from "./Components/SignChangeButton";
import Screen from "./Components/Screen"
import EqualsButton from "./Components/EqualsButton"
import ClearButton from "./Components/ClearButton"
import ClearEntryButton from "./Components/ClearEntryButton";
import Title from "./Components/Title";
import './App.css'

interface Props { }
interface State {
  /**
   * LOCAL VARIABLES:
   * formulaNums - A list of all the numbers in the formula
   * formulaOps - A list of all the operators in the formula
   * currNum - The current number on the calculator screen
   * currState - The current state of the FSM that the calculator is in
   */

  formulaNums: Array<number>;
  formulaOps: Array<string>;
  currNum: number;
  currState: number;
  isNegative: boolean;
  numDecimalPoints: number;
  result: number;
}

export default class App extends Component<Props, State> {
  /* *************** CONSTRUCTOR *************** */
  constructor(props: Props) {
    super(props);
    this.state = {
      formulaNums: [],
      formulaOps: [],

      currNum: 0,
      currState: 1,
      isNegative: false,
      numDecimalPoints: 1,
      result: 0
    };
    console.log("Initial currNum: " + this.state.currNum);
  }
  /* ********************************************** */

  /* *************** OTHER FUNCTIONS *************** */

  /**
   * componentDidUpdate() runs every time the state is changed
   */
  componentDidUpdate() {
    console.log(this.state.currNum)
  }

  /**
   * pressNumericButton() is called when a numeric button is pressed.
   * 
   * @param
   * childData - the new currNum that is produced after any <NumericButton/> is 
   * pressed. This is sent to <App/> through a series of callback functions.
   */
  pressNumericButton = (
    newCurrNum: number,
    newCurrState: number,
    newNumDecimalPoints: number
  ) => {
    this.setState({
      currNum: newCurrNum,
      currState: newCurrState,
      numDecimalPoints: newNumDecimalPoints
    })
  };

  pressDecimalButton = () => {
    this.setState({
      currState: 4
    })
  }

  pressSignChangeButton = () => {
    if (this.state.currState !== 3) {
      this.setState({
        isNegative: !this.state.isNegative
      })
    } else {
      this.setState({ result: this.state.result * -1 });
    }
  }

  pressOperatorButton = (
    newCurrNum: number,
    newIsNegative: boolean,
    newFormulaNums: Array<number>,
    newFormulaOps: Array<string>,
    newCurrState: number,
    newNumDecimalPoints: number,
    newResult: number
  ) => {
    if (this.state.currNum !== newCurrNum) {
      this.setState({ currNum: newCurrNum });
    }

    if (this.state.isNegative !== newIsNegative) {
      this.setState({ isNegative: newIsNegative });
    }

    if (this.state.formulaNums !== newFormulaNums) {
      this.setState({ formulaNums: newFormulaNums });
    }

    if (this.state.formulaOps !== newFormulaOps) {
      this.setState({ formulaOps: newFormulaOps });
    }

    if (this.state.currState !== newCurrState) {
      this.setState({ currState: newCurrState });
    }

    if (this.state.numDecimalPoints !== newNumDecimalPoints) {
      this.setState({ numDecimalPoints: newNumDecimalPoints });
    }

    if (this.state.result !== newResult) {
      this.setState({ result: newResult });
    }
  }

  pressEqualsButton = (
    newIsNegative: boolean,
    newCurrNum: number,
    newFormulaNums: Array<number>,
    newFormulaOps: Array<string>,
    newCurrState: number,
    newResult: number
  ) => {
    /**
     * We surround everything with if statements to prevent any unwanted
     * state changes
     */
    if (this.state.isNegative !== newIsNegative) {
      this.setState({ isNegative: newIsNegative });
    }

    if (this.state.currNum !== newCurrNum) {
      this.setState({ currNum: newCurrNum });
    }

    if (this.state.formulaNums !== newFormulaNums) {
      this.setState({ formulaNums: newFormulaNums });
    }

    if (this.state.formulaOps !== newFormulaOps) {
      this.setState({ formulaOps: newFormulaOps });
    }

    if (this.state.currState !== newCurrState) {
      this.setState({ currState: newCurrState });
    }

    if (this.state.result !== newResult) {
      this.setState({ result: newResult });
    }
  }

  pressClearButton = () => {
    this.setState({
      currNum: 0,
      result: 0,
      numDecimalPoints: 1,
      isNegative: false,
      formulaNums: [],
      formulaOps: [],
      currState: 1
    })
  }

  pressClearEntryButton = () => {
    if ((this.state.currState === 2) || (this.state.currState === 4)) {
      this.setState({
        currNum: 0,
        isNegative: false,
        currState: 1,
        numDecimalPoints: 1
      })
    }
  }

  /* ********************************************** */

  /* *************** RENDER FUNCTION *************** */
  render() {
    return (
      <div>
        <Title />
        <div className='Calculator'>
          <Screen
            currNumIn={this.state.currNum}
            isNegativeIn={this.state.isNegative}
            currStateIn={this.state.currState}
            resultIn={this.state.result}
          />
          <div className='CandCEButtons'>
            <ClearEntryButton cb={this.pressClearEntryButton} />
            <ClearButton cb={this.pressClearButton} />
          </div>
          <div className='NumAndOpButtons'>
            <NumericButtons
              cb={this.pressNumericButton}
              currNumIn={this.state.currNum}
              currStateIn={this.state.currState}
              numDecimalPoinsIn={this.state.numDecimalPoints}
            />
            <OperatorButtons
              cb={this.pressOperatorButton}
              currNumIn={this.state.currNum}
              isNegativeIn={this.state.isNegative}
              formulaNumsIn={this.state.formulaNums}
              formulaOpsIn={this.state.formulaOps}
              currStateIn={this.state.currState}
              numDecimalPointsIn={this.state.numDecimalPoints}
              resultIn={this.state.result}
            />
          </div>
          <div className='AccessoryButtons'>
            <SignChangeButton cb={this.pressSignChangeButton} />
            <DecimalButton cb={this.pressDecimalButton} />
            <div />
            <EqualsButton
              cb={this.pressEqualsButton}
              isNegativeIn={this.state.isNegative}
              currNumIn={this.state.currNum}
              formulaNumsIn={this.state.formulaNums}
              formulaOpsIn={this.state.formulaOps}
              currStateIn={this.state.currState}
              resultIn={this.state.result}
            />
          </div>
        </div>
      </div>
    );
  }
  /* ********************************************** */
}
