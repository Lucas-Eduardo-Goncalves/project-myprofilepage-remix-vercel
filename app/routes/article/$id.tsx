import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import { getUnicArticle } from "~/models/articles.server";
import { UnicArticle } from "~/pages/Articles/UnicArticle/index.client";

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.id) return null;
  return await getUnicArticle(params.id);
}

export default function () {
  const loaderData = useLoaderData();
  return (
    <ClientOnly>
      {() => <UnicArticle articleContent={loaderData.title} articleName={loaderData.article} />}
    </ClientOnly>
  )
}