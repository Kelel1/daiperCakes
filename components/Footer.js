const Footer = () => (
  <footer className="footer">
    <div className="footer_main">
      <div className="footer_left">
        <h2>Links</h2>
        <li><a href="">Home</a></li>
        <li><a href="">Cakez</a></li>
        <li><a href="">About</a></li>
      </div>
      <div className="footer_center"><img src=""></img></div>
      <div className="footer_right">
        <h2>Contact</h2>
        <li><a href="">Phone</a></li>
        <li><a href="">Email</a></li>
        <li><a href="">Instagram</a></li>
        <li><a href="">Facebook</a></li>         
      </div>
    </div>
    <style jsx>{`
      .footer {
        padding: 20px;
        background: #16f4d7;
      }
      .footer_right {
        background: #16f4d7;
      }
      .footer_right,
      .footer_right li, a {
        text-decoration: none;
        list-style: none;
        color: white;
        text-align: center;
      }
      .footer_left,
      .footer_left a, li {
        text-decoration: none;
        list-style: none;
        color: white;    
        text-align: center;    
      }
      @media screen and (min-width: 960px){
        footer-center {
          display: flex;
          justify-content: space-evenly;
        }      
        .footer
      } 


    `}</style>
    

  </footer>
)

export default Footer