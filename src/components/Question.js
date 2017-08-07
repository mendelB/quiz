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

	componentWillReceiveProps(nextProps) {
		if (nextProps.question === this.props.question) return
		this.setState({
			answered: false,
			selectedIndex: null,
		})
	}

	handleClick(index) {
		this.setState({answered: true, selectedIndex: index})
		this.props.updateScore(index === this.props.correctChoice)
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
				{
					this.state.answered && this.props.nextQuestion ? 
						<button className="btn btn-default" onClick={this.props.handleClickNext}>Next</button>
					: null
				}	 
			</div>
		)
	}
}

export default Question;