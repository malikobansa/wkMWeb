import { gql } from "@apollo/client";

export const GET_BLOG_POSTS = gql`
  query WKM {
    posts {
        id
        title
        slug
        content {
        html
        }
        coverPhoto {
        url
        }
        publishedAt
    }
    post(where: {id: "", slug: ""}) {
        content {
        html
        }
        author {
        name
        publishedAt
        }
        coverPhoto {
        url
        }
        publishedAt
    }
    }
`;
