import React, { Component } from 'react';


import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import data from './data';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header data={data}/> */}
        <About data={data}/>
        {/* <Portfolio data={data}/> */}
        {/* <Footer data={data}/> */}
      </div>
    );
  }
}

export default App;