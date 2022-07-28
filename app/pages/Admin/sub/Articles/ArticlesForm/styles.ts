import { Form } from "@remix-run/react";
import styled from "styled-components";

export const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 100%;
  min-width: 25rem;
  max-width: 60rem;

  > section {
    width: 100%;
    gap: 1rem;
    justify-content: space-evenly;

    display: flex;
    align-items: flex-end;

    padding-bottom: 1rem;
  }
`;