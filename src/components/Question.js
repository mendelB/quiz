import React, { Component } from 'react';
import Choice from './Choice';

class Question extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answered: false,
			selectedIndex: null,
		}
		this.handleClick = this.handleClick.bind(this)
		this.calcChoiceState = this.calcChoiceState.bind(this)
	}

	handleClick(index) {
		this.setState({answered: true, selectedIndex: index})
	}

	calcChoiceState(index) {
		const correct = index === this.props.correctChoice
		if (!this.state.answered) return 'active'
		if (index === this.state.selectedIndex) {
			return correct ? 'correct' : 'incorrect'
		} else {
			return correct ? 'correct' : 'disabled'
		}
	}

	render() {
		return (
			<div>
				<h3>{this.props.question}</h3>
				<div className="list-group">
					{
						this.props.choices.map((choice,index) => 
							<Choice
								activeState={this.calcChoiceState(index)}
								key={index}
								choice={choice}
								disabled={this.state.answered}
								handleClick={this.handleClick.bind(null, index)}
							/>
						)
					}
				</div>		 
			</div>
		)
	}
}

export default Question;