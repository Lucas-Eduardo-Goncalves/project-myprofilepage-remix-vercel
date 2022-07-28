import { SimpleButton } from "~/global/components/SimpleButton";
import { SimpleInput } from "~/global/components/SimpleInput";
import { SimpleInputFile } from "~/global/components/SimpleInputFile";
import { Container } from "./styles";

export function CertificationsForm() {
  return (
    <Container method="post" encType="multipart/form-data">
      <SimpleInput name="issuingOrganization" label="Organização emissora:" />
      <SimpleInput name="certificateName" label="Nome do certificado:" />
      <SimpleInput name="issueDate" label="Data de emissão:" />

      <section>
        <SimpleInputFile name="image" label="Certificado:" />
        <SimpleButton text="Salvar" type="submit" name="_action" value="addCertification" />
      </section>
    </Container>
  );
}