import styled, { css } from "styled-components";

type IContainerProps = {
  isError: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 21.5rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  label {
    font-weight: 600;
    cursor: pointer;
  }
  
  div {
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;

    p {
      margin-left: auto;
      color: var(--warning);
      font-weight: bold;
    }
  }

  img {
    border: 2px solid var(--purple);
    border-radius: 0.5rem;
    max-width: 20rem;
  max-height: 20rem;

    ${props => props.isError && css`
      border-color: var(--warning);
    `}
  }

  input {
    display: none;
  }
`;