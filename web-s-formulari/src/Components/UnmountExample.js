import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("Timer component has been unmounted.");
  }

  render() {
    return (
      <div>
        <h2>Timer</h2>
        <p>Seconds: {this.state.seconds}</p>
      </div>
    );
  }
}

class UnmountExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTimer: true,
    };
  }

  toggleTimer = () => {
    this.setState((prevState) => ({ showTimer: !prevState.showTimer }));
  };

  render() {
    return (
      <div>
        <h1>Unmount Example</h1>
        <button onClick={this.toggleTimer}>
          {this.state.showTimer ? "Hide Timer" : "Show Timer"}
        </button>
        {this.state.showTimer && <Timer />}
      </div>
    );
  }
}

export default UnmountExample;
