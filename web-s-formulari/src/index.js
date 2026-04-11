import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import AppContainerBootstrap from "./Components/BootStrapComponent";

import AppContainerStorageSimple from "./Components/AppContainerStorageSimple";
import AppContainerStorageAdvance from "./Components/AppContainerStorageAdvance";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <div className="App min-vh-100 d-flex justify-content-center align-items-center">
      <AppContainerBootstrap />
    </div>*/}
    {/* <AppContainerStorageSimple />*/}
    <AppContainerStorageAdvance />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
