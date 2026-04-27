// import AppContainerBootstrap from "./Components/BootStrapComponent";
// import AppContainerStorageSimple from "./Components/AppContainerStorageSimple";
// import AppContainerStorageAdvance from "./Components/AppContainerStorageAdvance";
// import AppLiveMethods from "./Components/AppLiveMethods";
// import AppLiveMethods from "./Components/AppLiveMethodsLite";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
// import AppReactHooks from "./Components/AppReactHookExample";

import RHFormsAppContainer from "./Components/RHFormsAppContainer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RHFormsAppContainer />
    {/* <div className="App min-vh-100 d-flex justify-content-center align-items-center">
      <AppContainerBootstrap />
    </div>
     <AppContainerStorageSimple />*/}
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
