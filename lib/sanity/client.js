import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// Sanity client config
export const client = createClient({
  projectId: "vf0v6dnx",
  dataset: "production",
  apiVersion: "2025-06-02",
  useCdn: true,
});

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

export default client