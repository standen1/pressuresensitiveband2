import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';


export default function SidebarNav(props) {
  return (
    
    <div className="DesktopOnly" >
    <Menu right >
      <Link href="/">
        <a className="menu-item">Home</a>
      </Link>
      <Link href="/events">
        <a className="menu-item" >Events</a>
      </Link>
      <a target="_blank" rel="noopener noreferrer" className="menu-item" href="https://pressuresensitive.bandcamp.com/">Store</a>
      <Link href="/contact">
        <a className="menu-item">Contact</a>
      </Link>
    </Menu>
    <style jsx>{`
      a {
        font-size: 1.8rem;
        text-transform: uppercase;
        padding: 0;
        margin: 1.5rem 0;
        font-weight: 400;
        letter-spacing: 0.5rem;
        color: #fff;
        text-decoration: none;
        transition: color 0.3s linear;
        border: none;
        list-style-type: none;
        outline: none;
      }

      a:hover {
        color: #B784A7;
        cursor: pointer;
        
      }
    `}</style>
    </div>
  );
};

