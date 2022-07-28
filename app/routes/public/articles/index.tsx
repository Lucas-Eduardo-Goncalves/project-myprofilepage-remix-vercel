import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getArticles } from "~/models/articles.server";
import { AllArticles } from "~/pages/Public/Articles/AllArticles";

export const loader: LoaderFunction = async () => {
  return await getArticles();
}

export default function () {
  const loaderData = useLoaderData();
  return <AllArticles articles={loaderData} />
}