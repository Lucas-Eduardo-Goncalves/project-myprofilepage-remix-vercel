import { ClientOnly } from 'remix-utils';
import { MarkdownEditor } from '~/global/components/Markdown/MarkdownEditor/index.client';
import { Container } from './styles';

type ArticleMarkdownProps = {
  article: {
    title: string;
    article: string;
  };
}

export function ArticleMarkdown({ article }: ArticleMarkdownProps) {
  return (
    <Container>
      <h2>{article.title}</h2>

      <ClientOnly fallback={<p>Carregando...</p>}>
        {() => <MarkdownEditor formSubmitName="submitArticleMarkdownForm" initialValue={article.article} />}
      </ClientOnly>
    </Container>
  );
}
