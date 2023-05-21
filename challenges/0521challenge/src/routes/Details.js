import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterDetails from "../components/CharacterDetails";

export default function Details() {
	const { id } = useParams();
	const [characterDetails, setCharacterDetails] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getCharacterDetails = async () => {
		const json = await (
			await fetch(
				`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
			)
		).json();
		setCharacterDetails(json.data.results[0]);
		setIsLoading(false); // 얘 덕분에 API요청이 끝날 때까지 화면을 채울 것이 있음.
	};

	useEffect(() => {
		getCharacterDetails();
	}, []);

	return (
		<>
			{isLoading ? (
				"On Loading Process..."
			) : (
				<CharacterDetails
					name={characterDetails.name}
					thumbnail={characterDetails.thumbnail.path}
					comics={characterDetails.comics.items}
					events={characterDetails.events.items}
					series={characterDetails.series.items}
					stories={characterDetails.stories.items}
					urls={characterDetails.urls}
				/>
			)}
		</>
	);
}
