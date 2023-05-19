import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "./Layout"
import Education from "./Education"
import Experience from "./Experience"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className=" bg-primary">
      <Layout>
        <Education />
        <Experience />
      </Layout>
    </div>
  )
}
export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
