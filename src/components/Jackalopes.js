import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../styledComponents/Button.js';
import ContainerDiv from '../styledComponents/ContainerDiv.js';
import JackalopeIcon from '../icons/jackalope.svg';

class Jackalopes extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if (this.props.jackalopes % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { jackalopes, onIncrement, onDecrement } = this.props
    let jackalopeHerd = [];
    for(var i=0; i<jackalopes; i++){
      jackalopeHerd.push(<img src={JackalopeIcon} height='50' width='50' alt='' />);
    }
    return (
      <ContainerDiv>
        <div>
          Jackalopes: {jackalopes}
          {' '}
          <Button color={'orange'} onClick={onDecrement}>
            -
          </Button>
          <Button color={'orange'} onClick={onIncrement}>
            +
          </Button>
          <Button color={'green'} onClick={this.incrementIfOdd}>
            Increment if odd
          </Button>
          <Button color={'green'} onClick={this.incrementAsync}>
            Increment async
          </Button>
        </div>
        {jackalopeHerd}
      </ContainerDiv>
    )
  }
}

Jackalopes.propTypes = {
  jackalopes: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Jackalopes
