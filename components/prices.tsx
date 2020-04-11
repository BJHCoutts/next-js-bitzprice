export const Prices = (props) => {
	return(
		<>
			<h2>Prices</h2>
			<small>{props.bpi.disclaimer}</small>
			<h3>Last updated @: {props.bpi.time.updated}</h3>
			<ul>
				<li>
					Bitcoin rate for {props.bpi.bpi.USD.description} = {props.bpi.bpi.USD.rate_float}{props.bpi.bpi.USD.code}
				</li>				
				<li>
					Bitcoin rate for {props.bpi.bpi.GBP.description} = {props.bpi.bpi.GBP.rate_float}{props.bpi.bpi.GBP.code}
				</li>				
				<li>
					Bitcoin rate for {props.bpi.bpi.EUR.description} = {props.bpi.bpi.EUR.rate_float}{props.bpi.bpi.EUR.code}
				</li>				
				{console.log(props.bpi.bpi)}
				{/* why wont map work? */}
			</ul>

		</>
	)
}