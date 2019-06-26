import React, { Component } from 'react'
import { Grid, Map, GridItem } from 'react-blessed-contrib'
import { getStartChoices, getHeroData } from '../../../utils/hero-utils'

class GameInit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedUnit: null,
      starters: getStartChoices()
    }
  }

  componentDidMount() {
    this.refs.portrait.refs.item.setImage(
      __dirname + '/../../../../img/pixil-frame-0.png'
    )
    // this.refs.heroDisplay.refs.item.widget.append(<box>hello</box>)
    // console.log(Object.keys(this.refs.portrait.refs.item))
    // console.log(__dirname + '/../../../../img/test-image.png')
  }

  unitClick = (data, ref) => {
    // console.log(data, ref)
    const unitWrapper = this.refs[ref].refs.item
    const unitBoxTextChildren = unitWrapper.children[1].children
    const unitName = unitBoxTextChildren[0].getContent()
    // console.log(Object.keys(unitWrapper))
    // console.log(unitName.getContent())

    this.setState({ selectedUnit: getHeroData(unitName) })
  }

  buildHeroUnitDisplay = hero => {
    const startRow = '0%'
    const classLabel = `Class: ${hero.class}`
    return (
      <box left={'center'} align={'center'} border={{ ch: ' ' }} width={'90%'}>
        <text
          left={'center'}
          top={`${startRow}`}
          align={'center'}
          content={`${hero.name}`}
        />
        <text
          left={'0%'}
          top={`${startRow}+2`}
          align={'left'}
          content={`Race: ${hero.race}`}
        />
        <text
          left={`100%-${classLabel.length + 2}`}
          top={`${startRow}+2`}
          align={'left'}
          content={classLabel}
        />
        <text
          left={'0%'}
          top={`${startRow}+4`}
          align={'left'}
          content={`Attributes:`}
        />
        {Object.keys(hero.baseAttributes).map((attr, index) => {
          const topOffset = 5
          return (
            <text
              key={hero.name + attr + index}
              left={'0%+1'}
              top={`${startRow}+${topOffset + index}`}
              align={'left'}
              content={`${attr}: ${hero.baseAttributes[attr]}`}
            />
          )
        })}
      </box>
    )
  }

  buildHeroSelectDisplay = () => {
    return (
      <GridItem
        ref='heroDisplay'
        row={0}
        col={0}
        rowSpan={6}
        colSpan={12}
        component={'box'}
        options={{
          label: 'Pick your first Hero'
        }}
      >
        <Grid rows={8} cols={13}>
          {this.state.starters.map((hero, index) => {
            const ref = `unit${index}`
            return (
              <GridItem
                ref={ref}
                key={index}
                row={1}
                col={1 + index * 4}
                rowSpan={7}
                colSpan={3}
                component={'box'}
                options={{
                  label: `Hero Option ${index + 1}`
                }}
                clickable={true}
                onClick={data => {
                  this.unitClick(data, ref)
                }}
              >
                {this.buildHeroUnitDisplay(hero)}
              </GridItem>
            )
          })}
        </Grid>
      </GridItem>
    )
  }

  buildHeroDataPanel = () => {
    return (
      <GridItem
        ref='heroDataPanel'
        row={6}
        col={0}
        rowSpan={6}
        colSpan={12}
        component={'box'}
      >
        <Grid rows={1} cols={12}>
          <GridItem
            ref='portrait'
            row={0}
            col={0}
            rowSpan={1}
            colSpan={4}
            component={'ANSIImage'}
            options={{
              label: 'Portrait',
              ascii: true
            }}
          />
          {this.buildHeroDataPanelDescription()}
        </Grid>
      </GridItem>
    )
  }

  buildHeroDataPanelDescription = () => {
    const unit = this.state.selectedUnit
    return unit ? (
      <GridItem
        row={0}
        col={4}
        rowSpan={1}
        colSpan={8}
        component={'text'}
        options={{
          content: `${unit.name}`
        }}
      />
    ) : (
      <GridItem row={0} col={4} rowSpan={1} colSpan={8} component={'box'}>
        <box top={'center'} left={'center'}>
          <text top={'center'} left={'center'}>
            Select a Character
          </text>
        </box>
      </GridItem>
    )
  }

  render() {
    return (
      <Grid rows={12} cols={12}>
        {this.buildHeroSelectDisplay()}
        {this.buildHeroDataPanel(getHeroData())}
      </Grid>
    )
  }
}

export default GameInit
