import { useEffect } from "react";
import toast from "react-hot-toast";
import { useActionData } from "@remix-run/react";
import type { ActionFunction } from "@remix-run/node";

import { ArticlesForm } from "~/pages/Admin/Articles/ArticlesForm";
import { AdminArticleActionController } from "~/utils/controllers/adminArticlesController";

export const action: ActionFunction = async ({ request, params }) => {
  return AdminArticleActionController(request, params);
}

export default function () {
  const actionData = useActionData();

  useEffect(() => {
    if (actionData?.firetoast) {
      if (actionData.firetoast.type === "error") {
        toast.error(actionData.firetoast.message)
      } else {
        toast.success(actionData.firetoast.message)
      }
    }
  }, [actionData])

  return <ArticlesForm errors={actionData?.errors} />
}