import logo from './logo.svg';
import React from 'react'
import './App.css';
import { Component } from 'react';

class App extends React.Component {
  state = {
    Person: {
      fullName: "Majd LEFI",
      bio: "hello",
      profession: "hello",
      src: "./MajdPhoto.JPG"
    },
    booleanShow: true,
    interval: {
      intervall: null,
      timer: 0,
    }

  };

  handleClick = () => {
    this.setState({ booleanShow: !this.state.booleanShow })
  }

  componentDidMount() {
    this.setState({
      intervall : setInterval (() => {
        this.setState ({timer:this.state.timer + 1})
      }, 1000)

    })
  }


  render() {
    return (
      <div>
        {(this.state.booleanShow == true) ? (<h1>{this.state.Person.fullName} <h2>Il est {new Date().toLocaleTimeString()}</h2></h1>) : (<div>rien à afficher ! </div>)}
        
        <button onClick={this.handleClick} >Click Me</button>
      </div>
    )

  }
}

export default App;
