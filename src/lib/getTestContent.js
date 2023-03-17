import "server-only";

import { getGraphqlData } from './contentfulApi';


export const getTestContent = async ({ slug } = {}) => {
  const data = await getGraphqlData(GET_TEST_CONTENT, { slug });
  return slug ? data.testContentCollection.items?.[0] : data.testContentCollection.items;
};

const GET_TEST_CONTENT = `
  query TestContentCollection(
    $slug: String
  ) {
    testContentCollection(where: { slug: $slug }) {
      items {
        title
        slug
        description
      }
    }
  }
`;
