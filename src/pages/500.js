import * as React from 'react'
import Layout from '../components/layout'

export const Head = () => (
  <>
    <title>404</title>
    <meta name="description" content="500" />
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
          500 - Server Error
        </h1>
      </section>
    </Layout>
  )
}

export default IndexPage
