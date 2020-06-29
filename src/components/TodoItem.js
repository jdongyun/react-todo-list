import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			edit: this.props.text
		};
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	}

	render() {
		const {
			text,
			checked,
			id,
			onToggle,
			onRemove,
			color,
			editing,
			onEdit,
			onEditSubmit
		} = this.props;

		if (editing) {
			return (
				<form
					className="edit-form todo-item"
					onSubmit={e => {
						e.preventDefault();
						onEditSubmit(id, this.state.edit);
					}}
				>
					<input
						type="text"
						name="edit"
						value={this.state.edit}
						onChange={this.handleChange}
						style={{ color }}
					/>
					<button type="submit">수정</button>
				</form>
			);
		} else {
			return (
				<div className="todo-item">
					<div
						className={`todo-text ${checked && 'checked'}`}
						style={{ color }}
						onClick={() => onToggle(id)}
					>
						<div>{text}</div>
					</div>
					<div
						className="remove"
						onClick={e => {
							e.stopPropagation();
							onRemove(id);
						}}
					>
						&times;
					</div>
					<div className="edit" onClick={() => onEdit(id)}>
						&#9998;
					</div>
					{checked && <div className="check-mark">✓</div>}
				</div>
			);
		}
	}
}

export default TodoItem;