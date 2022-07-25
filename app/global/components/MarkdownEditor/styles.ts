import styled from "styled-components";

export const Container = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--ultra-dark-purple);

  display: flex;

  .md-editor-toolbar {
    display: flex;
    align-items: center;

    border-bottom: 2px solid var(--background);
    padding-bottom: 0.5rem;

    gap: 0.25rem;

    button {
      background-color: var(--purple);
      border: none;

      width: 2rem;
      height: 2rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 0.25rem;
      transition: background-color 0.2s;

      &:hover {
        background-color: var(--dark-purple);
      }
    }

    & + div {
      margin-top: 1rem;
    }
  }


  .md-editor-content {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > div {
      flex: 1;

      & + div {
        border-top: 2px solid var(--background);
        padding: 1rem;
      }
    }
  }
`;