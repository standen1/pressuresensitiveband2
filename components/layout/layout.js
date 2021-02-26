import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import Header from '../header/header';
import Footer from '../footer/footer';
import Transition from "../transition/transition" 

//These 2 components represent the main menus.  They are loaded dynamically
//based on the screen size.  SidebarNav contains the burger icon menu for
//mobile devices/smaller screens and TableOfContents is the menu for 
//larger screens.
const SidebarNav = dynamic(() => import('../sidebarNav/sidebarNav'));
const TableOfContents = dynamic(() => import('../tableOfContents/tableOfContents'));

export default function Layout(props) {
	const router = useRouter();
	//Create a variable that returns whichever component
	//is rendered based on the screen size.
	let smallScreen = useMediaQuery(900);
	let menu = smallScreen ? <SidebarNav /> : <TableOfContents />;

	return (
		<>
			<Header />
			 
			<Div>
				<Transition location={router.pathname}>
					<div className="pageContent">{props.children}</div>
				</Transition>
				<div className="sidebar">
					{menu}

				</div>
			</Div>
			<Footer />
		</>
	);
}

// Hook for checking the screen size for dynamically rendering
//either the tableOfContents component for larger screens or
//the sidebarNav component(hamburger icon and menu) for smaller
//screens.

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

//Styles

const Div = styled.div`
	display: grid;
	grid template columns: 725px 1fr;

	@media (max-width: 900px) {
    	display: flex;
  	}

	div.pageContent {
		grid-column-start: 1;
		grid-column-end: span 2;
		display: flex;
		flex-direction: column;
		margin-bottom: 60px;
	}

	@media (max-width: 900px) {
		div.pageContent {
			margin: 0 auto 60px;
		}
	}

	div.sidebar {
		grid-column-start: 3;
		display: flext;
		flex-direction: column;
	}
`;