import * as React from 'react'
import { Link } from 'gatsby'

const Header = ({ children }) => {
  return (
    <nav className="sticky top-0 h-20 bg-gray-800 p-5 sm:px-24 xl:px-64">
      <div className="mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="uppercase text-white text-xl xl:text-3xl font-bold whitespace-no-wrap font-Montserrat leading-normal tracking-tighter"
        >
          Start Tailwind
        </Link>
        <button className="md:hidden uppercase inline-flex items-center bg-green-500 px-3 py-2 rounded-lg text-white">
          Menu{' '}
          <svg
            className="h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          </svg>
        </button>
        <div className="hidden md:block">
          <Link
            to="/"
            className="px-4 uppercase text-white text-base font-bold whitespace-no-wrap font-Montserrat leading-normal tracking-tighter hover:text-green-500"
            activeClassName="text-green-500"
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            className="px-4 uppercase text-white text-base font-bold whitespace-no-wrap font-Montserrat leading-normal tracking-tighter hover:text-green-500"
            activeClassName="text-green-500"
            partiallyActive={true}
          >
            About
          </Link>
          <Link
            to="/posts"
            className="px-4 uppercase text-white text-base font-bold whitespace-no-wrap font-Montserrat leading-normal tracking-tighter hover:text-green-500"
            activeClassName="text-green-500"
            partiallyActive={true}
          >
            Posts
          </Link>
          <Link
            to="/contact"
            className="px-4 uppercase text-white text-base font-bold whitespace-no-wrap font-Montserrat leading-normal tracking-tighter hover:text-green-500"
            activeClassName="text-green-500"
            partiallyActive={true}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
