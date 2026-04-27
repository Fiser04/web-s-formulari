import React from "react";
import RHRangeForm from "./forms/RHRangeForm";
import RHBasicInputForm from "./forms/RHBasicInputForm";
import RHMultipleInputForms from "./forms/RHMultipleInputForms";
import RHTextAreaForm from "./forms/RHTextAreaForm";
import RHSelectForm from "./forms/RHSelectForm";
import RHCheckBoxForm from "./forms/RHCheckBoxForm";
import RHRadiumButton from "./forms/RHRadiumButton";

import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";

function RHFormsRouter() {
  const getLinkStyle = ({ isActive }) => ({
    display: "block",
    padding: "10px",
    marginBottom: "6px",
    textDecoration: "none",
    borderRadius: "6px",
    color: isActive ? "white" : "#333",
    backgroundColor: isActive ? "#0d6efd" : "#f1f1f1",
  });

  const styles = {
    container: {
      display: "flex",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
    },
    sidebar: {
      width: "280px",
      padding: "20px",
      backgroundColor: "#f8f9fa",
      borderRight: "1px solid #ddd",
    },
    description: {
      fontSize: "14px",
      lineHeight: "1.5",
    },
    nav: {
      marginTop: "20px",
    },
    content: {
      flex: 1,
      padding: "30px",
    },
  };

  return (
    <BrowserRouter>
      <div style={styles.container}>
        <aside style={styles.sidebar}>
          <h2>Forms</h2>
          <nav style={styles.nav}>
            <NavLink
              to="/basic-input"
              style={styles.navLink}
              activeStyle={styles.activeNavLink}
            >
              Basic Input Form
            </NavLink>
            <NavLink
              to="/multiple-inputs"
              style={styles.navLink}
              activeStyle={styles.activeNavLink}
            >
              Multiple Input Forms
            </NavLink>
            <NavLink
              to="/text-area"
              style={styles.navLink}
              activeStyle={styles.activeNavLink}
            >
              Text Area Form
            </NavLink>
            <NavLink
              to="/select"
              style={styles.navLink}
              activeStyle={styles.activeNavLink}
            >
              Select Form
            </NavLink>
            <NavLink
              to="/checkbox"
              style={styles.navLink}
              activeStyle={styles.activeNavLink}
            >
              Check Box Form
            </NavLink>
            <NavLink
              to="/radium-button"
              style={styles.navLink}
              activeStyle={styles.activeNavLink}
            >
              Radium Button Form
            </NavLink>
            <NavLink
              to="/range"
              style={styles.navLink}
              activeStyle={styles.activeNavLink}
            >
              Range Form
            </NavLink>
          </nav>
        </aside>
        <main style={styles.main}>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h1>React Hooks – Forms and Routing</h1>
                  <p>
                    Select a form example from the left. The corresponding
                    component will be displayed in this area.
                  </p>
                </div>
              }
            />
            <Route path="/basic-input" component={RHBasicInputForm} />
            <Route path="/multiple-inputs" component={RHMultipleInputForms} />
            <Route path="/text-area" component={RHTextAreaForm} />
            <Route path="/select" component={RHSelectForm} />
            <Route path="/checkbox" component={RHCheckBoxForm} />
            <Route path="/radium-button" component={RHRadiumButton} />
            <Route path="/range" component={RHRangeForm} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default RHFormsRouter;
