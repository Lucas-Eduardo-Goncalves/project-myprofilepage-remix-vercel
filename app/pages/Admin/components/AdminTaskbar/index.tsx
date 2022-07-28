import { useLocation } from '@remix-run/react';
import { Container, LinkButton } from './styles';

export function AdminTaskbar() {
  const location = useLocation();

  return (
    <Container>
      <LinkButton
        to=""
        isActive={location.pathname === "/admin" || location.pathname === "/admin/"}
      >
        Dashboard
      </LinkButton>

      <LinkButton
        to="projects"
        isActive={location.pathname.includes("/admin/projects")}
      >
        Projetos
      </LinkButton>

      <LinkButton
        to="emails"
        isActive={location.pathname.includes("/admin/emails")}
      >
        E-mails
      </LinkButton>

      <LinkButton
        to="articles"
        isActive={location.pathname.includes("/admin/articles")}
      >
        Artigos
      </LinkButton>

      <LinkButton
        to="certifications"
        isActive={location.pathname.includes("/admin/certifications")}
      >
        Certificados
      </LinkButton>

      <LinkButton
        to="license"
        isActive={location.pathname.includes("/admin/license")}
        style={{ borderRadius: "0 0 0.5rem 0.5rem" }}
      >
        Licença
      </LinkButton>
    </Container>
  );
}
