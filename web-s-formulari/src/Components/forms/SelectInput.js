import React from "react";

class simpleInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  render() {
    return (
      <div>
        <form>
          <label>Name:</label>
          <select id="name" onChange={this.props.handleInput}>
            <option value="">Select an option</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </form>
      </div>
    );
  }
}

export default simpleInput;
