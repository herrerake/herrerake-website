import { useStaticQuery, graphql } from "gatsby"

export default function useBlogPosts() {
  const data = useStaticQuery(graphql`
    {
      allStrapiBlogs {
        nodes {
          body
          description
          series
          strapiId
          title
          id
          featureImage {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 400
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `)
  const blogPosts = data.allStrapiBlogs.nodes.map(node => {
    const { body, description, series, strapiId, title, id, featureImage } =
      node
    return {
      body,
      description,
      series,
      strapiId,
      title,
      id,
      featureImage,
    }
  })
  return { blogPosts }
}
