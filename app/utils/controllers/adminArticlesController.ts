import type { Params } from "@remix-run/react";
import { addArticle, editArticle, editMarkdownArticle } from "~/models/articles.server";

export async function AdminArticleActionController(request: Request, paramns: Params) {
  const id = paramns.articleid;
  const formData = await request.formData();

  const { _action } = Object.fromEntries(formData);

  switch (_action) {
    case "addArticle":
      return await addArticle(formData);

    case "editArticle":
      if (!id) return null;
      return await editArticle(formData, id);

    case "submitArticleMarkdownForm":
      if (!id) return null;
      const textValue = formData.get("value");
      return await editMarkdownArticle(String(textValue), id);

    default:
      return null;
  }
}