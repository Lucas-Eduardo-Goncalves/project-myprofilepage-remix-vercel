import { deleteArticle } from "~/models/articles.server";

export async function actionIndexController(request: Request) {
  const formData = await request.formData();
  const { _action } = Object.fromEntries(formData);

  switch (_action) {
    case "deleteArticle":
      const id = formData.get("articleId");
      return await deleteArticle(String(id));

    default:
      return null;
  }
}