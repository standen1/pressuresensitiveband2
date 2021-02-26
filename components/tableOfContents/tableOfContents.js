import Link from 'next/link';
import styled from 'styled-components';

import SocialMediaLinks from './socialMediaLinks';
import AlbumLinks from './albumLinks';

export default function tableOfContents() {
  return (
    <Div>
      <Menu right >
        <h5>Table of Contents:</h5>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/events">
          <a>Events</a>
        </Link>
        <a target="_blank" rel="noopener noreferrer" href="https://pressuresensitive.bandcamp.com/">Store</a>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </Menu>
      <SocialMediaLinks />
      <AlbumLinks />
      <Menu>
        <Link href="/credits">
          <a>Credits</a>
        </Link>
        <Link href="/privacy-policy">
          <a>Privacy Policy</a>
        </Link>
      </Menu>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  h5 {
    font-size: 1.5em;
    margin: 0 0 10px;
    padding: 0;
  }

  a {
    font-size: 1.4em;
    font-weight: 500;
    margin: 5px 0 5px 0;
    transition: all 0.3s linear;
  }

  a:hover {
    color: #702963;
    cursor: pointer;
  }

  padding: 10px;
  border-style: border-box;

`;