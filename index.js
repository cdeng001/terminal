import React, { Component } from "react";
import blessed from "blessed";
import { render } from "react-blessed";
import Game from "./src/Game/game.component";

// Creating our screen
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: "react-blessed hello world"
});

// Adding a way to quit the program
screen.key(["escape", "q", "C-c"], function(ch, key) {
  return process.exit(0);
});

// Rendering a simple centered box
class App extends Component {
  render() {
    return (
      <box top="center" left="center" width="100%" height="100%">
        <Game screen={screen} />
      </box>
    );
  }
}

// Rendering the React app using our screen
const component = render(<App />, screen);
