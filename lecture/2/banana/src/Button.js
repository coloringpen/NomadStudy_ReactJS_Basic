import PropTypes from "prop-types";

function Button({ text }) {
	return (
		<div>
			<button
				style={{
					backgroundColor: "tomato",
					color: "white",
				}}
			>
				{text}
			</button>
		</div>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Button;
