import styled from 'styled-components';
import Image from 'next/image';

export default function socialMediaLinks() {
  return (
	  <Social>
	  	<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/pressuresensitiveband/">
	  		<Image
	  			src="/../public/images/facebook-icon.png"
        		alt="Facebook"
	  			width={65}
	  			height={65}
	  			className="social"
	  			lazy
	  			fixed
	  			 />
	  	</a>
	  	<a target="_blank" rel="noopener noreferrer" href="https://pressuresensitive.bandcamp.com/">
	  		<Image
	  			src="/../public/images/bandcamp-icon.png"
        		alt="Bandcamp"
	  			width={65}
	  			height={65}
	  			className="social"
	  			lazy
	  			fixed
	  			 />
	  	</a>
	  </Social>
  );
}

const Social = styled.div`
	display: flex;
	flex-direction: row;
	overflow: visible;
	a {
		display: inline-block;
		margin: 15px;
		width: 90px;
		height: 90px;
		padding: 15px;
	}
	

	img.social {
		padding: 10px;
		margin: 15px;
		opacity: 0.8;
		transition: all 0.3s ease-in-out;
		width: 100%;
		height: auto;
	}


	img.social:hover {
		
		opacity: 1;
		cursor: pointer;
	}
`;

