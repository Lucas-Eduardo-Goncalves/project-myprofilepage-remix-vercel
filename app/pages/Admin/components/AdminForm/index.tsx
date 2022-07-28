import { Container } from "./styles";

import { SimpleButton } from "~/global/components/Buttons/SimpleButton";
import { SimpleInput } from "~/global/components/Form/SimpleInput";

export type AdminFormProps = {
  errors: {
    email: string | null;
    password: string | null;
  };
}

export function AdminForm({ errors }: AdminFormProps) {
  return (
    <Container method="post">
      <h2>Como você chegou aqui mesmo?</h2>

      <SimpleInput
        name="email"
        label="E-mail:"
        error={errors?.email}
      />

      <SimpleInput
        name="password"
        label="password"
        error={errors?.password}
      />

      <SimpleButton
        type="submit"
        name="_action"
        value="AdminFormLogin"
        text="Enviar"
      />
    </Container>
  );
}
