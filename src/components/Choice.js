import React, { Component } from 'react';

const Choice = (props) => {
	return (
		<li><button onClick={props.handleClick}>{props.choice}</button></li>		 
	)
}

export default Choice;