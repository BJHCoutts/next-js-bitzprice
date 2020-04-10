import Link from 'next/link'

export const Navbar = () => {
	return(
		<>
			<nav>
				<Link href="/"><a>Home</a></Link>
				<Link href="/about"><a>About</a></Link>
			</nav>
			<style jsx>{`
				nav {
					background-color:slategrey;
				}
				a {
					color: white;
				}
			`}</style>
		</>
	)
}