import { Admin } from "~/pages/Admin";
import { AdminActionController } from "~/utils/controllers/adminControllers";
import { useActionData, useLoaderData } from "@remix-run/react";

import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { getSessionAuth } from "~/global/cookies/AuthCookie";

export const action: ActionFunction = async ({ request }) => {
  return await AdminActionController(request);
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionAuth(request.headers.get("Cookie"));
  const userCredentials = await session.get("user_credentials");

  return { isLogged: !!userCredentials }
}

export default function () {
  const actionData = useActionData();
  const loaderData = useLoaderData();

  return <Admin isLogged={loaderData.isLogged} errors={actionData?.errors} />
}