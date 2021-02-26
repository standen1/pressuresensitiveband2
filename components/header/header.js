import Link from 'next/link';
import styled from 'styled-components';

import Copyright from '../copyright/copyright';




/**************************************************
				HEADER COMPONENT
Contains 'copy' which is the unicode for the copyright
character.  Also the title, and holds the navigation
component.
***************************************************/

export default function Header() {
	return (
		<HeaderDiv>
			<Copyright />
			<Link href="/">
				<a><h1>PRESSURE SENSITIVE</h1></a>
			</Link>
		</HeaderDiv>
	);
}

const HeaderDiv = styled.div`
	display: grid;
	grid-template-columns: 100px auto 100px;

	h1 {
		text-align: center;
		font-weight: 600;
		font-size: 3em;
		padding: 0;
		margin: 10px;
		transition: color 0.3s linear;
	}

	a:hover h1 {
    color: #702963;
    cursor: pointer;
  }

	@media (max-width: 700px) {
		h1 {
			font-size: 2rem;
		}
	}
`;
