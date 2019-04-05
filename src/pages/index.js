import React from "react"

import Layout from "../components/layout"
import Image from "../components/Image/Image"
import SEO from "../components/seo"

// Legacy Style Example
// import "../scss/App.scss"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="body__title">Instructions</h1>
    <p className="body__content">There are two scss files, <strong>Image.scss</strong> and <strong>App.scss</strong>. </p>

    <ul>
      <li>Convert all of the styles within these two files into CSS Modules (move as needed)</li>
      <li>Take note of the issue in the comment in Image.scss</li>
    </ul>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
