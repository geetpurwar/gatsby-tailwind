import * as React from 'react'
import Layout from '../components/layout'

export const Head = () => (
  <>
    <title>Hello World</title>
    <meta name="description" content="Hello World" />
  </>
)

// markup
const IndexPage = () => {
  return (
    <Layout>
      <section className="bg-green-500 py-32 ">
        <figure className="container px-16 pt-12 mx-auto">
          <img
            className="mb-12 h-64 mx-auto"
            src="https://picsum.photos/400"
            alt=""
          />
        </figure>
        <h1 className="text-center uppercase text-white text-5xl lg:text-6xl font-bold  leading-none tracking-normal">
          Start GatsbyJS + Tailwind
        </h1>
        <div className="flex flex-row items-center justify-center py-4">
          <span className="h-1 w-24 bg-white rounded-full mx-2"></span>
          <svg
            className="h-12 fill-current text-white "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M6.1 21.98a1 1 0 0 1-1.45-1.06l1.03-6.03-4.38-4.26a1 1 0 0 1 .56-1.71l6.05-.88 2.7-5.48a1 1 0 0 1 1.8 0l2.7 5.48 6.06.88a1 1 0 0 1 .55 1.7l-4.38 4.27 1.04 6.03a1 1 0 0 1-1.46 1.06l-5.4-2.85-5.42 2.85zm4.95-4.87a1 1 0 0 1 .93 0l4.08 2.15-.78-4.55a1 1 0 0 1 .29-.88l3.3-3.22-4.56-.67a1 1 0 0 1-.76-.54l-2.04-4.14L9.47 9.4a1 1 0 0 1-.75.54l-4.57.67 3.3 3.22a1 1 0 0 1 .3.88l-.79 4.55 4.09-2.15z" />
          </svg>
          <span className="h-1 w-24 bg-white rounded-full mx-2"></span>
        </div>
        <p className="px-12 text-center text-white text-xl font-normal font-sans">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </section>
    </Layout>
  )
}

export default IndexPage
