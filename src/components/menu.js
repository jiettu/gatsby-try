import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/blog">Blog</Link>
  </div>
)

export default Menu
