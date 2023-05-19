import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "./Layout"
import Education from "./Education"
import Experience from "./Experience"
import Skills from "./Skills"
import Projects from "./Projects"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className=" bg-primary p-2 lg:p-0">
      <Layout>
        <Education />
        <Experience />
        <Skills />
        <Projects />
      </Layout>
    </div>
  )
}
export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
