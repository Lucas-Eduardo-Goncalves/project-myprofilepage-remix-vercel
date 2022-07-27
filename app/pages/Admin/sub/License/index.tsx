import { ClientOnly } from 'remix-utils';
import { MarkdownEditor } from '~/global/components/MarkdownEditor/index.client';
import { Container } from './styles';

type LicenseProps = {
  license: string;
}

export function AdminLicense({ license }: LicenseProps) {
  return (
    <Container>
      <h2>Licença MIT</h2>

      <ClientOnly fallback={<p>Carregando...</p>}>
        {() => <MarkdownEditor formSubmitName="submitLicenseForm" initialValue={license} />}
      </ClientOnly>
    </Container>
  );
}
