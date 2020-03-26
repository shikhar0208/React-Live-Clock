import React from "react";
import { Switch } from "antd";

export default props => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <h1> React Live Clock </h1>
        <Switch className="toggleButton" onClick={props.toggleSwitch} />
      </div>
    </div>
  </header>
);
