import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate'
import TodoItemList from './components/TodoItemList'
import Form from './components/Form'
import Palette from './components/Palette'

class App extends Component {

  id = 3

  state = {
    input: '',
    colors: ['#343a40', '#f03e3e', '#12b886', '#228ae6'],
    color_selected: '#343a40',
    todos: [
      { id: 0, text: ' 리액트 소개', checked: false, color: '#f03e3e'},
      { id: 1, text: ' 리액트 소개', checked: true, color: '#12b886'},
      { id: 2, text: ' 리액트 소개', checked: false, color: '#228ae6'},
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    })
  }

  handleCreate = () => {
    const { input, todos, color_selected } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color: color_selected
      })
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate()
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state

    const index = todos.findIndex(todo => todo.id === id)
    const selected = todos[index]
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    }

    this.setState({
      todos: nextTodos,
    })
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({todos: todos.filter(todo => todo.id !== id)})
  }

  handleColor = (color) => {
    console.log(color)
    this.setState({ color_selected: color })
  }

  render() {
    const { input, todos, colors, color_selected } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleColor,
    } = this

    return (
      <TodoListTemplate palette={(
        <Palette colors={colors}
        color_selected={color_selected}
        onClick={handleColor} />
      )}
      form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
          color={color_selected}
        />
      )}>
        <TodoItemList todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}/>
      </TodoListTemplate>
    )
  }
}

export default App;