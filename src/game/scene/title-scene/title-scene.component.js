import React, { Component } from "react";
import { GlobalGameStates } from "../../utils/global-game-states";

class TitleScene extends Component {
  constructor(props) {
    super(props);

    this.props.onceKeypressListener("enter", () => {
      this.props.setGameState(GlobalGameStates.Menu);
    });
  }

  render() {
    return (
      <box
        ref="title"
        top="center"
        left="center"
        width="80%"
        height="80%"
        border={{ type: "line" }}
        style={{
          fg: "white",
          bg: "black",
          border: {
            fg: "#f0f0f0"
          }
        }}
        tags={true}
      >
        <text
          top="50%"
          left="center"
          align="center"
          fg={this.props.textFg}
          bg="black"
          content="Terminal RPG"
        />
        <text
          top="50%+1"
          left="center"
          align="center"
          fg={this.props.textFg}
          bg="black"
          content="Press ENTER to start"
        />
      </box>
    );
  }
}

export default TitleScene;
