import Layout from '../components/layout'

export default function About() {
	return (
		<Layout home>
			<div>About</div>
		</Layout>
	)
}

export async function getStaticProps(context) {
	return {
		redirect: {
			destination: '/',
			permanent: true, // triggers 308
		},
	}
	// return {
	// 	notFound: true, // triggers 404
	// }
}
