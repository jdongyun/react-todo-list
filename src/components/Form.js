import React from 'react'
import './Form.css'

const Form = ({value, color, onChange, onSubmit}) => {
    return (
        <form className="form" onSubmit={onSubmit}>
            <input type="text" name="input" value={value} style={{color}}
				required pattern=".*\S+.*"
                onChange={onChange} />
			<button className="create-button">추가</button>
        </form>
    )
}

export default Form