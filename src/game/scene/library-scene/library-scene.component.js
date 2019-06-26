import React, { Component } from 'react'
import { Grid, GridItem, Tree } from 'react-blessed-contrib'
import { FeatsConfig } from '../../utils/configs/feats-config'

class LibraryScene extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: null,
      pageLabel: 'Library'
    }
  }

  componentDidMount() {
    // set data here to make sure data does not get rerendered
    this.refs.libraryMenu.refs.item.widget.setData(this.getData())
    this.refs.libraryMenu.refs.item.widget.focus()
  }

  featsToLib = () => {
    // currently does nothing
    return FeatsConfig
  }

  getData = () => {
    return {
      extended: true,
      children: {
        Information: {
          type: 'Main Category',
          title: 'Information',
          description: 'Information and mechanics about the game.',
          children: {
            Attributes: {
              type: 'Sub Category',
              title: 'Attributes',
              description:
                'Descriptions of the Attributes that a character has.',
              body: {}
            },
            Races: {
              type: 'Sub Category',
              title: 'Races',
              description: 'Description of the Races in the world.',
              children: {}
            },
            Classes: {
              type: 'Sub Category',
              title: 'Classes',
              description: 'Description of the Classes of characters.',
              children: {}
            },
            Feats: {
              type: 'Sub Category',
              title: 'Feats',
              description: 'Description of the Feats of characters.',
              children: this.featsToLib()
            }
          }
        },
        Achievements: {
          type: 'Main Category',
          title: 'Achievements',
          description: 'List of player unlocked and completed achievements.'
        },
        Quests: {
          type: 'Main Category',
          title: 'Quests',
          description: 'Details about player encountered quests.'
        },
        Statistics: {
          type: 'Main Category',
          title: 'Statistics',
          description: 'Player statistics from completed and uncompleted runs.'
        },
        Lore: {
          type: 'Main Category',
          title: 'Lore',
          description: 'Lore about the world that has been uncovered.',
          children: {
            World: {
              type: 'Sub Category',
              title: 'World',
              description: 'The World'
            },
            Monsters: {
              type: 'Sub Category',
              title: 'monsters',
              description: 'Monster Encyclopedia'
            }
          }
        }
      }
    }
  }

  onSelect = node => {
    const page = { ...node }
    delete page.parent
    delete page.childrenContent

    if (typeof page.children === 'object') {
      page.children = Object.keys(page.children)
    } else {
      delete page.children
    }

    const pageLabel = node.title ? node.title : node.name
    this.setState({ page, pageLabel })
  }

  render() {
    return (
      <box
        ref='libraryScene'
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
        <Grid rows={12} cols={12}>
          <GridItem
            label={'Library Menu'}
            ref={'libraryMenu'}
            row={0}
            col={0}
            rowSpan={12}
            colSpan={6}
            component={Tree}
            options={{
              style: {
                label: { fg: this.props.textFg },
                border: { fg: this.props.textFg },
                selected: { bg: '#707070' },
                fg: this.props.textFg
              },
              template: {
                lines: true
              },
              onSelect: this.onSelect
            }}
          />
          <GridItem
            label={this.state.pageLabel}
            ref={'libraryPage'}
            row={0}
            col={6}
            rowSpan={12}
            colSpan={6}
            options={{
              style: {
                label: { fg: this.props.textFg },
                border: { fg: this.props.textFg },
                fg: this.props.textFg
              }
            }}
            component={'box'}
            content={JSON.stringify(this.state.page, null, 2)}
          />
        </Grid>
      </box>
    )
  }
}

export default LibraryScene
