// src/pages/_app.js
import '../styles/globals.css'
import Navbar from '../components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />      {/* Shows on every page */}
      <main className="pt-14">  {/* Add padding-top to account for fixed navbar */}
        <Component {...pageProps} />  {/* The current page */}
      </main>
    </>
  )
}
