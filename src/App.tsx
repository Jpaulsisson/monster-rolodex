import { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      number: { mine: 1337, yours: 5000 },
      name: 'Skri11s'
    };
  }

    render(){
    return (
      <div className="App">
        <h1>This is your number {this.state.number.yours}!</h1>
        <h2>and this is mine...<span className='span'>{this.state.number.mine}</span></h2>
        <button onClick={() => {
          let num = Math.floor(Math.random() * 10000);
          this.setState(() => {
            return {
              number: { mine: 1337, yours: num }
            }
          });
          // this.setState({ number: { mine: 1337, yours: num } } );
        }}>Click me!</button>
      </div>
    )
}
}
export default App
