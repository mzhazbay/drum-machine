import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import DrumPad from "./DrumPad";
import styled from "styled-components";
const padIds = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

export default class NinePads extends Component {
  componentDidMount() {
    document.addEventListener("keyup", this.handleKeyBoardEvent);
  }
  componentWillUnmount() {
    document.removeEventListener("keyup", this.handleKeyBoardEvent);
  }

  handleKeyBoardEvent = (event) => {
    const charPressed = String.fromCharCode(event.keyCode);
    if (padIds.includes(charPressed)) {
      document.getElementById(`button_${charPressed}`).click();
    }
  };

  render() {
    return (
      <Container>
        <RowDrumPad>
          {padIds.map((padId) => (
            <DrumPad
              className="drum-pad"
              key={`keyId_${padId}`}
              padId={padId}
              updateUI={this.props.updateUI}
            />
          ))}
        </RowDrumPad>
      </Container>
    );
  }
}

const RowDrumPad = styled(Row)`
  background-color: black;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  padding-top: 30px;
  padding-bottom: 30px;
`;
