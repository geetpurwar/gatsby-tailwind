import * as React from 'react'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

// markup
const ContactPage = () => {
  return (
    <Layout>
      <section className="bg-green-500 py-32 ">
        <figure className="container px-16 pt-12 mx-auto">
          <img
            className="mb-12 h-64 mx-auto"
            src="https://picsum.photos/200"
            alt=""
          />
        </figure>
        <h1 className="text-center uppercase text-white text-5xl lg:text-6xl font-bold  leading-none tracking-normal">
          Post List
        </h1>
        <div class="text-center">
          <ul>
            <li>
              <Link to="post-1">Post 1</Link>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
