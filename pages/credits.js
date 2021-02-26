import Head from 'next/head';
import styled from 'styled-components';

export default function credits() {
	return (
		<>
		<Head>
	    	<title>Pressure Sensitive : Contact</title>
	    	<meta name="description" 
              content="List of credits and links in relation to Pressure Sensitive Band and affiliates." />

            <meta property="og:title" content="Pressure Sensitive" />
	        <meta property="og:url" content="http://www.pressuresensitiveband.com/credits.htm" />
	        <meta property="og:image" content="http://pressuresensitiveband.com//protest.jpg" />
	        <meta property="og:description" content="List of credits and links in relation to Pressure Sensitive Band and affiliates." />

	        <meta itemprop="name" content="Pressure Sensitive" />
	        <meta itemprop="description" content="List of credits and links in relation to Pressure Sensitive Band and affiliates." />
	        <meta itemprop="image" content="http://pressuresensitiveband.com//protest.jpg" />
	    </Head>
		<Div>
			<h1>Credits</h1>
			<div>
				<h5>Pressure Sensitive are:</h5>
				<p>Sean Standen : Guitars, Bass, Vocals</p>
				<p>Ben Harris : Drums, Keys, Vocals</p>
			</div>
			<div>
				<h5>Album Artwork:</h5>
				<p>James Keenan : Keenan Arts</p>
				<a href="https://www.keenanarts.com/">keenanarts.com</a>
			</div>
			<div>
				<h5>Website and Content Creation:</h5>
				<p>Sean Standen</p>
			</div>
			<div>
				<h5>Images:</h5>
				<p>"Crowd of Protesters Holding Signs and Kneeling" by Life Matters.</p>
				<p>Courtesy of <a href="https://www.pexels.com/@life-matters-3043471">Life Matters </a>
				  and <a href="https://www.pexels.com/">Pexels</a>.</p>
				<p>Source: <a href="https://www.pexels.com/photo/crowd-of-protesters-holding-signs-and-kneeling-4614149/">
					https://www.pexels.com/photo/crowd-of-protesters-holding-signs-and-kneeling-4614149/</a></p>
			</div>
		</Div>
		</>
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
