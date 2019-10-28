import React, { useState } from 'react';
import Button from '../styledComponents/Button.js';
import UnicornIcon from '../icons/unicorn.svg';

export default function UnicornsWithHooks(props) {
	const [unicorns, setUnicorns] = useState(0);

	const herdClassName = props.isFighting === true ? 'unicorns-fighting' : 'unicorns';

	const unicornHerd = [];
	for(var i=0; i<unicorns; i++){
    unicornHerd.push(<img key={i} src={UnicornIcon} height='50' width='50' alt='' />)
  }

  function onIncrement() {
  	setUnicorns(unicorns+1);
  }

	return (
		<div className="unicorn-section">
			<Button color={'purple'} onClick={onIncrement}>
	      Add Unicorn using Hooks (You currently have {unicorns})
	    </Button>
			<div className={herdClassName}>
				{unicornHerd}
			</div>
		</div>
	)
}