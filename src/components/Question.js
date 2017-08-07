import React, { Component } from 'react';
import Choice from './Choice';

class Question extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(index) {
		const choice = this.props.choices[index]
	}

	render() {
		return (
			<div>
				<h3>{this.props.question}</h3>
				<div className="list-group">
					{
						this.props.choices.map((choice,index) => 
							<Choice 
								key={index}
								choice={choice}
								handleClick={this.handleClick.bind(index)}
							/>
						)
					}
				</div>		 
			</div>
		)
	}
}

export default Question;