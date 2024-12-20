
import './App.css';
import {Component} from 'react';
class App extends Component{
  constructor(){
    super()
      this.state={
        string:'hello world',
       users:[]
      }
    
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
     .then(response=>response.json())
     .then(data=>this.setState({users:data}))
  }
  render(){
   return(
    <div>
      {this.state.users.map(user=>{
        return(
          <h1 key={user.id}>{user.name}</h1>
        )
      })}
    </div>
   )
}
}

export default App;
