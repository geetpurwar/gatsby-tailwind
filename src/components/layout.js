import * as React from 'react'
import Header from './header'
import Footer from './footer'
import Subfooter from './subfooter'

const Layout = ({ children }) => {
  return (
    <div className="subpixel-antialiased font-Montserrat ">
      <Header />
      <main>
        {children}
        <Subfooter />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
