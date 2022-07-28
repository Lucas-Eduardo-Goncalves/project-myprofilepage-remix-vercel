import { MarkerCircle, Pen } from "phosphor-react";
import { ArticleContainer, Button, Container } from "./styles";

type ArticlesIndexProps = {
  articles: {
    id: string;
    createdAt: string;
    title: string;
    description: string;
    article: string;
  }[];
}

export function ArticlesIndex({ articles }: ArticlesIndexProps) {
  return (
    <Container>
      {articles.map(article => (
        <ArticleContainer key={article.id}>
          <div>
            <div>
              <h3>{article.title}</h3>
              <span>{article.createdAt}</span>
            </div>

            <p>{article.description}</p>
          </div>

          <div>
            <Button to={`/admin/articles/${article.id}/markdown`}>
              <MarkerCircle size={25} />
            </Button>
            <Button to={`/admin/articles/${article.id}/informations`}>
              <Pen size={25} />
            </Button>
          </div>
        </ArticleContainer>
      ))}
    </Container>
  );
}