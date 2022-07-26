import * as React from 'react'
import Layout from '../components/layout'

// markup
const ContactPage = ({ children }) => {
  return (
    <Layout>
      <section className="bg-white -mt-12 py-16">
        <h1 className="text-center uppercase text-black text-4xl font-bold  leading-none tracking-normal">
          Contact Me
        </h1>
        <div className="flex flex-row items-center justify-center py-4">
          <span className="h-1 w-24 bg-black rounded-full mx-2"></span>
          <svg
            className="h-12 fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M6.1 21.98a1 1 0 0 1-1.45-1.06l1.03-6.03-4.38-4.26a1 1 0 0 1 .56-1.71l6.05-.88 2.7-5.48a1 1 0 0 1 1.8 0l2.7 5.48 6.06.88a1 1 0 0 1 .55 1.7l-4.38 4.27 1.04 6.03a1 1 0 0 1-1.46 1.06l-5.4-2.85-5.42 2.85zm4.95-4.87a1 1 0 0 1 .93 0l4.08 2.15-.78-4.55a1 1 0 0 1 .29-.88l3.3-3.22-4.56-.67a1 1 0 0 1-.76-.54l-2.04-4.14L9.47 9.4a1 1 0 0 1-.75.54l-4.57.67 3.3 3.22a1 1 0 0 1 .3.88l-.79 4.55 4.09-2.15z" />
          </svg>
          <span className="h-1 w-24 bg-black rounded-full mx-2"></span>
        </div>
        <form className="px-6 pb-12 max-w-2xl mx-auto">
          <div className="flex items-center border-b border-b-2 border-gray-400 py-10">
            <input
              className="appearance-none bg-transparent border-none w-full placeholder-gray-700 mr-3 py-1 leading-tight text-2xl focus:outline-none"
              type="text"
              placeholder="Name"
              aria-label="Name"
            />
          </div>
          <div className="flex items-center border-b border-b-2 border-gray-400 py-10">
            <input
              className="appearance-none bg-transparent border-none w-full placeholder-gray-700 mr-3 py-1 leading-tight text-2xl focus:outline-none"
              type="text"
              placeholder="Email Address"
              aria-label="Email Address"
            />
          </div>
          <div className="flex items-center border-b border-b-2 border-gray-400 py-10">
            <input
              className="appearance-none bg-transparent border-none w-full placeholder-gray-700 mr-3 py-1 leading-tight text-2xl focus:outline-none"
              type="text"
              placeholder="Phone Number"
              aria-label="Phone Number"
            />
          </div>
          <div className="flex items-center border-b border-b-2 border-gray-400 py-10">
            <label>
              <textarea
                className="appearance-none border-none w-full placeholder-gray-700 mr-3 py-1 leading-tight text-2xl focus:outline-none"
                rows="5"
                placeholder="Message"
              ></textarea>
            </label>
          </div>
          <div className="py-5">
            <button className="bg-green-500 px-8 py-5 rounded-lg text-white">
              Send
            </button>
          </div>
        </form>
      </section>
    </Layout>
  )
}

export default ContactPage
