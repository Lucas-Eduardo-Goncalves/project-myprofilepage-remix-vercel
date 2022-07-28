import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getArticles } from "~/models/articles.server";
import { ArticlesPublic } from "~/pages/Articles";

export const loader: LoaderFunction = async () => {
  return await getArticles();
}

export default function () {
  const loaderData = useLoaderData();
  return <ArticlesPublic articles={loaderData} />
}