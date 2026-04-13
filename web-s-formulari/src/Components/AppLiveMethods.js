import React from "react";
import MountExample from "./MountExample";
import UpdateExample from "./UpdateExample";
import UnmountExample from "./UnmountExample";

class AppLiveMethods extends React.Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Live Methods</h1>
        <MountExample />
        <br />
        <UpdateExample />
        <br />
        <UnmountExample />
      </div>
    );
  }
}

export default AppLiveMethods;
