import { Outlet, useLocation, useMatches, useNavigate } from "@remix-run/react";
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
  const matches = useMatches();
  const location = useLocation();

  function returnFuntion() {
    if (matches[matches.length - 2].pathname === location.pathname + "/index") {
      return matches[matches.length - 3].pathname;
    }
    else if (matches[matches.length - 2].pathname === location.pathname) {
      return matches[matches.length - 3].pathname;
    }
    else {
      return matches[matches.length - 2].pathname;
    }
  }

  return (
    <Container>
      <ReturnHomeButton onClick={() => navigate(returnFuntion())}>
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