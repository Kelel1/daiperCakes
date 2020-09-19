const Navbar = () => (
  <header className="navbar">

    <nav className="nav_navigation">
      <div></div>
      <div className="nav_logo"><a href="/">Daiper-Cakez Logo</a></div>
      <div className="space"></div>
      <div className="nav_items">
        <ul>
          <li><a href="/">Cakes</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>
    </nav>
    <style jsx>{`
      .navbar {
        box-shadow: 0px 2px 5px 10px rgba(0, 0, 0, 0.2)
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
    
    `}</style>

  </header>
  
)

export default Navbar