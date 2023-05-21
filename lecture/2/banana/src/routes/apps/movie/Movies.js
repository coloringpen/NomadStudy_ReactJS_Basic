import { useEffect, useState } from "react";
import Movie from "../../../components/movie/Movie";

export default function Movies() {
	const [isLoading, setIsLoading] = useState(true);
	const [movies, setMovies] = useState([]);

	const getMovies = async () => {
		const response = await fetch(
			`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
		);
		const json = await response.json();
		setMovies(json.data.movies);
		setIsLoading(false);
		/** useEffect 내부의 코드 실행이 끝나기 전에 setIsLoading에서 상태변화가 일어났으므로,
		 * 이럴 때 setMovies코드가 한 번 더 실행되게 됨.
		 */
	};

	useEffect(() => {
		getMovies();
	}, []);

	console.log(movies);

	return (
		<>
			{isLoading
				? "On Loading Process..."
				: movies.map((movie) => {
						return (
							<div key={movie.id}>
								<Movie
									id={movie.id}
									title={movie.title}
									coverImg={movie.medium_cover_image}
									summary={movie.summary}
									genres={movie.genres}
								/>
							</div>
						);
				  })}
		</>
	);
}
