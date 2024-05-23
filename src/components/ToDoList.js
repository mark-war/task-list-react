import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types'

class ToDoList extends Component {
  render() {
    return this.props.todos.map(todo => <ToDoItem 
                                          key={ todo.id } 
                                          todo={ todo } 
                                          markCompleted={this.props.markCompleted} 
                                          deleteToDo={this.props.deleteToDo} /> 
                                )
              }
}

ToDoList.propTypes = {
    todos: PropTypes.array.isRequired
}

export default ToDoList;
