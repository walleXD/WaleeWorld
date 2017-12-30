import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Test = styled.div`
  color: red;
`

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Test>Hello</Test>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
