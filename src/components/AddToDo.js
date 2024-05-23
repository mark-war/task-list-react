import React, { Component } from 'react'

export class AddToDo extends Component {

state = {
    title: ''
}

onSubmit = (e) => {
    e.preventDefault()
    this.props.addToDo(this.state.title)
    this.setState({title: ''})
}

onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
}

  render() {
    return (
      <form 
        style={formStyle}
        onSubmit={this.onSubmit} >
        <input 
            style={inputTextStyle} 
            type='text' 
            name='title' 
            placeholder='Add new item...'
            onChange={this.onChange}
            value={this.state.title} />
        <input 
            type='submit' 
            value='Add To Do Item'
            className='btn' />
      </form>
    )
  }
}

const formStyle = {
    display: 'flex'
}

const inputTextStyle = {
    flex: '10',
    padding: '5px'
}

export default AddToDo
