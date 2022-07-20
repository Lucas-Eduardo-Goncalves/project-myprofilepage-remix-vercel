import { useEffect } from "react";
import toast from "react-hot-toast";
import { useActionData, useLoaderData } from "@remix-run/react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";

import { Dasboard } from "~/pages/Dashboard";
import { getTwoProjects } from "~/models/projects.server";
import { dashboardActionController } from "~/utils/controllers/dashboardControllers";

export const loader: LoaderFunction = async () => {
  const res = await getTwoProjects();
  return { projects: res };
};

export const action: ActionFunction = async ({ request }) => {
  return await dashboardActionController(request);
};

export default function Index() {
  const loaderData = useLoaderData();
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

  return <Dasboard projects={loaderData.projects} errors={actionData?.errors} />;
}
