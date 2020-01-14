import React, { Component } from "react";
import NumericButton from "./NumericButton";
import "../Styles/NumericButtons.css"

/**
 * <NumericButtons/> is a component that displays <NumericButton/> components from 9-10. 
 */

interface Props {
  cb: Function
  currNumIn: number
  currStateIn: number
  numDecimalPoinsIn: number;
}
interface State {
  numbers: Array<number>;
}

export default class NumericButtons extends Component<Props, State> {
  /* *************** CONSTRUCTOR *************** */
  constructor(props: Props) {
    super(props);
    this.state = {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  }
  /* ********************************************** */

  /* *************** OTHER FUNCTIONS *************** */

  sendData = (newCurrNum: number, newCurrState: number, newNumDecimalPoints: number) => {
    this.props.cb(newCurrNum, newCurrState, newNumDecimalPoints);
  }

  /* ********************************************** */

  /* *************** RENDER FUNCTION *************** */
  render() {
    var buttons = this.state.numbers.map(number => (
      <NumericButton
        valueIn={number}
        cb={this.sendData}
        key={number.toString()}
        currNumIn={this.props.currNumIn}
        currStateIn={this.props.currStateIn}
        numDecimalPointsIn={this.props.numDecimalPoinsIn}
      />
    ));

    return (
      <div className="grid-container">
        <div>{buttons[7]}</div>
        <div>{buttons[8]}</div>
        <div>{buttons[9]}</div>
        <div>{buttons[4]}</div>
        <div>{buttons[5]}</div>
        <div>{buttons[6]}</div>
        <div>{buttons[1]}</div>
        <div>{buttons[2]}</div>
        <div>{buttons[3]}</div>
        <div>{/*NOTHING*/}</div>
        <div>{buttons[0]}</div>
        <div>{/*NOTHING*/}</div>
      </div>
    );
  }
  /* ********************************************** */
}
