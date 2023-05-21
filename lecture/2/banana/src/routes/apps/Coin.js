import { useEffect, useState } from "react";

export default function Coin() {
	const [isLoading, setIsLoading] = useState(true);
	const [coins, setCoins] = useState([]);

	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers")
			.then((response) => response.json())
			.then((json) => {
				setCoins(json);
				setIsLoading(false);
			});
	}, []);

	return (
		<>
			<h2>Coin Tracker</h2>
			<h3> total number for now : {coins.length}</h3>
			<div>
				<p>{isLoading ? "On Loading Process..." : null}</p>
				<ul>
					{coins.map((coin, index) => {
						return (
							<li key={index}>
								{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}
