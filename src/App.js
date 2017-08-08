import React, { Component } from 'react';
import Question from './components/Question';
import quizClient from './utils/quizClient';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currQuestion: 0,
      score: 0
    }

    this.handleClickNext = this.handleClickNext.bind(this)
    this.updateScore = this.updateScore.bind(this)
    this.getNewQuiz = this.getNewQuiz.bind(this)
  }

  getNewQuiz() {
    quizClient.getQuizes().then(questions => {
      this.setState({questions: questions, score: 0, currQuestion: 0})
    })
  }

  componentDidMount() {
    this.getNewQuiz()
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
          <button className="btn btn-default" onClick={this.getNewQuiz}>Get New Quiz</button>
        </div>
        <div className="App-intro">
          <h3>Score: {this.state.score}/{this.state.questions.length}</h3>
          <h3>Question: {this.state.currQuestion + 1}/{this.state.questions.length}</h3>
          {question ? <Question question={question.question} choices={question.choices} correctChoice={question.correctChoice} nextQuestion={nextQuestion} handleClickNext={this.handleClickNext} updateScore={this.updateScore}/> : null}
        </div>
      </div>
    );
  }
}

export default App;
