import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AppContainer.css';
import Glitter from '../icons/glitter.png';
import Jackalopes from './Jackalopes'
import UnicornsWithHooks from './UnicornsWithHooks'
import Button from '../styledComponents/Button.js';

class AppContainer extends Component {
  render() {
    const { isFighting, onStartFight } = this.props
    const explosionClassName = isFighting ? 'explosion-icon' : 'no-explosion-icon';

    return (
      <div className="app__div">
        <div>
          <Button color={'red'} onClick={onStartFight}>
            GO!
          </Button>
        </div>
        <div className="app__div-corral">
          <UnicornsWithHooks
            isFighting={isFighting} />
          <Jackalopes
            isFighting={isFighting} />
          <img className={explosionClassName} src={Glitter} alt='' />
          <div className="app__div-copywright">
            Jackalope by Nick Bluth from the Noun Project
            Starburst by Nick Abrams from the Noun Project
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
