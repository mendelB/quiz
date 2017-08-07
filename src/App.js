import React, { Component } from 'react';
import Question from './components/Question';
import logo from './logo.svg';
import './App.css';

const questionDummy = {
  question: "Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
  "correct_answer": 0,
  choices: ["Harry Potter","Ted","Spy Kids","Pirates of the Caribbean "]
}

const q2 = {
  "question": "When was the movie &#039;Con Air&#039; released?",
  "correct_answer": 0,
  "choices": [
    "1997",
    "1985",
    "1999",
    "1990"
  ]
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [questionDummy, q2],
      currQuestion: 0,
      score: 0
    }

    this.handleClickNext = this.handleClickNext.bind(this)
    this.updateScore = this.updateScore.bind(this)
  }

  handleClickNext() {
    this.setState({currQuestion: this.state.currQuestion+1})
  }

  updateScore(correct) {
    if (correct) this.setState({score: this.state.score+1})
  }

  render() {
    const nextQuestion = this.state.currQuestion < this.state.questions.length - 1
    const question = this.state.questions[this.state.currQuestion]
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Quiz!</h2>
        </div>
        <div className="App-intro">
          <h3>Score: {this.state.score}/{this.state.questions.length}</h3>
          <Question question={question.question} choices={question.choices} correctChoice={question.correct_answer} nextQuestion={nextQuestion} handleClickNext={this.handleClickNext} updateScore={this.updateScore}/>
        </div>
      </div>
    );
  }
}

export default App;
