import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { getUnicArticle } from "~/models/articles.server";
import { ArticlesForm } from "~/pages/Admin/Articles/ArticlesForm";
import { AdminArticleActionController } from "~/utils/controllers/adminArticlesController";

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.articleid) return null;

  const projectData = getUnicArticle(params.articleid);
  return projectData;
}

export const action: ActionFunction = async ({ request, params }) => {
  return AdminArticleActionController(request, params);
}

export default function () {
  const actionData = useActionData();
  const loaderData = useLoaderData();
  return <ArticlesForm errors={actionData?.errors} initialValue={loaderData} />
}