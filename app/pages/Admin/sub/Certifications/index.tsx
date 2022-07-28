import { Outlet, useLocation } from '@remix-run/react';
import { Plus, Minus } from 'phosphor-react';
import { Container, ButtonAddCertification } from './styles';

export function Certifications() {
  const location = useLocation();
  return (
    <Container>
      <header>
        <h2>
          {location.pathname === "/admin/certifications"
            ? "Certificados"
            : "Adicionar certificado"}
        </h2>

        {location.pathname === "/admin/certifications/add" ? (
          <ButtonAddCertification to="">
            <Minus size={25} color="var(--shape)" />
          </ButtonAddCertification>
        ) : (
          <ButtonAddCertification to="add">
            <Plus size={25} color="var(--shape)" />
          </ButtonAddCertification>
        )}
      </header>
      <Outlet />
    </Container>
  );
}
