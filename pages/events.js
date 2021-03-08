//import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';

import MetaInfo from '../components/metaInfo/metaInfo';

export default function Events() {
	return (
		<>
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

