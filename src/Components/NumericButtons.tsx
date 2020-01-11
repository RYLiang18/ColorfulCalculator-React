import React, { Component } from "react";
import NumericButton from "./NumericButton";

/**
 * <NumericButtons/> is a component that displays <NumericButton/> components from 9-10. 
 */

interface Props {
  cb: Function
  currNumIn: number
  currStateIn: number
}
interface State {
  numbers: Array<number>;
  currNum: number
  currState: number
  numDecimalPoints: number
}

export default class NumericButtons extends Component<Props, State> {
  /* *************** CONSTRUCTOR *************** */
  constructor(props: Props) {
    super(props);
    this.state = {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      currNum: this.props.currNumIn,
      currState: this.props.currStateIn,
      numDecimalPoints: 1
    };
  }
  /* ********************************************** */

  /* *************** OTHER FUNCTIONS *************** */

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
  }

  sendData = (newCurrNum: number, newCurrState: number, newNumDecimalPoints: number) => {
    this.setState({
      currNum: newCurrNum,
      currState: newCurrState,
      numDecimalPoints: newNumDecimalPoints
    })
    this.props.cb(newCurrNum, newCurrState);
  }

  /* ********************************************** */

  /* *************** RENDER FUNCTION *************** */
  render() {
    var buttons = this.state.numbers.map(number => (
      <NumericButton
        valueIn={number}
        cb={this.sendData}
        key={number.toString()}
        currNumIn={this.state.currNum}
        currStateIn={this.state.currState}
        numDecimalPointsIn={this.state.numDecimalPoints}
      />
    ));

    return (
      <div>
        {buttons}
      </div>
    );
  }
  /* ********************************************** */
}
