import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import TodoItemList from './components/TodoItemList';
import Form from './components/Form';
import Palette from './components/Palette';

class App extends Component {
	id = 3;

	state = {
		input: '',
		colors: ['#343a40', '#f03e3e', '#12b886', '#228ae6'],
		colorSelected: '#343a40',
		todos: [
			{ id: 0, text: '리액트 소개', checked: false, color: '#f03e3e', editing: false },
			{ id: 1, text: '리액트 소개', checked: true, color: '#12b886', editing: false },
			{ id: 2, text: '리액트 소개', checked: false, color: '#228ae6', editing: true }
		]
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = e => {
		const { input, todos, colorSelected } = this.state;
		this.setState({
			input: '',
			todos: todos.concat({
				id: this.id++,
				text: input,
				checked: false,
				color: colorSelected,
				editing: false
			})
		});
		e.preventDefault();
	};

	handleToggle = id => {
		const { todos } = this.state;

		const index = todos.findIndex(todo => todo.id === id);
		const selected = todos[index];
		const nextTodos = [...todos];

		nextTodos[index] = {
			...selected,
			checked: !selected.checked
		};

		this.setState({
			todos: nextTodos
		});
	};

	handleRemove = id => {
		const { todos } = this.state;
		this.setState({ todos: todos.filter(todo => todo.id !== id) });
	};

	handleColor = color => {
		console.log(color);
		this.setState({ colorSelected: color });
	};

	handleEdit = id => {
		const { todos } = this.state;
		const index = todos.findIndex(todo => todo.id === id);
		const edit = todos[index];
		const nextTodos = [...todos];

		nextTodos[index] = {
			...edit,
			editing: true
		};

		this.setState({
			todos: nextTodos
		});
	};

	handleEditSubmit = (id, data) => {
		const { todos } = this.state;

		const index = todos.findIndex(todo => todo.id === id);
		const edited = todos[index];
		const nextTodos = [...todos];

		nextTodos[index] = {
			...edited,
			text: data,
			editing: false
		};

		this.setState({
			todos: nextTodos
		});
	};

	render() {
		const { input, todos, colors, colorSelected } = this.state;
		const {
			handleChange,
			handleSubmit,
			handleToggle,
			handleRemove,
			handleColor,
			handleEdit,
			handleEditSubmit
		} = this;

		return (
			<TodoListTemplate
				palette={
					<Palette
						colors={colors}
						colorSelected={colorSelected}
						onClick={handleColor}
					/>
				}
				form={
					<Form
						value={input}
						onChange={handleChange}
						onSubmit={handleSubmit}
						color={colorSelected}
					/>
				}
				list={
					<TodoItemList
						todos={todos}
						onToggle={handleToggle}
						onRemove={handleRemove}
						onEdit={handleEdit}
						onEditSubmit={handleEditSubmit}
					/>
				}
			/>
		);
	}
}

export default App;