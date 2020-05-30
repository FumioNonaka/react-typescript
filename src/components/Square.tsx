import React from 'react';

// interface IProps {
type Props = {
	value: string,
	onClick: () => void
};
// const Square: React.FC<IProps> = (props) => {
const Square: React.FC<Props> = (props) => {
	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
};

export default Square;
