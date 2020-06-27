import React from 'react'
import './Palette.css'

const Palette = ({ colors, color_selected, onClick }) => {
	console.log(color_selected)
    const colorList = colors.map((color, index) => (
        <Color 
            color={color} id={index} key={index}
            active={(color === color_selected)}
            onClick={onClick}/>
        )
    )
    return (
        <div className="palette">
            {colorList}
        </div>
    )
}

const Color = ({ color, id, active, onClick }) => {
    return (
        <div className={`color ${active && 'active'}`}
			style={{ background: color }}
            onClick={() => onClick(color)}
        ></div>
    )
}

export default Palette