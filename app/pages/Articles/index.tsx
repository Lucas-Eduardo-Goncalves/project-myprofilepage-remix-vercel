import { useNavigate } from "@remix-run/react";
import { CaretLeft } from "phosphor-react";
import { ArticleContainer, Container, ReturnHomeButton } from "./styles";

type ArticlesIndexProps = {
  articles: {
    id: string;
    createdAt: string;
    title: string;
    description: string;
    article: string;
  }[];
}

export function ArticlesPublic({ articles }: ArticlesIndexProps) {
  const navigate = useNavigate();

  return (
    <Container>
      <ReturnHomeButton onClick={() => navigate("/#projects")}>
        <CaretLeft size={32} />
      </ReturnHomeButton>

      {articles.map(article => (
        <ArticleContainer to={`/article/${article.id}`} key={article.id}>
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