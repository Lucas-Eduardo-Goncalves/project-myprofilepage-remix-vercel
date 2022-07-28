import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;

  max-width: 60rem;
  padding: 1rem 0;

  border: 1px solid var(--medium-purple);
  border-radius: 0.25rem;
  background-color: var(--ultra-dark-purple);

  .wmde-markdown {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0 1rem;

    overflow: auto;

    ul, ol {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 0 1rem;
    }

    img {
      max-width: 58rem;
    }

    pre {
      padding: 1.10rem;
      background-color: var(--dark-purple);
      border-radius: 1rem;
      position: relative;

      .copied {
        position: absolute;
        right: 1rem;
        top: 1rem;
        cursor: pointer;
      }
    }

    iframe {
      margin: 0 auto;
    }
  } 
`;