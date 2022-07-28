import { ClientOnly } from "remix-utils";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";

import { getUnicArticle } from "~/models/articles.server";
import { UnicArticle } from "~/pages/Public/Articles/UnicArticle/index";

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.id) return null;
  return await getUnicArticle(params.id);
}

export default function () {
  const loaderData = useLoaderData();
  return (
    <ClientOnly>
      {() => <UnicArticle articleContent={loaderData.article} articleName={loaderData.title} />}
    </ClientOnly>
  )
}