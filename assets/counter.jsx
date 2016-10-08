import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.incrementCount = this.incrementCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  incrementCount(){
    this.setState({ count: this.state.count + 1 });
  }

  resetCount() {
    this.setState({ count: 0 });
  }
  
  render(){
    return (
      <div className="my-component">
        <h1>Count: {this.state.count}</h1>
        <button type="button" onClick={this.incrementCount}>Increment</button>
        <button type="button" onClick={this.resetCount}>Reset</button>
      </div>
    );
  }
}

export default Counter;