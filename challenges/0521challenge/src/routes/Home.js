import { useEffect, useState } from "react";
import titleStyle from "./../styles/Title.module.css";
import CharacterProfile from "../components/CharacterProfile";
import homeFrame from "../styles/HomeFrame.module.css";

export default function Home() {
	const [marvelCharacters, setMarvelCharacters] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const getMarvelCharacters = async () => {
		const json = await (
			await fetch(
				"https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
			)
		).json();
		setMarvelCharacters(json.data.results);
		setIsLoading(false);
	};

	useEffect(() => {
		getMarvelCharacters();
	}, []);

	console.log(marvelCharacters);

	return (
		<>
			{isLoading ? (
				"On Loading Process..."
			) : (
				<div>
					<h1 className={titleStyle.title}>Marvel Chracters</h1>
					<div className={homeFrame.frame}>
						{marvelCharacters.map((mCharacter) => {
							return (
								<div key={mCharacter.id}>
									<CharacterProfile
										id={mCharacter.id}
										thumbnail={mCharacter.thumbnail.path}
										name={mCharacter.name}
										comics={mCharacter.comics.items}
									/>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
}
