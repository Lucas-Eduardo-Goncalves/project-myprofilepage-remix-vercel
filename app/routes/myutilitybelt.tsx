import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getTecnologies } from "~/models/tecnologies.server";
import { MyUtilityBelt } from "~/pages/MyUtilityBelt";

export const loader: LoaderFunction = async () => {
  return await getTecnologies();
}

export default function () {
  const loaderData = useLoaderData();

  return <MyUtilityBelt tecnologies={loaderData} />
}