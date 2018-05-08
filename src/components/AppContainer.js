import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Jackalopes from './Jackalopes'
import Unicorns from './Unicorns'

class AppContainer extends Component {

  render() {
    const { jackalopes, unicorns, onIncrement, onDecrement, onAddUnicorn } = this.props
    return (
      <div>
        <Jackalopes
          jackalopes={jackalopes}
          onIncrement={() => onIncrement()}
          onDecrement={() => onDecrement()}
        />
        <Unicorns
          unicorns={unicorns}
          onAddUnicorn={onAddUnicorn} />
        <div style={{fontSize: 8, position: 'absolute', bottom: 0}}>
          Jackalope by Nick Bluth from the Noun Project
        </div>
      </div>
    )
  }
}

AppContainer.propTypes = {
  jackalopes: PropTypes.number.isRequired,
  unicorns: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default AppContainer
