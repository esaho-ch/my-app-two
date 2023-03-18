import { getTestContent } from "../../../lib/getTestContent";

export async function GET(request) {
  try {
    const testContent = await getTestContent({ slug: "test-entry" });

    const { title, description } = testContent;

    console.log("description :>> ", description);

    const objAsJson = JSON.stringify(testContent);

    return new Response(objAsJson);
  } catch (err) {
    console.log("err :>> ", err);
    const body = "Error revalidating";
    const options = { status: 500 };
    return new Response(body, options);
  }
}
