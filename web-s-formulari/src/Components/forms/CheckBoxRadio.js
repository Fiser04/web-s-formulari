import React from "react";

class CheckBoxRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  render() {
    return (
      <div>
        <form>
          <label>Choose an option:</label>
          <br />
          <input
            type="radio"
            name="option1"
            value="Male"
            onChange={this.props.handlecheckbox}
          />
          Option 1
          <br />
          <input
            type="radio"
            name="option1"
            value="Female"
            onChange={this.props.handlecheckbox}
          />
          Option 2
        </form>
      </div>
    );
  }
}

export default CheckBoxRadio;
