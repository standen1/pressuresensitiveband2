import styled from 'styled-components';
import Link from 'next/link';

export default function privacyPolicy() {
	return (
		<Div>
			<h1>Privacy Policy</h1>
			<h5>Who we are</h5>
			<p>Our website address is: https://pressuresensitiveband.com</p>
			<h5>What personal data we collect and why we collect it</h5>
			<p>When visitors use the contact form on our Contact page, the visitor's name and email address
				are stored in a database.  This is done through a third party service called Formspree.</p>
			<h5>Embedded content from other websites</h5>
			<p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). 
				Embedded content from other websites behaves in the exact same way as if the visitor has 
				visited the other website.</p>
			<p>These websites may collect data about you, use cookies, embed additional third-party tracking, 
			and monitor your interaction with that embedded content, including tracking your interaction 
			with the embedded content if you have an account and are logged in to that website.</p>
			<h5>What third parties we receive data from</h5>
			<p>We currently receive data from Google Analytics, Google ReCaptcha, Formspree, and WordPress.</p>
			<h5>If you have any concerns</h5>
			<p>Please feel free to contact Pressure Sensitive Band through the <Link href="/contact"><a>Contact</a></Link> page
				or email direct at <a href="mailto:pressuresensitive1989@gmail.com">pressuresensitive1989@gmail.com</a>.</p>
		</Div>
	);
}

const Div = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 650px;
  	box-size: border-box;
  	padding: 10px;

	h1 {
		font-size: 2.5em;
		font-weight: 600;
	}

	h5 {
		font-size: 1.4rem;
		padding-bottom: 0;
		margin-bottom: 0;
	}

	p {
		font-size: 1.2rem;
	}

	a {
		font-size: 1.3rem;
		font-weight: 600;
		opacity: 0.8;
		transition: color 0.3s linear;
	}

	a:hover {
		cursor: pointer;
		color: #702963;
	}
`;
