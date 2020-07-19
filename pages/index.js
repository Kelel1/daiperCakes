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

      <main>
        <h1>
          Welcome to Daiper Cakes!
        </h1>
      </main>

      <footer>
        
      </footer>

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
      `}</style>
    </div>
  )
}
