import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "./Layout"
import Education from "./Education"
import Experience from "./Experience"
import Skills from "./Skills"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className=" bg-primary">
      <Layout>
        <Education />
        <Experience />
        <Skills />
      </Layout>
    </div>
  )
}
export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
