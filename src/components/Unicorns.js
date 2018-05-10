import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UnicornIcon from '../icons/unicorn.svg';
import Button from '../styledComponents/Button.js';
import ContainerDiv from '../styledComponents/ContainerDiv.js';

class Unicorns extends Component {
  render() {
    const { unicorns, onAddUnicorn } = this.props
    var unicornPlural = (unicorns === 1) ? ' unicorn' : ' unicorns';
    var unicornHerd = [];
    let iconClassName = this.props.isFighting === true ? 'unicorns-fighting' : null;
    for(var i=0; i<unicorns; i++){
      unicornHerd.push(<img key={i} src={UnicornIcon} height='50' width='50' alt='' />)
    }
    return (
      <ContainerDiv>
        <Button color={'purple'} onClick={onAddUnicorn}>
          Add Unicorn (You currently have {unicorns} {unicornPlural})
        </Button>
        <div className={iconClassName}>
          {unicornHerd}
        </div>
      </ContainerDiv>
    )
  }
}

Unicorns.propTypes = {
  unicorns: PropTypes.number.isRequired,
  onAddUnicorn: PropTypes.func.isRequired,
}

export default Unicorns
