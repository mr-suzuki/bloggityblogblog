import styles from '../styles/Slug.module.css'
import { GraphQLClient, gql } from 'graphql-request'


const graphcms = new GraphQLClient('https://api-ap-northeast-1.graphcms.com/v2/cl43qiy2l5nds01xj7gjnbl2q/master');

const QUERY = gql`
  {
    posts{
      slug
      author {
        name,
        avatar {
          url
        }
      }
      date_published
      title
      coverPhoto{
        url
      }
    }
  }
`

export async function getStaticProps(){
  const {posts} = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate:10,
  };
}



export default function Article(){
    return <div>article page</div>
}