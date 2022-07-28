import { SimpleButton } from "~/global/components/Buttons/SimpleButton";
import { SimpleInput } from "~/global/components/Form/SimpleInput";
import { SimpleTextArea } from "~/global/components/Form/SimpleTextArea";

import ProfilePhoto from "~/global/assets/profilephoto.svg";
import { Container, FormArea, FormTitle, ProfilePhotoArea } from "./styles";

type FormProps = {
  id: string;
  errors: {
    name: string | null;
    email: string | null;
    subject: string | null;
    message: string | null;
  };
}

export function Form({ id, errors }: FormProps) {
  return (
    <Container id={id}>
      <FormArea method="post">
        <FormTitle>Entre em contato</FormTitle>

        <SimpleInput
          name="name"
          label="Nome:"
          placeholder="Meu Lindo Nome"
          error={errors?.name}
        />

        <SimpleInput
          name="email"
          label="E-mail:"
          placeholder="meuemail@email.com"
          error={errors?.email}
        />

        <SimpleInput
          name="subject"
          label="Assunto:"
          placeholder="ideia principal"
          error={errors?.subject}
        />

        <SimpleTextArea
          rows={5}
          name="message"
          label="Mensagem:"
          placeholder="Como o seu site é lindo!"
          error={errors?.message}
        />

        <SimpleButton type="submit" text="Enviar" />
      </FormArea>

      <ProfilePhotoArea>
        <img src={ProfilePhoto} alt="Você não está conseguindo ver esse cara bonito?" />
      </ProfilePhotoArea>
    </Container>
  )
}