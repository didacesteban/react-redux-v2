import React, { Component } from 'react';
import '../style/css/style.css';
import Cart from '../containers/cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Cart/>
        </div>
      </div>
    );
  }
}

export default App;
