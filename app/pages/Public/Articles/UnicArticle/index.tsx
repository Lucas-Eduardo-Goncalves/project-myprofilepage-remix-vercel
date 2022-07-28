import { ClientOnly } from "remix-utils";
import { Container } from "./styles";
import { ReturnButton } from "~/global/components/Buttons/ReturnButton";
import { MarckdownView } from "~/global/components/Markdown/MarkdownView/index.client";

type UnicArticleProps = {
  articleName: string;
  articleContent: string;
}

export function UnicArticle({ articleName, articleContent }: UnicArticleProps) {
  return (
    <Container>
      <ReturnButton />
      <h1>{articleName}</h1>

      <ClientOnly>
        {() => <MarckdownView value={articleContent} />}
      </ClientOnly>
    </Container>
  );
}
