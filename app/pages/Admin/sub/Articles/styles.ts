import { Link } from "@remix-run/react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 6rem);

  > header {
    width: 100%;
    margin-bottom: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 2rem;
    }
  }
`;

export const ButtonAddCertification = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3rem;
  width: 3rem;

  border: none;
  border-radius: 0.25rem;

  background-color: var(--purple);
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;