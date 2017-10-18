import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Counter from './Counter'
import Unicorns from './Unicorns'

class AppContainer extends Component {

  render() {
    const { clicked, unicorns, onIncrement, onDecrement, onAddUnicorn } = this.props
    return (
      <div>
        <Counter
          clicked={clicked}
          onIncrement={() => onIncrement()}
          onDecrement={() => onDecrement()}
        />
        <Unicorns
          unicorns={unicorns}
          onAddUnicorn={onAddUnicorn} />
      </div>
    )
  }
}

AppContainer.propTypes = {
  clicked: PropTypes.number.isRequired,
  unicorns: PropTypes.number.isRequired,  
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default AppContainer
