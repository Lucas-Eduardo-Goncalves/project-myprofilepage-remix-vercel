import { Link } from "@remix-run/react";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3rem;
  width: 3rem;

  border: none;
  border-radius: 0.25rem;

  position: fixed;
  left: 1rem;
  top: 1rem;

  color: var(--shape);
  background-color: var(--purple);
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;