import { createClient } from "contentful";

export async function getAllPosts(limit: number, skip: number) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const settings: { content_type: string; skip: number; limit?: number } = {
    content_type: "post",
    skip,
  };

  if (limit) {
    settings.limit = limit;
  }

  const posts = await client.getEntries(settings);

  return posts.items;
}

export async function getPosts({ limit = null, skip = 0 }) {
  return await getAllPosts(limit, skip);
}
