import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pressure Sensitive : Music</title>
        <meta name="description" 
              content="Pressure Sensitive are a hard rock band based out of San Diego, California and Denver, Colorado." />

        <meta property="og:title" content="Pressure Sensitive" />
        <meta property="og:url" content="http://www.pressuresensitiveband.com/index.htm" />
        <meta property="og:image" content="http://pressuresensitiveband.com//protest.jpg" />
        <meta property="og:description" content="Pressure Sensitive are a hard rock band based out of San Diego, California and Denver, Colorado." />

        <meta itemprop="name" content="Pressure Sensitive" />
        <meta itemprop="description" content="Pressure Sensitive are a hard rock band based out of San Diego, California and Denver, Colorado." />
        <meta itemprop="image" content="http://pressuresensitiveband.com//protest.jpg" />
      </Head>
      <Main>
        <Image
        src="/protest.jpg"
        alt="People in protest during BLM movement."
        width={650}
        height={433.6}
      />
      <h3>Pressure Sensitive releases new album "Agent Orange" on March 27, 2020, featuring
      single "Right Supremacy."</h3>
      <h5>March 27, 2020</h5>
      <p>Pressure Sensitive have released their debut album titled "Agent Orange" on March 27, 2020.  The album is self-released 
        through <a target="_blank" rel="noopener noreferrer" href="https://pressuresensitive.bandcamp.com/">BandCamp</a>.  
        Due to the COVID-19 pandemic and the impact it has had on so many people, the band have set the price 
        as pay-what-you-can.  This way, individuals who are struggling financially can have a listen without having to 
        break the bank.</p>
      <p>While a couple of songs from the album had been written just after the 2016 U.S. Presidential Election, the bulk of the
        album was written over the summer of 2019 in Denver, Colorado.  It features themes surrounding the political climate
        in the United States at the time and its effects on normal, everyday people.  The artork for the album was created by 
        James Keenan of <a target="_blank" rel="noopener noreferrer" href="https://www.keenanarts.com/">Keenan Arts</a>, 
        a graphic design artist and painter based out of Laguna Beach, California.</p>
      <p>The first single from the album, titled "Right Supremacy," is available on all major online streaming services 
      and retailers.  If you would like to listen to the full album, it is currently only available on 
      <a target="_blank" rel="noopener noreferrer" href="https://pressuresensitive.bandcamp.com/album/agent-orange"> BandCamp </a> 
      but will be released on all major platforms in 2021.</p>
      </Main>
    </>
  )
}

const Main = styled.div`
  max-width: 650px;
  box-size: border-box;
  padding: 10px;

  a {
    font-size: 1.2rem;
    font-weight: 600;
    opacity: 0.8;
    transition: color 0.3s linear;
  }

  a:hover {
    cursor: pointer;
    color: #702963;
  }
  
`;
