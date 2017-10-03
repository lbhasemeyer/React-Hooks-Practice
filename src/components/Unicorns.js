import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Unicorns extends Component {
  constructor(props) {
    super(props);
    this.alertUnicorn = this.alertUnicorn.bind(this);
  }

  alertUnicorn() {
    this.props.onAddUnicorn();
    var newUnicornCount = this.props.unicornsState+1;
    var unicornPlural = (newUnicornCount === 1) ? ' UNICORN!' : ' UNICORNS!';
    alert('NOW YOU HAVE ' + newUnicornCount + unicornPlural);
  }

  render() {
    //state name automatically gets "State" appended to the end for props?
    const { unicornsState, onAddUnicorn } = this.props
    return (
      <div>
        <button style={{backgroundColor: 'purple', color: 'white', height: 100, width: 300, marginTop: 50, border: 'none', borderRadius: 10}} onClick={this.alertUnicorn}>
          Add Unicorn
        </button>
      </div>
    )
  }
}

Unicorns.propTypes = {
  unicornsState: PropTypes.number.isRequired,
  onAddUnicorn: PropTypes.func.isRequired,
}

export default Unicorns
