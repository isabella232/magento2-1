import { gql } from 'graphql-request';

export default gql`
  query cmsPage($identifier: String) {
    cmsPage(identifier:$identifier) {
      identifier
      content
      title,
      meta_title
      meta_description
      content_heading
    }
  }
`;
