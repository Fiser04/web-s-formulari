import React from "react";

class simpleInput extends React.Component {
  render() {
    return (
      <form>
        <label>Name:</label>
        <input type="text" id="name" name="name" />
        <input
          type="submit"
          value="Submit"
          handleInput={this.props.handleInput}
        />
      </form>
    );
  }
}

export default simpleInput;
