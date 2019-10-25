import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AppContainer.css';
import Jackalopes from './Jackalopes'
import UnicornsWithHooks from './UnicornsWithHooks'
import Button from '../styledComponents/Button.js';

class AppContainer extends Component {
  render() {
    const { isFighting, onStartFight } = this.props
    return (
      <div className="app__div">
        <div>
          <Button color={'red'} onClick={onStartFight}>
            FIGHT!
          </Button>
        </div>
        <div className="app__div-corral">
          <UnicornsWithHooks
            isFighting={isFighting}
            />
          <Jackalopes
            isFighting={isFighting}
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
  onStartFight: PropTypes.func.isRequired
}

export default AppContainer
