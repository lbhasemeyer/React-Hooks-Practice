import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Unicorns extends Component {
  constructor(props) {
    super(props);
    this.alertUnicorn = this.alertUnicorn.bind(this);
  }

  alertUnicorn() {
    this.props.onAddUnicorn();
  }

  render() {
    //state name automatically gets "State" appended to the end for props?
    const { unicornsState } = this.props
    var unicornPlural = (unicornsState === 1) ? ' unicorn' : ' unicorns';
    return (
      <div style={{width: 300}}>
        <button style={{backgroundColor: 'purple', color: 'white', height: 100, width: '100%', marginTop: 50, border: 'none', borderRadius: 10}} onClick={this.alertUnicorn}>
          Add Unicorn
        </button>
        <div style={{textAlign: 'center'}}>
          (You currently have {unicornsState} {unicornPlural})
        </div>
      </div>
    )
  }
}

Unicorns.propTypes = {
  unicornsState: PropTypes.number.isRequired,
  onAddUnicorn: PropTypes.func.isRequired,
}

export default Unicorns
