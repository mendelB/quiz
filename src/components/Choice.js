import React, { Component } from 'react';

const Choice = (props) => {
	return (
		<button 
			className="list-group-item list-group-item-action" 
			onClick={props.handleClick}>
				{props.choice}
		</button>	 
	)
}

export default Choice;