const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col1">
          <h2>Links</h2>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Cakez</a></li>
            <li><a href="">About</a></li>
          </ul>
        </div>
        {/* <div className="space"></div> */}
        <div className="col2">
          <h2>Contact</h2>
          <ul>
            <li><a href="">Phone</a></li>
            <li><a href="">Email</a></li>
            <li><a href="">Instagram</a></li>
            <li><a href="">Facebook</a></li>
          </ul>
        </div>        
      </div>
    </div>
    <style jsx>{`
      .footer {
        padding: 20px;
        background: #16f4d7;
        position: absolute;
        bottom: 0;
        width: 100%;
      }
      
      .col1,
      .col2, ul, a {
        text-decoration: none;
        list-style: none;
        color: white;
        margin: 0 auto;
      }   
      .row {
        display: flex;
      }
      .space {
        flex: 1;
      } 
      .col2 {
        
      }


    `}</style>
    

  </footer>
)

export default Footer