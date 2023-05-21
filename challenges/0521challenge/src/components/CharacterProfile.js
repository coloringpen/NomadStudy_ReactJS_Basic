import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import profileStyle from "../styles/CharProfile.module.css";

export default function CharacterProfile({ id, thumbnail, name, comics }) {
	return (
		<>
			<div className={profileStyle.charFrame}>
				<Link to={`/character/${id}`}>
					<img src={`${thumbnail}.jpg`} alt={name} />
					<h2 className={profileStyle.title}>{name}</h2>
				</Link>
				<div className={profileStyle.basicBlockSize}>
					<h3 className={profileStyle.comicText}>comics</h3>
					<ul>
						{comics
							.map((item, index) => {
								return <li key={index}>{item.name}</li>;
							})
							.slice(0, 3)}
					</ul>
				</div>
			</div>
		</>
	);
}

CharacterProfile.propTypes = {
	id: PropTypes.number.isRequired,
	thumbnail: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	comics: PropTypes.array.isRequired,
};
