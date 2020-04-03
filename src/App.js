import React, {Component} from 'react';
import {Route,BrowserRouter as Router} from 'react-router-dom'
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import axios from 'axios';
// import v4 from 'uuid/v4'


import About from './components/pages/About'
// import Axios from 'axios';
// import { Component } from 'react';

class  App extends Component {
  state ={
    todos:[]
  }


  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => this.setState({todos: res.data}))
  }
  //Toggle
  markComplete = (id) =>
  {
      this.setState({todos:this.state.todos.map(todos =>{
        if(todos.id===id){
          todos.completed = !todos.completed
        }
        return todos;

      })})
  }

//Delete Todo

delTodo =(id) =>
{
  this.setState({todos:[...this.state.todos.filter(todos => todos.id !==id)]});
}

//AddTodo

addTodo =(title) =>{
  const newTodo ={
    id:4,
    title,
    completed:false
  }
  this.setState({todos:[...this.state.todos,newTodo]})
}

  render(){
    
    return (
      <Router>
      <div className="App">
        <div className='container'>
        <Header />
    <Route  exact path ="/" render = {props => (<React.Fragment>
      <AddTodo addTodo = {this.addTodo}/>
        <Todos todos={this.state.todos} markComplete ={
          this.markComplete
        }
        delTodo ={this.delTodo}
        />
      </React.Fragment>
    )}/>

    <Route path="/about" component = {About}/>
        
        </div>
      </div>
      </Router>
    );
  }
}

export default App;

