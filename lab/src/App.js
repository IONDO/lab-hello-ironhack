import React, { Component } from 'react';
import TopSection from './Components/TopSection';
import logo from './logo.svg';
import './App.css';

const Services = (props) => {
  return <div>
    <div>
      <img src={props.image} alt=""></img>
    </div>
    <div>
      <h4>{props.service}</h4>
    </div>
    <div>
      {props.description}
    </div>
  </div>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="App-top">
          <div className="App-top-container">
          <TopSection title='Say hello to ReactJS' 
          description='You will learn something' btn='Awesome!'/>
          </div>
        </section>
        <section className="App-bottom">
          <Services image='/images/icon1.png' service='Declarative' description='blablablblab'/>
          <Services image='/images/icon2.png' service='Components' description='blablablblab'/>
          <Services image='/images/icon3.png' service='Single-way' description='blablablblab'/>  
          <Services image='/images/icon4.png' service='JSX' description='blablablblab'/>  
        </section>
      </div>
    );
  }
}

export default App;
