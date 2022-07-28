import { getArticles } from "~/models/articles.server";
import { ArticlesIndex } from "~/pages/Admin/Articles/ArticlesIndex";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { actionIndexController } from "~/utils/controllers/actionIndexController";

export const loader: LoaderFunction = async () => {
  return await getArticles();
}

export const action: ActionFunction = async ({ request }) => {
  return actionIndexController(request);
}

export default function () {
  const loaderData = useLoaderData();
  return <ArticlesIndex articles={loaderData} />
}