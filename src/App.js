import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate'
import TodoItemList from './components/TodoItemList'
import Form from './components/Form'
import Palette from './components/Palette'

class App extends Component {

  id = 3

  state = {
    input: '',
	edit: '',
    colors: ['#343a40', '#f03e3e', '#12b886', '#228ae6'],
    color_selected: '#343a40',
    todos: [
      { id: 0, text: ' 리액트 소개', checked: false, color: '#f03e3e', editing: false},
      { id: 1, text: ' 리액트 소개', checked: true, color: '#12b886', editing: false},
      { id: 2, text: ' 리액트 소개', checked: false, color: '#228ae6', editing: true},
    ]
  }

  handleChange = (e) => {
	const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
    const { input, todos, color_selected } = this.state;
	this.setState({
		input: '',
		todos: todos.concat({
			id: this.id++,
			text: input,
			checked: false,
			color: color_selected,
			editing: false,
		})
	});
	e.preventDefault();
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
  
  handleEditSubmit = (id) => {
	    const { edit, todos } = this.state
	
		const index = todos.findIndex(todo => todo.id === id)
		const edited = todos[index];
		const nextTodos = [...todos];
		const text = edit === '' ? todos[index].text : edit;
	  
		nextTodos[index] = {
		  ...edited,
		  text,
		  editing: false,
		}

		this.setState({
		  edit: '',
		  todos: nextTodos,
		})
  }

  render() {
    const { input, todos, colors, color_selected } = this.state;
    const {
      handleChange,
      handleSubmit,
      handleToggle,
      handleRemove,
      handleColor,
	  handleEditSubmit,
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
          onChange={handleChange}
          onSubmit={handleSubmit}
          color={color_selected}
        />
      )}>
        <TodoItemList todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
		  onChange={handleChange}
		  onEditSubmit={handleEditSubmit}/>
      </TodoListTemplate>
    )
  }
}

export default App;