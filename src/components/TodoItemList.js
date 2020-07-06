import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.todos !== nextProps.todos;
	}
	render() {
		const { todos, onToggle, onRemove, onEdit, onEditSubmit } = this.props;

		const todoList = todos.map(({ id, color, text, checked, editing }) => (
			<TodoItem
				id={id}
				text={text}
				checked={checked}
				onToggle={onToggle}
				onRemove={onRemove}
				color={color}
				key={id}
				editing={editing}
				onEdit={onEdit}
				onEditSubmit={onEditSubmit}
			/>
		));
		return <div>{todoList}</div>;
	}
}

export default TodoItemList;