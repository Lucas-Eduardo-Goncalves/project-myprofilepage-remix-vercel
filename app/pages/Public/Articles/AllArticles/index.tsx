import { ReturnButton } from "~/global/components/Buttons/ReturnButton";
import { ArticleContainer, Container } from "./styles";

type ArticlesIndexProps = {
  articles: {
    id: string;
    createdAt: string;
    title: string;
    description: string;
    article: string;
  }[];
}

export function AllArticles({ articles }: ArticlesIndexProps) {
  return (
    <Container>
      <ReturnButton />

      {articles.map(article => (
        <ArticleContainer to={`/public/articles/${article.id}`} key={article.id}>
          <div>
            <div>
              <h3>{article.title}</h3>
              <span>{article.createdAt}</span>
            </div>

            <p>{article.description}</p>
          </div>
        </ArticleContainer>
      ))}
    </Container>
  );
}