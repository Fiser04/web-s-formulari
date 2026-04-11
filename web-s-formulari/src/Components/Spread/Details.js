import React, { Component } from "react";

class Detail extends React.Component {
  render() {
    const { name, age } = { ...this.props };
    return (
      <div>
        <h3>Person Details: </h3>
        <ul>
          <li>
            name={this.props.title} {name}
          </li>
          <li>age={age}</li>
        </ul>
      </div>
    );
  }
}

export default Detail;
