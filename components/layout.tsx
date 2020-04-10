import { Navbar } from "./navbar"

interface IProps {
	children: JSX.Element
}

export const Layout = (props:IProps) => {
	return(
		<>
			<Navbar/>
			{props.children}
		</>
	)
}