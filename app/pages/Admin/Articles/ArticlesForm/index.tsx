import { SimpleButton } from "~/global/components/Buttons/SimpleButton";
import { SimpleInput } from "~/global/components/Form/SimpleInput";
import { SimpleTextArea } from "~/global/components/Form/SimpleTextArea";
import { Container } from "./styles";

type ArticlesFormProps = {
  errors: {
    title: string | null;
    description: string | null;
  };

  initialValue?: {
    title: string;
    description: string;
  };
}

export function ArticlesForm({ errors, initialValue }: ArticlesFormProps) {
  return (
    <Container method="post">
      <SimpleInput
        name="title"
        label="Titulo:"
        error={errors?.title}
        defaultValue={initialValue?.title}
      />

      <SimpleTextArea
        name="description"
        label="Descrição:"
        error={errors?.description}
        defaultValue={initialValue?.description}
      />

      <SimpleButton
        type="submit"
        text="Criar Artigo:"
        name="_action"
        value={initialValue ? "editArticle" : "addArticle"}
      />
    </Container>
  );
}