import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import songA from "./audio/a.mp3";
import songC from "./audio/c.mp3";
import songD from "./audio/d.mp3";
import songE from "./audio/e.mp3";
import songQ from "./audio/q.mp3";
import songS from "./audio/s.mp3";
import songW from "./audio/w.mp3";
import songX from "./audio/x.mp3";
import songZ from "./audio/z.mp3";
import { generateColor } from "./helper";

const songs = { songQ, songW, songE, songA, songS, songD, songZ, songX, songC };

export default class DrumPad extends Component {
  onClick = () => {
    document.getElementById(`${this.props.padId}`).play();
    this.props.updateUI(this.props.padId);
  };
  render() {
    return (
      <Column md={3} lg={3} sm={3}>
        <audio
          className="clip"
          id={`${this.props.padId}`}
          src={songs[`song${this.props.padId}`]}
        />
        <ClickButton
          style={{ backgroundColor: `${generateColor()}` }}
          id={`button_${this.props.padId}`}
          onClick={this.onClick}
        >
          {this.props.padId}
        </ClickButton>
      </Column>
    );
  }
}

const Column = styled(Col)`
  margin: 5px;
  padding: 0;
`;

const ClickButton = styled(Button)`
  min-width: 100%;
  min-height: 100%;
`;
