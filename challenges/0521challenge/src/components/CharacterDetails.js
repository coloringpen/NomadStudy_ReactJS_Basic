import PropTypes from "prop-types";
import titleStyle from "../styles/Title.module.css";
import CharDetails from "../styles/CharDetails.module.css";

export default function CharacterDetails({
	name,
	thumbnail,
	comics,
	events,
	series,
	stories,
	urls,
}) {
	return (
		<>
			<div>
				<h1 className={titleStyle.title}>{name}</h1>
				<div>
					<img src={`${thumbnail}.jpg`} alt={name} />
				</div>
				<div className={CharDetails.detailListsFrame}>
					<div className={CharDetails.detailLists}>
						<h3 className={CharDetails.detailListsTitles}>Comics</h3>
						<ul>
							{comics.map((comic, index) => {
								return <li key={index}>{comic.name}</li>;
							})}
						</ul>
					</div>
					<div className={CharDetails.detailLists}>
						<h3 className={CharDetails.detailListsTitles}>Events</h3>
						<ul>
							{events.map((item, index) => {
								return <li key={index}>{item.name}</li>;
							})}
						</ul>
					</div>
					<div className={CharDetails.detailLists}>
						<h3 className={CharDetails.detailListsTitles}>Series</h3>
						<ul>
							{series.map((item, index) => {
								return <li key={index}>{item.name}</li>;
							})}
						</ul>
					</div>
					<div className={CharDetails.detailLists}>
						<h3 className={CharDetails.detailListsTitles}>Stories</h3>
						<ul>
							{stories.map((item, index) => {
								return <li key={index}>{item.name}</li>;
							})}
						</ul>
					</div>
					<div className={CharDetails.detailLists}>
						<h3 className={CharDetails.detailListsTitles}>Links</h3>
						<ul>
							{urls.map((url, index) => {
								return (
									<li key={index}>
										<a href={url.url}>{`${url.type}`}</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

CharacterDetails.propTypes = {
	name: PropTypes.string.isRequired,
	thumbnail: PropTypes.string.isRequired,
	comics: PropTypes.array.isRequired,
	events: PropTypes.array.isRequired,
	series: PropTypes.array.isRequired,
	stories: PropTypes.array.isRequired,
	urls: PropTypes.array.isRequired,
};
