import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";

import { License } from "~/pages/License/index.client";
import { getLicense } from "~/models/license.server";
import { ClientOnly } from "remix-utils";

export const loader: LoaderFunction = async () => {
  return await getLicense();
}

export default function () {
  const loaderData = useLoaderData();

  return (
    <ClientOnly>
      {() => <License license={loaderData.license} />}
    </ClientOnly>
  )
}