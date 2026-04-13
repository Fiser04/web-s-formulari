import React from "react";

class UpdateExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component has updated.");
    // You can perform any actions based on the update here
    if (prevState.count !== this.state.count) {
      console.log(
        `Count has changed from ${prevState.count} to ${this.state.count}`,
      );
    }
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <h2>Update Example</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment Count</button>
      </div>
    );
  }
}

export default UpdateExample;
