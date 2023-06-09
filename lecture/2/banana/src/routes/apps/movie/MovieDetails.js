import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
	const { id } = useParams();
	const getMovieDetails = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		console.log(json);
	};

	useEffect(() => {
		getMovieDetails();
	}, []);
	return (
		<>
			<h3>Movie Details</h3>
		</>
	);
}
