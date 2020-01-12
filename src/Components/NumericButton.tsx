import React, { Component } from "react";

/**
 * <NumericButton/> is a button component that simulates a numerical button
 * on a handheld calculator
 */

interface Props {
  key: String;
  valueIn: number;
  cb: Function;
  currNumIn: number;
  currStateIn: number;
  numDecimalPointsIn: number;
}
interface State {
  value: number;
  currNum: number;
  currState: number;
  numDecimalPoints: number;
}

export default class NumericButton extends Component<Props, State> {
  /* *************** CONSTRUCTOR *************** */

  constructor(props: Props) {
    super(props);
    this.state = {
      value: this.props.valueIn,
      currNum: this.props.currNumIn,
      currState: this.props.currStateIn,
      numDecimalPoints: 1
    };
  }
  /* ********************************************** */

  /* *************** OTHER FUNCTIONS *************** */
  /**
   * Put this.state.currNum in sync with this.props.currNum
   */
  componentDidUpdate = () => {
    if (this.state.currNum !== this.props.currNumIn) {
      this.setState({
        currNum: this.props.currNumIn,
      })
    }

    if (this.state.currState !== this.props.currStateIn) {
      this.setState({
        currState: this.props.currStateIn
      })
    }

    if (this.state.numDecimalPoints !== this.props.numDecimalPointsIn) {
      this.setState({
        numDecimalPoints: this.props.numDecimalPointsIn
      })
    }
  }

  sendData = () => {
    this.props.cb(this.state.currNum, this.state.currState, this.state.numDecimalPoints)
  }

  pressButton = () => {
    if ((this.state.currState === 1) || (this.state.currState === 3)) {
      this.pressButton_state1_state3()
    } else if (this.state.currState === 2) {
      this.pressButton_state2()
    } else if (this.state.currState === 4) {
      this.pressButton_state4()
    }
  }

  pressButton_state1_state3 = () => {
    this.setState({
      currNum: this.state.value,
      currState: 2
    }, this.sendData);
  }

  pressButton_state2 = () => {
    this.setState({
      currNum: this.state.currNum * 10 + this.state.value
    }, this.sendData);
  }

  pressButton_state4 = () => {
    this.setState({
      currNum: this.state.currNum + this.state.value / (Math.pow(10, this.state.numDecimalPoints)),
      numDecimalPoints: this.state.numDecimalPoints + 1
    }, this.sendData)
  }

  /* ********************************************** */

  /* *************** RENDER FUNCTION *************** */
  render() {
    return (
      <div>
        <button onClick={() => this.pressButton()}>{this.state.value}</button>
      </div>
    );
  }
  /* ********************************************** */
}
