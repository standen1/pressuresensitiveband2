import styled from 'styled-components';

export default function Copyright() {
	return (
		<Div>
			<p>{'\u00A9'}Pressure Sensitive <br />
			<strong>{new Date().getFullYear()}</strong>
			</p>	
		</Div>
	);
}

const Div = styled.div`
	width: 80px;
	height: 60px;
	background-color: #2e2e2e;
	color: #fff;
	text-align: center;
	margin: 10px;

	p {
		font-size: 0.5em;
		padding: 15px 0 5px 0;
		margin: 0;
	}

	strong {
		font-size: 2em;
		padding: 0;
		margin: 0;
	}
`;