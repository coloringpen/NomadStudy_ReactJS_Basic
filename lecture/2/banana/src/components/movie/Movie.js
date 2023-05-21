import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export default function Movie({ id, title, coverImg, summary, genres }) {
	return (
		<>
			<Link to={`apps/MoviesMain/${id}`}>
				<h3>{title}</h3>
				<img src={coverImg} alt={title} />
			</Link>
			<ul>
				{genres?.map((genre, index) => {
					return <li key={index}>{genre}</li>;
				})}
			</ul>
			<p>{summary}</p>
		</>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	coverImg: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string),
};
