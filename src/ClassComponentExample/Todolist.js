import React, { Component } from 'react'

export default class Todolist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:[],
            todo:'',
        }
    }
    handleChange =(event)=>{
        this.setState({todo:event.target.value})
    }

    addTodo =()=>{
        this.setState(prevState =>({
           todos:[...prevState.todos,prevState.todo],
            todo:''
        }))
    }
    removeTodo =(index)=>{
        this.setState(prevState=>({
            todos:prevState.todos.filter((_, i) => i !== index)
        }))

    }
  render() {
    return (
        <>
          <div>Todolist App</div>
          <input
          type="text"
          value={this.state.todo}
          onChange={this.handleChange}
          placeholder="Add a todo"
        />
        <button onClick={this.addTodo}>Add Todo</button>
        <ul>
          {this.state.todos.map((todoItem, index) => (
            <li key={index}>
              {todoItem}
              <button onClick={() => this.removeTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>


        </>

    )
}
}

// this is example of a todo list
