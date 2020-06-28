import React, { Component } from 'react'
import './TodoItem.css'

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return true;
		//return this.props.checked !== nextProps.checked
    }
	
    render() {
        const { text, checked, id, onToggle, onRemove, color, editing, onChange, onEditSubmit} = this.props;

		if(editing) {
			return (
				<div>
					<form onSubmit={(e) => {
							e.preventDefault();
							onEditSubmit(id)
						}}>
						<input type="text" name="edit" defaultValue={text} onChange={onChange}/>
						<button type="submit">수정</button>
					</form>
				</div>
			)
		} else {
			return (
				<div className="todo-item" onClick={() => onToggle(id)}>
					<div className="remove" onClick={(e) => {
						e.stopPropagation();
						onRemove(id)
					}}>&times;</div>
					<div className={`todo-text ${checked && 'checked'}`} style={{color}}>
						<div>{text}</div>
					</div>
					{
						checked && (<div className="check-mark">✓</div>)
					}
				</div>
			)
		}
        
    }

    
}

export default TodoItem;