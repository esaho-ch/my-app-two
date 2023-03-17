import "server-only";

export async function getGraphqlData(query, variables) {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ query, variables }),
  };

  try {
    const response = await fetch(fetchUrl, fetchOptions);
    const { data } = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Could not fetch data from Contentful. Error: ${error}`);
  }
}
