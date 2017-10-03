import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Counter from './Counter'
import Unicorns from './Unicorns'

class AppContainer extends Component {

  render() {
    //state name automatically gets "State" appended to the end for props?
    const { clickedState, unicornsState, onIncrement, onDecrement, onAddUnicorn } = this.props
    return (
      <div>
        <Counter
          clickedState={clickedState}
          onIncrement={() => onIncrement()}
          onDecrement={() => onDecrement()}
        />
        <Unicorns
          unicornsState={unicornsState}
          onAddUnicorn={onAddUnicorn} />
      </div>
    )
  }
}

AppContainer.propTypes = {
  clickedState: PropTypes.number.isRequired,
  unicornsState: PropTypes.number.isRequired,  
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default AppContainer
