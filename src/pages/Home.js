import React, { Component } from 'react';
import AddToDo from '../components/AddToDo';
import ToDoList from '../components/ToDoList';
import {v4 as uuid} from 'uuid';

const today = new Date().toISOString().slice(0, 10)

export default class Home extends Component {
    state = {
    todos: [
      {
        id: uuid(),
        title: "Brush Your Teeth!",
        completed: false,
        createdOn: today
      },
      {
        id: uuid(),
        title: "Wash Your Face!",
        completed: true,
        createdOn: today
      },
      {
        id: uuid(),
        title: "Cook Some Breaky!",
        completed: false,
        createdOn: today
      }
    ]
  }

    //mark complete
  markCompleted = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
        return todo
      })
    })
  }

  //delete item
  deleteToDo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  //add item
  addToDo = (title) => {
    if (!title) return
    const newTask = {
      id: uuid(),
      title,
      completed: false,
      createdOn: today
    }
    this.setState({todos: [...this.state.todos, newTask]})
  }

  render() {
    return (
        <React.Fragment>
            <div className='container'>
            <AddToDo addToDo={this.addToDo} />
            <ToDoList 
                todos={this.state.todos} 
                markCompleted={this.markCompleted} 
                deleteToDo={this.deleteToDo} />
            </div>
        </React.Fragment>
    )
  }
}
