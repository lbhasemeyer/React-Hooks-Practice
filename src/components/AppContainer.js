import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AppContainer.css';
import Jackalopes from './Jackalopes'
import Unicorns from './Unicorns'
import Button from '../styledComponents/Button.js';

class AppContainer extends Component {
  render() {
    const { jackalopes, unicorns, onIncrement, onDecrement, onAddUnicorn } = this.props
    return (
      <div className="app__div">
        <div>
          <Button color={'red'}>
            FIGHT!
          </Button>
        </div>
        <div className="app__div-corral">
          <Unicorns
            unicorns={unicorns}
            onAddUnicorn={onAddUnicorn} />
          <Jackalopes
            jackalopes={jackalopes}
            onIncrement={() => onIncrement()}
            onDecrement={() => onDecrement()}
          />
          <div className="app__div-copywright">
            Jackalope by Nick Bluth from the Noun Project
          </div>
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
