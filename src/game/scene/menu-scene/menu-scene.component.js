import React, { Component } from 'react'
import { GlobalGameStates } from '../../utils/global-game-states'

const MenuOptions = {
  'Solo - casual': {
    description:
      '   Play the campaign on a casual difficulty. Normal scaling and revives are enabled.'
  },
  'Solo - hardcore': {
    description:
      ' Play the campaign on hardcore. Heavier enemy scaling and perma-death.'
  },
  Library: {
    description:
      '         Look at achievements, quests, statistics, and lore collected.'
  }
}

class MenuScene extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.refs.menulist.focus()
  }

  getMenuDescriptions = () => {
    return Object.keys(MenuOptions).map((optKey, index) => {
      const top = 50 + index * 25
      return (
        <text
          key={index}
          top={top.toString()}
          left='50'
          align='center'
          fg={this.props.textFg}
          bg='black'
        >
          {`${optKey}: ${MenuOptions[optKey].description}`}
        </text>
      )
    })
  }

  render() {
    return (
      <box
        ref='menu'
        top='center'
        left='center'
        width='80%'
        height='80%'
        border={{ type: 'line' }}
        style={{
          fg: 'white',
          bg: 'black',
          border: {
            fg: '#f0f0f0'
          }
        }}
        tags={true}
      >
        {this.getMenuDescriptions()}
        <list
          keys={true}
          mouse={true}
          ref='menulist'
          top='50%'
          left='center'
          align='center'
          fg={this.props.textFg}
          bg='black'
          style={{
            item: { fg: '#707070' },
            selected: { fg: this.props.textFg }
          }}
          label='Main Menu'
          items={['Solo - casual', 'Solo - hardcore', 'Library']}
          onSelect={action => {
            switch (action.content) {
              case 'Solo - casual':
                this.props.setGameState(GlobalGameStates.Game)
                return
              case 'Solo - hardcore':
                this.props.setGameState(GlobalGameStates.GameHC)
                return
              case 'Library':
                this.props.setGameState(GlobalGameStates.Library)
                return
              default:
                return
            }
          }}
        />
      </box>
    )
  }
}

export default MenuScene
