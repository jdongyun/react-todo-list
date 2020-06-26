import React from 'react'
import './Palette.css'

const Palette = ({ colors, color_selected, onClick }) => {
    const colorList = colors.map((color, index) => (
        <Color 
            color={color} id={index} key={index}
            active={(index === color_selected)}
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
        <div className="color" style={{ background: color }}
            onClick={() => onClick(color)}
        ></div>
    )
}

export default Palette