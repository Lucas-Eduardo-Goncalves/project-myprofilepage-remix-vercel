import { ClientOnly } from "remix-utils";
import { Container } from "./styles";

import { ReturnButton } from "~/global/components/Buttons/ReturnButton";
import { MarckdownView } from "~/global/components/Markdown/MarkdownView/index.client";

type LicenseProps = {
  license: string;
}

export function License({ license }: LicenseProps) {
  return (
    <Container>
      <ReturnButton />
      <h1>License</h1>

      <ClientOnly>
        {() => <MarckdownView value={license} />}
      </ClientOnly>
    </Container>
  );
}
