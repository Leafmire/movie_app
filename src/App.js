import React from 'react';
import PropTypes from 'prop-types';



class App extends React.Component{
  state = {
    count: 0
  };
  add = () => {
    alert("add")
  };
  minus = () => {
    alert("minus")
  };
  render(){
    return <div>
            <h1>The number is: {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
          </div>
  }
}

export default App;
