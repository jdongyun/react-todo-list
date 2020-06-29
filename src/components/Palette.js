import React from 'react';
import './Palette.css';

const Palette = ({ colors, colorSelected, onClick }) => {
	const colorList = colors.map((color, index) => (
		<Color
			color={color}
			id={index}
			key={index}
			active={color === colorSelected}
			onClick={onClick}
		/>
	));
	return <div className="palette">{colorList}</div>;
};

const Color = ({ color, id, active, onClick }) => {
	return (
		<div
			className={`color ${active && 'active'}`}
			style={{ background: color }}
			onClick={() => onClick(color)}
		/>
	);
};

export default Palette;