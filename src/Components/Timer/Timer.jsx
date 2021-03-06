import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { second: 0, text: "" };
    this.secondUp = this.secondUp.bind(this);
    this.secondDown = this.secondDown.bind(this);
    this.reStart = this.reStart.bind(this);
    // this.showInupt = this.showInupt.bind(this);
  }

  secondUp() {
    const nextSecond = this.state.second + 1;
    this.setState({ second: nextSecond });
  }

  secondDown() {
    const downSecond = this.state.second - 1;
    this.setState({ second: downSecond });
  }

  reStart() {
    this.setState({ second: 0 });
  }

  //   showInupt() {
  //     this.setState({ text: this.state.text  });
  //   }

  render() {
    return (
      <div>
        <h1>{this.state.second}</h1>
        <input
          type="text"
          value={this.state.text}
          onChange={(event) => {
            this.setState({ text: event.target.value });
            console.log(event.target.value);
          }}
        />
        <button onClick={this.secondUp}>Up</button>
        <button onClick={this.secondDown}>Down</button>
        <button onClick={this.reStart}>restart</button>
      </div>
    );
  }
}

export default Timer;
