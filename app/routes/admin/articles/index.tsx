import { getArticles } from "~/models/articles.server";
import { ArticlesIndex } from "~/pages/Admin/sub/Articles/ArticlesIndex";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  return await getArticles();
}

export default function () {
  const loaderData = useLoaderData();
  return <ArticlesIndex articles={loaderData} />
}