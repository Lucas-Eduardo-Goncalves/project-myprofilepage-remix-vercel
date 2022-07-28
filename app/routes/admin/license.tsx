import { useLoaderData } from "@remix-run/react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";

import { licenceActionController } from "~/utils/controllers/licenceControllers";
import { getLicense } from "~/models/license.server";
import { AdminLicense } from "~/pages/Admin/License";

export const loader: LoaderFunction = async () => {
  return await getLicense();
}

export const action: ActionFunction = async ({ request }) => {
  return await licenceActionController(request);
}

export default function () {
  const loaderData = useLoaderData();
  return <AdminLicense license={loaderData.license} />
}