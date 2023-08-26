import styled from 'styled-components';

export const Button = styled.button`
    --x: 50%;
	--y: 50%;
	
	width: 195px;
	margin: 5px;

	position: relative;
	appearance: none;
	padding: 1em 2em;
	color: white;
	cursor: pointer;
	outline: none;

	border-radius: 100px;
	border: 2px solid transparent;
	background: linear-gradient(#000, #000) padding-box, radial-gradient(farthest-corner at var(--x) var(--y), #00C9A7, #845EC2) border-box;

	&:hover {}
}`;

export default Button;
