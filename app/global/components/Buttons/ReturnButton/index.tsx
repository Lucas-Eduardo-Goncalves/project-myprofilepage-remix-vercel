import { Container } from "./styles";
import { CaretLeft } from "phosphor-react";
import { useLocation, useMatches } from "@remix-run/react";

export function ReturnButton() {
  const location = useLocation();
  const matches = useMatches();

  function controlReturnPath() {
    if (matches.length <= 2) {
      return matches[0].pathname;
    }

    else {
      if (matches[matches.length - 2].pathname === location.pathname) {
        return matches[matches.length - 3].pathname;
      }

      return matches[matches.length - 2].pathname;
    }
  }

  return (
    <Container to={controlReturnPath()}>
      <CaretLeft size={32} />
    </Container>
  );
}