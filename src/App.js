import React, { Component } from 'react';
import Question from './components/Question';
import logo from './logo.svg';
import './App.css';

const questionDummy = {
  question: "Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
  choices: ["Harry Potter","Ted","Spy Kids","Pirates of the Caribbean "]
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Question question={questionDummy.question} choices={questionDummy.choices} correctChoice={0}/>
        </div>
      </div>
    );
  }
}

export default App;
