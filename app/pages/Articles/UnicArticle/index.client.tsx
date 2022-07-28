import { useNavigate } from '@remix-run/react';
import MDEditor from '@uiw/react-md-editor';
import { CaretLeft } from 'phosphor-react';
import { Container, ReturnHomeButton, ViewContainer } from './styles';

interface UnicArticleProps {
  articleName: string;
  articleContent: string;
}

export function UnicArticle({ articleContent, articleName }: UnicArticleProps) {
  const navigate = useNavigate();

  return (
    <>
      <ReturnHomeButton onClick={() => navigate("/articles")}>
        <CaretLeft size={32} />
      </ReturnHomeButton>

      <Container>
        <h1>{articleName}</h1>
        <ViewContainer>
          <MDEditor.Markdown source={articleContent} style={{ whiteSpace: 'pre-wrap' }} />
        </ViewContainer>
      </Container>
    </>
  );
}
