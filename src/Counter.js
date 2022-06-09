import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  render() {
    const { number } = this.state;
    return (
      <div>
        <h1 className='react2'>{number}</h1>
        <button className='react' onClick={() => this.setState({ number: number + 1 })}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;