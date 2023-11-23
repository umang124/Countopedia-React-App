import React from "react";

class Counter extends React.Component {
  handleAttack() {
    alert("Attack clicked");
  }

  handleDefend() {
    alert("Defend Clicked");
  }

  render() {
    return (
      <div className="row text-white">
        <h1>Counter: </h1>
        <button onClick={this.handleAttack} style={{ width: "200px" }}>
          +1
        </button>
        <button onClick={this.handleDefend} style={{ width: "200px" }}>
          -1
        </button>
      </div>
    );
  }
}
export default Counter;
