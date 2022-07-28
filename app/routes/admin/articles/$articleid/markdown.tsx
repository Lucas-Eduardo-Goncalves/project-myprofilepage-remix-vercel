import { useLoaderData } from "@remix-run/react";
import { getUnicArticle } from "~/models/articles.server";
import { ArticleMarkdown } from "~/pages/Admin/sub/Articles/ArticleMarckdown";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { AdminArticleMarckdownActionController } from "~/utils/controllers/adminArticleMarkdownController";

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.articleid) return null;

  const projectData = getUnicArticle(params.articleid);
  return projectData;
}

export const action: ActionFunction = async ({ request, params }) => {
  return AdminArticleMarckdownActionController(request, params);
}

export default function () {
  const loaderData = useLoaderData();
  return <ArticleMarkdown article={loaderData} />
}