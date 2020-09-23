import { FaBars, FaTimes} from 'react-icons/fa';
import React, { useState } from 'react';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  
  return (
    <header className="navbar">
      <nav className="nav_navigation">
        <div></div>
        <div className="nav_logo"><a href="/">Daiper-Cakez</a></div>
        <div className="space"></div>
        <div className="nav_items">
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Order</a></li>       
          </ul>               
        </div>
        <div className="burger" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: #16f4d7;
          height: 60px
        }
        .nav_logo a {
          color: white;
          text-decoration: none;
          font-size: 1.5rem;
        }
        .nav_navigation {
          display: flex;
          height: 100%;
          align-items: center;
          padding: 0 1rem;
        }
        .nav_items ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
        } 
        .nav_items li {
          padding: 0 0.5rem;
        }
        .nav_items a {
          color: white;
          text-decoration: none;
        }

        .nav_items a:hover,
        .nav_items a:active {
          color: #fcb8f4;
        }
        .space {
          flex: 1;
        }
        .burger {
          color: pink;
        }

        @media (max-width: 768px) {
          .nav_items {
            display: none;
          }
        }

        @media (min-width: 768px) {
          .burger {
            display: none;
          }
        }
      
      `}</style>

    </header>
  )
}

export default Navbar