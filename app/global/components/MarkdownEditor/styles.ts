import styled, { css } from 'styled-components';

type TabButtonProps = {
  isActive: boolean;
  isError?: boolean;
}

export const AreaButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 60rem;
  gap: 1rem;

  padding: 1rem 0;
`;

export const EditorContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  max-width: 60rem;
  padding: 1rem 0;

  border: 1px solid var(--medium-purple);
  border-radius: 0.25rem;
  background-color: var(--ultra-dark-purple);

  .w-md-editor {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .w-md-editor-toolbar {
    display: flex;
    align-items: center;

    ul {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      padding: 0 1rem;

      &:nth-child(2) {
        display: none;
      }

      li {
        list-style: none;
        &:nth-child(1) {
          display: none;
        }

        button {
          border: none;
          border-radius: 0.25rem;
          height: 2rem;
          width: 2rem;
          background-color: var(--purple);

          &:hover {
            background-color: var(--dark-purple);
          }
        }
      }
    }
  }

  .w-md-editor-content {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    padding: 1rem;
    border-top: 1px solid var(--medium-purple);

    .w-md-editor-aree {
      width: 100%;
      height: 100%;
    }

    textarea {
      width: 100%;
      height: 340px;
      
      border: none;
      background-color: transparent;
      outline: none;

      resize: none;
    }
  }

  .w-md-editor-bar, .wmde-markdown-color, .w-md-editor-toolbar-divider {
    display: none;
  }
`;

export const ViewContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

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

    ul, ol {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 0 1rem;
    }
  } 
`;

export const TabButton = styled.button<TabButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s;

  padding: 0.5rem 1rem;
  font-weight: 600;
  border: 1px solid transparent;
  background-color: var(--purple);
  border-radius: 0.25rem;

  &:hover {
    background-color: var(--medium-purple);
  }

  ${props => props.isActive && css`
    background-color: var(--shape);
    border-color: var(--purple);
    color: var(--purple);

    &:hover {
      background-color: var(--shape);
    }
  `}

  ${props => props.isError && css`
    background-color: var(--shape);
    border-color: var(--warning);
    color: var(--warning);

    &:hover {
      background-color: var(--shape);
    }
  `}
`;  