import React, { Component } from "react";
import GameInit from "./gameComponents/game-init.component";

class GameScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameInit: false,
      team: []
    };
  }

  componentDidMount() {}

  addTeamMember = hero => {
    this.setState({
      team: [...this.state.team, hero]
    });
  };

  render() {
    return (
      <box
        ref="gameScene"
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
        <GameInit />
      </box>
    );
  }
}

export default GameScene;
