import React, { Component } from "react";
import NumericButtons from "./Components/NumericButtons"
import OperatorButtons from "./Components/OperatorButtons"
import DecimalButton from "./Components/DecimalButton"
import SignChangeButton from "./Components/SignChangeButton";
import Screen from "./Components/Screen"

interface Props { }
interface State {
  /**
   * LOCAL VARIABLES:
   * formulaNums - A list of all the numbers in the formula
   * formulaOps - A list of all the operators in the formula
   * 
   * currNum - The current number on the calculator screen
   * currState - The current state of the FSM that the calculator is in
   */

  formulaNums: Array<Number>;
  formulaOps: Array<String>;

  currNum: number;
  currState: number;
  isNegative: boolean;
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
      isNegative: false
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
  pressNumericButton = (newCurrNum: number, newCurrState: number) => {
    this.setState({
      currNum: newCurrNum,
      currState: newCurrState
    })
  };

  pressDecimalButton = () => {
    this.setState({
      currState: 4
    })
  }

  pressSignChangeButton = () => {
    if (this.state.currNum !== 0) {
      this.setState({
        isNegative: !this.state.isNegative
      })
    }
  }

  pressOperatorButton = (childData: String) => {
    //TODO
  }

  /* ********************************************** */

  /* *************** RENDER FUNCTION *************** */
  render() {
    return (
      <div>
        <Screen currNumIn={this.state.currNum} isNegativeIn={this.state.isNegative} />
        <NumericButtons
          cb={this.pressNumericButton}
          currNumIn={this.state.currNum}
          currStateIn={this.state.currState}
        />
        <OperatorButtons cb={this.pressOperatorButton} />
        <DecimalButton cb={this.pressDecimalButton} />
        <SignChangeButton cb={this.pressSignChangeButton} />
      </div>
    );
  }
  /* ********************************************** */
}
