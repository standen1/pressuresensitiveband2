//import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';

import MetaInfo from '../components/metaInfo/metaInfo';

export default function Events() {
	return (
		<>
		{
		/* <Head>
	        <title>Pressure Sensitive : Events</title> 
	        <meta name="description" 
              content="Live Music and Events calendar for Pressure Sensitive Band." /> 

            <meta property="og:title" content="Pressure Sensitive" />
	        <meta property="og:url" content="http://www.pressuresensitiveband.com/events.htm" />
	        <meta property="og:image" content="http://pressuresensitiveband.com/protest.jpg" />
	        <meta property="og:description" content="Live Music and Events calendar for Pressure Sensitive Band." />

	        <meta itemprop="name" content="Pressure Sensitive" />
	        <meta itemprop="description" content="Live Music and Events calendar for Pressure Sensitive Band." />
	        <meta itemprop="image" content="http://pressuresensitiveband.com/protest.jpg" />
	    </Head> */
	}
	    <MetaInfo 
	        title="Pressure Sensitive | Events"
	        desc="Live Music and Events calendar for Pressure Sensitive Band."
	        canonical="events" />
		<Div>
			<Image
		        src="/seanLive.jpg"
		        alt="Sean performing live"
		        width={650}
		        height={500}
		      />
			<h1>Events</h1>
			<p>There are currently no events scheduled at this time.  
			Please check back at another time.</p>
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

	p {
		font-size: 1.2rem;
	}
`;

