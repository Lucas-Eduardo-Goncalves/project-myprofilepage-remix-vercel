import { Form } from "@remix-run/react";
import { MarkerCircle, Pen, Trash } from "phosphor-react";
import { ArticleContainer, Button, Container, DeleteButton } from "./styles";

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
              <MarkerCircle size={20} />
            </Button>

            <Button to={`/admin/articles/${article.id}/informations`}>
              <Pen size={20} />
            </Button>

            <Form method="post">
              <input type="hidden" name="articleId" value={article.id} />
              <DeleteButton name="_action" value="deleteArticle">
                <Trash size={20} />
              </DeleteButton>
            </Form>
          </div>
        </ArticleContainer>
      ))}
    </Container>
  );
}