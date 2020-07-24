import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import NinePads from "./NinePads";
import { generateColor } from "./helper";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

export default class App extends Component {
  state = {
    pressedBtn: "Press button",
    modeColor: "#1e1e1e",
  };

  updateBtnPressedUI = (padId) => {
    this.setState({
      pressedBtn: padId,
    });
  };

  handleOnChange = (val, e) => {
    if (e.currentTarget.value > 1) {
      this.setState({ modeColor: "#ffffff" });
    } else {
      this.setState({ modeColor: "#1e1e1e" });
    }
  };

  render() {
    return (
      <div
        className="App-header"
        id="drum-machine"
        style={{ backgroundColor: this.state.modeColor }}
      >
        <SwitchBtn onChange={this.handleOnChange} />
        <Display id="display">{this.state.pressedBtn}</Display>
        <div>
          <NinePads updateUI={this.updateBtnPressedUI} />
        </div>
      </div>
    );
  }
}

const SwitchModeBtn = ({ outerStyle, onChange }) => {
  return (
    <ToggleButtonGroup
      style={outerStyle}
      type="checkbox"
      value={1}
      onChange={onChange}
    >
      <ToggleButton variant="dark" value={1}>
        Dark
      </ToggleButton>
      <ToggleButton variant="light" value={2}>
        Light
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

const SwitchBtn = styled(SwitchModeBtn).attrs(() => ({
  outerStyle: {
    position: "absolute",
    top: 0,
    left: 0,
  },
}))``;

const Display = styled.div`
  display: flex;
  background-color: red;
  margin-bottom: 50px;
  font-size: 30px;
  border-radius: 25px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${generateColor()};
`;
