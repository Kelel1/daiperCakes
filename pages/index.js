import Head   from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Head>
        <title>Daiper Cakez</title>
      </Head>

      <main className="intro">
        <p className="welcome">
          Welcome to Daiper Cakes!
        </p>
        <p className="copy">
          Get the perfect gift for your upcoming baby shower.
          Choose from any of our pre-made diaper cakes or call or email to
          speak to a representative about a more customized design.
          
          Send a gift that is both unique and practical, Order today!
        </p>
      </main>
      <Footer/>      
      <style jsx>{``}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          background-color: #fceff6;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        .intro,
        .welcome {
          color: #16f4d7;
          text-align: center;          
        }
        .copy {
          padding-top: 5%;
          padding-left: 10%;
          padding-right: 10%;
        }
      `}</style>
    </div>
  )
}
