import React from "react";

class MountExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Component is mounting...",
    };
  }

  componentDidMount() {
    console.log("Component has mounted.");
    // You can perform any setup or data fetching here
    setTimeout(() => {
      this.setState({ message: "Component has been updated after mounting!" });
    }, 2000);
  }

  render() {
    return (
      <div>
        <h2>Mount Example</h2>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default MountExample;
