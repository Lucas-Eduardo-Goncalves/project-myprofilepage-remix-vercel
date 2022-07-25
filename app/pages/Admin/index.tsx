import { Outlet, useNavigate } from "@remix-run/react";
import { CaretLeft } from "phosphor-react";
import { AdminForm } from "./components/AdminForm";
import { AdminTaskbar } from "./components/AdminTaskbar";
import { Container, ReturnHomeButton } from "./styles";

export type AdminProps = {
  isLogged: boolean;

  errors: {
    email: string | null;
    password: string | null;
  };
}

export function Admin({ errors, isLogged }: AdminProps) {
  const navigate = useNavigate();
  return (
    <Container>
      <ReturnHomeButton onClick={() => navigate("/#home")}>
        <CaretLeft size={32} />
      </ReturnHomeButton>

      {!isLogged && (
        <AdminForm errors={errors} />
      )}

      {isLogged && (
        <>
          <AdminTaskbar />
          <Outlet />
        </>
      )}
    </Container>
  );
}