import { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixed_number: 0,
  };
  render() {
    const { number, fixed_number } = this.state;
    return (
      <div>
        <h1 className="react2">증가하는 값 : {number}</h1>
        <h2 className="react2">고정된 값 : {fixed_number}</h2>
        <button
          className="react"
          onClick={() => {
            this.setState({ number: number + 1 }, () => {console.log("calling setState"); console.log(this.state)});
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
