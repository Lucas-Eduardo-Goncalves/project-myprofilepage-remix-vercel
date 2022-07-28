import { Outlet } from "@remix-run/react";
import { ReturnButton } from "~/global/components/Buttons/ReturnButton";
import { AdminForm } from "./components/AdminForm";
import { AdminTaskbar } from "./components/AdminTaskbar";
import { Container } from "./styles";

export type AdminProps = {
  isLogged: boolean;

  errors: {
    email: string | null;
    password: string | null;
  };
}

export function Admin({ errors, isLogged }: AdminProps) {
  return (
    <Container>
      <ReturnButton />

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