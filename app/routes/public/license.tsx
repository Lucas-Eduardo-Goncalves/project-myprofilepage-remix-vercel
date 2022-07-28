import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";

import { License } from "~/pages/Public/License/index";
import { getLicense } from "~/models/license.server";

export const loader: LoaderFunction = async () => {
  return await getLicense();
}

export default function () {
  const loaderData = useLoaderData();
  return <License license={loaderData.license} />
}