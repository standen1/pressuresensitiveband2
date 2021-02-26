import styled from 'styled-components';
import Image from 'next/image';

export default function albumLinks() {
  return (
	  <Links>
	  	<a target="_blank" rel="noopener noreferrer" href="https://pressuresensitive.bandcamp.com/album/agent-orange">
	  		<Image
	  			src="/agent-orange.jpg"
        		alt="Agent Orange Album Cover Artwork"
	  			width={250}
	  			height={250}
	  			className="social"
	  			lazy />
	  	</a>
	  	<a target="_blank" rel="noopener noreferrer" href="https://pressuresensitive.bandcamp.com/track/right-supremacy">
	  		<Image
	  			src="/right-supremacy.jpg"
        		alt="Right Supremacy Single Artwork"
	  			width={250}
	  			height={250}
	  			className="social"
	  			lazy />
	  	</a>
	  	</Links>
  );
}

const Links = styled.div`
	display: flex;
	flex-direction: column;
	

	a {
		padding: 10px 0;
		margin: 15px 0;
		overflow: visible;
	}

	a:hover {
		cursor: pointer
	}

	a .social {
		opacity: 0.9;
		filter: url(filters.svg#grayscale);
		filter: gray;
		-webkit-filter: grayscale(1);
		transition: all 0.3s ease-in-out;
		-webkit-transition: all .3s ease-in-out;  
		width: 100%;
		height: auto;
	}

	a .social:hover {
		opacity: 1;
		filter: none;
      	-webkit-filter: grayscale(0);
	}
`;

