import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NotFound() {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 3000);
	}, []);

	return (
		<div className='not-found'>
			<h1>404</h1>
			<h2>Ooops! That page cannot be found 🙍‍♀️</h2>
			<p>
				You are being redirected to the{' '}
				<Link href='/'>
					<a>homepage</a>
				</Link>
				...
			</p>
			<style jsx>{`
				.not-found {
					background: #ffffff;
					padding: 30px;
					box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
					transform: rotateZ(-1deg);
				}
				h1 {
					font-size: 3em;
				}
			`}</style>
		</div>
	);
}
