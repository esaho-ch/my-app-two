import React from "react";
import { getTestContent } from "../../lib/getTestContent";

export async function generateStaticParams() {
  const testEntries = await getTestContent();

  return testEntries.map((entry) => ({
    slug: entry.slug,
  }));
}

const Page = async ({ params }) => {
  const { slug } = params;
  const testEntry = await getTestContent({ slug });

  console.log("Test entry :>> ", testEntry);

  const { title, description } = testEntry;

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Page;
