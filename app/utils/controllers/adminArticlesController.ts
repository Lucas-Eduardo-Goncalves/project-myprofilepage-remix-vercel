import type { Params } from "@remix-run/react";
import { addArticle, editArticle, editMarkdownArticle } from "~/models/articles.server";

export async function AdminArticleActionController(request: Request, paramns: Params) {
  const formData = await request.formData();
  const { _action } = Object.fromEntries(formData);

  const id = paramns.articleid;
  if (!id) return null;

  switch (_action) {
    case "addArticle":
      return await addArticle(formData);

    case "editArticle":
      return await editArticle(formData, id);

    case "submitArticleMarkdownForm":
      const textValue = formData.get("value");
      return await editMarkdownArticle(String(textValue), id);

    default:
      return null;
  }
}