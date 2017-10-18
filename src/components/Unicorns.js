import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UnicornIcon from '../icons/unicorn.svg';

class Unicorns extends Component {
  render() {
    const { unicorns, onAddUnicorn } = this.props
    var unicornPlural = (unicorns === 1) ? ' unicorn' : ' unicorns';
    var unicornHerd = [];
    for(var i=0; i<unicorns; i++){
      unicornHerd.push(<img key={i} src={UnicornIcon} height='50' width='50' alt='' />)
    }
    return (
      <div style={{width: 300}}>
        <button style={{backgroundColor: 'purple', color: 'white', height: 100, width: '100%', marginTop: 50, marginBottom: 10, border: 'none', borderRadius: 10}} onClick={onAddUnicorn}>
          <p>Add Unicorn:::</p>
          <p>(You currently have {unicorns} {unicornPlural})!</p>
        </button>
        {unicornHerd}
      </div>
    )
  }
}

Unicorns.propTypes = {
  unicorns: PropTypes.number.isRequired,
  onAddUnicorn: PropTypes.func.isRequired,
}

export default Unicorns
