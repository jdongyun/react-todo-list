import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;

    }
    render() {
        const { todos, onToggle, onRemove, onChange, onEditSubmit } = this.props;


        const todoList = todos.map(
            ({id, color, text, checked, editing}) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    color={color}
                    key={id}
					onChange={onChange}
					editing={editing}
					onEditSubmit={onEditSubmit}
                    />
            )
        )
        return (
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoItemList