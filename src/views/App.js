import React, { Component } from 'react';
import './style/css/App.css';
import Cart from '../components/cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <Cart/>
        </div>
      </div>
    );
  }
}

export default App;
