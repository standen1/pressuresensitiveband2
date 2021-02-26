import Link from 'next/link';
import styled from 'styled-components';

export default function footer() {
	return (
		<Footer>
			<div>
				<h5>MENU:</h5>
				<Link href="/" >
					<a>Home</a>
				</Link>
				<Link href="/events">
					<a>Events</a>
				</Link>
				<Link href="/contact">
					<a>Contact</a>
				</Link>
			</div>

			<div>
				<h5>LISTEN:</h5>
				<a target="_blank" rel="noopener noreferrer" href="https://pressuresensitive.bandcamp.com/">Bandcamp</a>
				<a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/album/2cA09yBbKtHM3stE5yESbZ?si=UiFJS-_iTjCL8JNhYbTcGw">Spotify</a>
				<a target="_blank" rel="noopener noreferrer" href="https://music.apple.com/us/album/right-supremacy-single/1487890059">Apple</a>
				<a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B081J21GM9/ref=sr_1_2?keywords=Pressure+Sensitive&qid=1573862635&s=dmusic&search-type=ss&sr=1-2">Amazon</a>
			</div>

			<div>
				<h5>LEGAL:</h5>
				<Link href="/privacy-policy" >
					<a>Privacy Policy</a>
				</Link>
				<Link href="/credits">
					<a>Credits</a>
				</Link>
			</div>

			<div>
				<h5>AFFILIATES:</h5>
				<a target="_blank" rel="noopener noreferrer" href="https://www.keenanarts.com/">Keenan Arts</a>
				<a target="_blank" rel="noopener noreferrer" href="https://discodeathbots.com/">Disco Death Bots</a>
				<a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/fugarwe">Fugarwe</a>

			</div>

			<div>
				<h5>SOCIAL:</h5>
				<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/pressuresensitiveband/">Facebook</a>
				<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pressuresensitiveband/">Instagram</a>
			</div>

		</Footer>
	);
}

const Footer = styled.footer`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	position: abolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 300px;
	background-color: #2e2e2e;
	color: #fff;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	padding-top: 25px;

	@media (max-width: 900px) {
    	max-height: 400px;
  	}

	div {
		display: flex;
		flex-direction: column;
		margin: 0 20px 20px;
	}

	div h5 {
		font-size: 1em;
		padding: 0 0 8px;
		margin: 0;
	}

	div a {
		margin: 3px;
		transition: color 0.3s linear;
	}

	div a:hover {
		color: #B784A7;
    	cursor: pointer;
	}
`;
