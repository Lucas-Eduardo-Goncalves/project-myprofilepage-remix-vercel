import { ClientOnly } from "remix-utils";
import { useLoaderData } from "@remix-run/react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";

import { MarkdownEditor } from "~/global/components/MarkdownEditor/index.client";
import { licenceActionController } from "~/utils/controllers/licenceControllers";
import { getLicense } from "~/models/license.server";
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 6rem);

  h2 {
    font-size: 2rem;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const loader: LoaderFunction = async () => {
  return await getLicense();
}

export const action: ActionFunction = async ({ request }) => {
  return await licenceActionController(request);
}

export default function () {
  const loaderData = useLoaderData();

  return (
    <Container>
      <h2>Licença MIT</h2>

      <ClientOnly fallback={<p>Carregando...</p>}>
        {() => <MarkdownEditor formSubmitName="submitLicenseForm" initialValue={loaderData.license} />}
      </ClientOnly>
    </Container>
  )
}