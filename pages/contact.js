//import Head from 'next/head';
import styled from 'styled-components';

import MetaInfo from '../components/metaInfo/metaInfo';
import ContactForm from '../components/contactForm/contactForm';

export default function events() {
	return (
		<>
		<MetaInfo 
	        title="Pressure Sensitive | Contact"
	        desc="For booking or any other inquiries, contact Pressure Sensitive."
	        canonical="contact" />
		<Div>
			<h1>Contact</h1>
			<ContactForm />
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

	a {
		font-size: 1.3em;
		font-weight: 500;
		transition: color 0.3s linear;
	}

	a:hover {
		color: #89667c;
	}
`;
