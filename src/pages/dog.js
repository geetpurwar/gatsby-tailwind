import * as React from 'react'

// markup
const ContactPage = ({ serverData }) => {
  const { dogImage } = serverData
}

const Page = ({ serverData }) => {
  const { dogImage } = serverData
  // Use dogImage in your page...
  return <h1>Dog</h1>
}

export async function getServerData() {
  const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
  const data = await res.json()

  return {
    props: {
      dogImage: data,
    },
  }
}

export default ContactPage
