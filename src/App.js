
import './App.css';
import {Component} from 'react';
class App extends Component{
  constructor(){
    super()
      this.state={
        string:'hello world',
        foods:[
          {name:'pizza',id:'ab1'},{name:'burger',id:'as2'},{name:'biriyani',id:'as3'}
        ]
      }
    
  }
  render(){
   return(
    <div>
      {this.state.foods.map(food=>
       <h1 key={food.id}>{food.name}</h1>
      )}
    </div>
   )
}
}

export default App;
