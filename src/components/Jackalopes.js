import React from 'react'
import Button from '../styledComponents/Button.js';
import JackalopeIcon from '../icons/jackalope.svg';

export default class Jackalopes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jackalopes: 1
    };
    this.onIncrement = this.onIncrement.bind(this);
  }

  onIncrement() {
    const newJackalopeState = this.state.jackalopes + 1;
    this.setState({jackalopes: newJackalopeState});
  }

  render() {    
    let herdClassName = this.props.isFighting === true ? 'jackalopes-fighting' : 'jackalopes';

    let jackalopeHerd = [];
    for(var i=0; i<this.state.jackalopes; i++){
      jackalopeHerd.push(<img key={i} src={JackalopeIcon} height='50' width='50' alt='' />);
    }

    return (
      <div className="jackalope-section">
        <Button color={'orange'} onClick={this.onIncrement}>
          Add Jackalope (You currently have {jackalopeHerd.length})
        </Button>
        <div className={herdClassName}>
          {jackalopeHerd}
        </div>
      </div>
    )
  }
}