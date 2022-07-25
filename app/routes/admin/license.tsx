import styled from "styled-components"
import { getLicense } from "~/models/license.server";

import type { LoaderFunction } from "@remix-run/node";
import { ClientOnly } from "remix-utils";
import { SimpleMarkdownEditor } from "~/global/components/MarkdownEditor/MarkdownEditor.client";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  width: calc(100vw - 20rem) ;

  gap: 1rem;

  h2 {
    font-size: 2rem;
    width: 100%;
  }
`;

export const loader: LoaderFunction = async () => {
  return await getLicense();
}

export default function () {

  return (
    <Container>
      <h2>Licença MIT</h2>

      <ClientOnly fallback={<h1>Carregando editor</h1>}>
        {() => <SimpleMarkdownEditor />}
      </ClientOnly>
    </Container>
  )
}