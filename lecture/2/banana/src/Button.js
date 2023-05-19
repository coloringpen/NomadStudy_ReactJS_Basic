import PropTypes from "prop-types";
import styled from "./Button.module.css";

function Button({ text }) {
	return (
		<div>
			<button className={styled.title}>{text}</button>
		</div>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Button;
