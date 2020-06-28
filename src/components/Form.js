import React from 'react'
import './Form.css'

const Form = ({value, color, onChange, onSubmit, onKeyPress}) => {
    return (
        <form className="form" onSubmit={onSubmit}>
            <input type="text" value={value} style={{color}}
				required pattern=".*\S+.*"
                onChange={onChange} onKeyPress={onKeyPress}/>
			<button className="create-button">추가</button>
        </form>
    )
}

export default Form