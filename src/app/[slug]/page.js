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
  console.log("slug :>> ", slug);
  const foo = await getTestContent({ slug });

  console.log("foo :>> ", foo);

  const { title, description } = foo;

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Page;
