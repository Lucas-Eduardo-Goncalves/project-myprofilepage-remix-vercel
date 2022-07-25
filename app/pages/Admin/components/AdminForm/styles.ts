import { Form } from "@remix-run/react";
import styled from "styled-components";

export const Container = styled(Form)`
  display: flex;
  flex-direction: column;

  max-width: 45rem;
  gap: 1rem;

  > button {
    max-width: unset;
  }
`;
