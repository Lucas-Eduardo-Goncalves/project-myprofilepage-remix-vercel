import styled, { css } from "styled-components";

type IContainerProps = {
  isError: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  div {
    display: flex;
    align-items: center;

    label {
      font-weight: 600;
      margin-bottom: 0.25rem;
    }

    p {
      margin-left: auto;
      color: var(--warning);
      font-weight: bold;
    }
  }

  input {
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    padding: 1rem;
    outline: none;

    border: 2px solid transparent;
    background-color: var(--dark-purple);

    &:focus {
      border-color: var(--purple);
    }

    ${({ isError }) => isError && css`
      border-color: var(--warning);
    `}
  }
`;