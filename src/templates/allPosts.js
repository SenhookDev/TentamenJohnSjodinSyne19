import React from "react"
import {graphql} from "gatsby"
import { Container, Content, ContentCard, FeatureImage, Pagination, Seo, } from "../components"
import {H1, P} from "../elements"
// Page contest = sätt att läsa värden på det vi fört in i context ( se gatsby node arrayen med create pages )
const allPosts = ({pageContext, data}) => {
    const {currentPage, numPages} = pageContext
    const isFirst = currentPage === 1 
    const isLast = currentPage === numPages
    // Kollar på current page om man är på sida 1, vart vill vi gå om vi är på sida 1? då vill vi gå till hemsidan, sida 3 gå tillbaka till 2 osv
    const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
    const nextPage = `${currentPage + 1}`
    const posts = data.allMdx.edges

    return (
        <Container>
          <Seo/>
            <FeatureImage/>
            <Content>
                <H1 textAlign ="center" margin ="0 0 1rem 0">
                    Välkommen till min testblog gjord med Gatsby! 
                </H1>
                <P color ="dark2" textAlign = "center">
                    Denna bloggen kommer jag fortsätta utveckla lite till och från, men testar
                    just nu bara lite olika funktioner osv osv. 
                </P>
                {posts.map(post => (
                    <ContentCard
                        key={post.node.frontmatter.slug}
                        date={post.node.frontmatter.date}
                        title={post.node.frontmatter.title}
                        excerpt={post.node.frontmatter.excerpt}
                        slug={post.node.frontmatter.slug}
                    />
                ))}
            </Content>
            <Pagination 
                isFirst = {isFirst}
                isLast = {isLast}
                prevPage = {prevPage}
                nextPage = {nextPage}
            />
        </Container>
    )
}

export default allPosts

export const pageQuery = graphql`
query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
          }
        }
      }
    }
  }
`