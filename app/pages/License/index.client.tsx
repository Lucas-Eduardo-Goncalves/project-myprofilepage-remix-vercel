import { useNavigate } from '@remix-run/react';
import MDEditor from '@uiw/react-md-editor';
import { CaretLeft } from 'phosphor-react';
import { Container, ReturnHomeButton, ViewContainer } from './styles';

interface LicenseProps {
  license: string;
}

export function License({ license }: LicenseProps) {
  const navigate = useNavigate();

  return (
    <>
      <ReturnHomeButton onClick={() => navigate("/#about")}>
        <CaretLeft size={32} />
      </ReturnHomeButton>

      <Container>
        <h1>License</h1>


        <ViewContainer>
          <MDEditor.Markdown source={license} style={{ whiteSpace: 'pre-wrap' }} />
        </ViewContainer>
      </Container>
    </>
  );
}
