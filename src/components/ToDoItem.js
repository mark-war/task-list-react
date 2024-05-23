import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ToDoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '2px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

  render() {

    //deconstruct
    const { id, title, completed } = this.props.todo

    return (
      <div style= { this.getStyle() }>
            <p>
                <input 
                  type='checkbox' 
                  checked={completed}
                  onChange={this.props.markCompleted.bind(this, id)} />  { title }
                  <button style={btnStyle} onClick={this.props.deleteToDo.bind(this, id)}>X</button>
            </p>
      </div>
    )
  }
}

//PropTypes
ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: 'crimson',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default ToDoItem
