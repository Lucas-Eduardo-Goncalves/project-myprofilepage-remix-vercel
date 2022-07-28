import { Outlet, useLocation } from "@remix-run/react";
import { Minus, Plus } from "phosphor-react";
import { ButtonAddCertification, Container } from "./styles";

export function AdminArticles() {
  const location = useLocation();

  return (
    <Container>
      <header>
        <h2>
          Artigos
        </h2>

        {location.pathname === "/admin/articles/add" ? (
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
  )
}