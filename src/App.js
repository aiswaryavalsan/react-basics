import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
class App extends Component{
  constructor(){
    super()
      this.state={
        string:'hello world'
      }
    
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {this.state.string}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Learn react
        </a>
        <button onClick={()=>this.setState({string:'hai React'})}>change text</button>
        {this.state.string}
      </header>
      
    </div>
  );
}
}


export default App;
