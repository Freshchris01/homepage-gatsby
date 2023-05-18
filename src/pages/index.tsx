import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Layout } from "./Layout"
import { Education } from "./Education"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className=" bg-primary">
      <Layout>
        <div>This is some Content!!</div>
        <div>This is some Content!!</div>
        <Education />
      </Layout>
    </div>
  )
}
export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
