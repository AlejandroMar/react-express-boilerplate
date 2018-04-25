import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    ingredients: []
  }

  componentDidMount(){
    fetch('/api/ingredients')
      .then(res => res.json())
      .then(ingredients => this.setState({ingredients}))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.ingredients.map((ingredient, index) => <li key={index}>{`${ingredient.ingredient} : ${ingredient.quantity}.`} </li>)}
      </div>
    );
  }
}

export default App;
