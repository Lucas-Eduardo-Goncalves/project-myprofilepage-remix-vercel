import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";

import { getContacts } from "~/models/contact.server";
import { AdminEmails } from "~/pages/Admin/sub/Emails";

export const loader: LoaderFunction = async () => {
  return await getContacts()
}

export default function () {
  const loaderData = useLoaderData();
  return <AdminEmails emails={loaderData} />
}