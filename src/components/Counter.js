import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    //state name automatically gets "State" appended to the end for props?
    const { clickedState, onIncrement, onDecrement } = this.props
    return (
      <div>
        <p>
          Clicked: {clickedState} times
          {' '}
          <button onClick={onIncrement}>
            +
          </button>
          {' '}
          <button onClick={onDecrement}>
            -
          </button>
          {' '}
          <button onClick={this.incrementIfOdd}>
            Increment if odd
          </button>
          {' '}
          <button onClick={this.incrementAsync}>
            Increment async
          </button>
        </p>
      </div>
    )
  }
}

Counter.propTypes = {
  clickedState: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
