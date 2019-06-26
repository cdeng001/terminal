import React, { Component } from 'react'
import TitleScene from './scene/title-scene/title-scene.component'
import MenuScene from './scene/menu-scene/menu-scene.component'
import GameScene from './scene/game-scene/game-scene.component'
import LibraryScene from './scene/library-scene/library-scene.component'
import { GlobalGameStates } from './utils/global-game-states'

// Rendering a simple centered box
class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      textFg: 'green',
      gameState: GlobalGameStates.Title
    }
  }

  setGameState = newGameState => {
    this.setState(prev => {
      return { gameState: newGameState }
    })
  }

  renderGameState = () => {
    switch (this.state.gameState) {
      case GlobalGameStates.Title:
        return (
          <TitleScene
            onceKeypressListener={(key, fn) =>
              this.props.screen.onceKey(key, fn)
            }
            textFg={this.state.textFg}
            setGameState={this.setGameState}
          />
        )
      case GlobalGameStates.Menu:
        return (
          <MenuScene
            addKeypressListener={(key, fn) => this.props.screen.key(key, fn)}
            textFg={this.state.textFg}
            setGameState={this.setGameState}
          />
        )
      case GlobalGameStates.Game:
        return (
          <GameScene
            addKeypressListener={(key, fn) => this.props.screen.key(key, fn)}
            textFg={this.state.textFg}
            hardcore={false}
          />
        )
      case GlobalGameStates.GameHC:
        return (
          <GameScene
            addKeypressListener={(key, fn) => this.props.screen.key(key, fn)}
            textFg={this.state.textFg}
            hardcore={true}
          />
        )
      case GlobalGameStates.Library:
        return (
          <LibraryScene
            addKeypressListener={(key, fn) => this.props.screen.key(key, fn)}
            textFg={this.state.textFg}
          />
        )
      case GlobalGameStates.Settings:
        return
      default:
        return
    }
  }

  render() {
    const state = this.renderGameState()
    return <element>{state}</element>
  }
}

export default Game
