import React, { Component } from 'react';

class Shelf extends Component {
  constructor(props){
    super(props);

    this.onClickAdd = this.onClickAdd.bind(this);

    this.state = {
      shelfItems: [
        'GTA',
        'COD',
        'Fifa'
      ]
    }
  }

  onClickAdd(item){
    this.props.addItem(item);
  }

  render() {
    const shelfItems = this.state.shelfItems.map((item, idx) => {
      return <li key={idx}>{item} <button onClick={()=>this.onClickAdd(item)}>[+]</button></li>;
    });
    return (
      <div>
        <h2>Shelf</h2>
        <ul>
          {shelfItems}
        </ul>
      </div>
    );
  }
}

export default Shelf;
