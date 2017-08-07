import React, { Component } from 'react';

class Question extends React.component {
	render() {
		return (
			<h3>{this.props.question}</h3>		 
		)
	}
}

export default Question;