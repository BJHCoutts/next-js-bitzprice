import { Layout } from '../components/layout'
import { Prices } from '../components/prices'

const Index = (props) => {
	for (let property in props) {
		console.log(props[property])
	}
	// console.log(`props: ${props}`)
	return(
		<Layout>
			<>
				<h1>
					Welcome to BitzPrice
				</h1>
				{/* <span>BPI ={props.bpi}</span> */}
				<Prices bpi={props.bpi}/>
			</>
		</Layout>
	)
}

Index.getInitialProps = async () => {
	const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
	console.log(`res:${res}`)
	const data = await res.json()
	console.log(`data:${data}`)

	return {bpi: data}
}

export default Index

// npm install --save-dev typescript @types/react @types/node



