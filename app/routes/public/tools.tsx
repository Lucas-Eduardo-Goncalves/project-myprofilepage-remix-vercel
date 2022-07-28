import { useLoaderData } from "@remix-run/react";
import { Tools } from "~/pages/Public/Tools";
import { getTecnologies } from "~/models/tecnologies.server";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return await getTecnologies();
}

export default function () {
  const loaderData = useLoaderData();
  return <Tools tecnologies={loaderData} />
}