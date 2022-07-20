import styled from "styled-components";

export const TooltipText = styled.div`
  cursor: pointer;
  user-select: none;
`;

export const TooltipBox = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 30px;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 5rem;
  padding: 5px 5px;
  border-radius: 4px;
  transition: visibility 0.2s, color 0.2s, background-color 0.2s, width 0.2s, padding 0.2s ease-in-out;
  
  p {
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
  }
`;

export const TooltipCard = styled.div`
  margin: 16px;
  position: relative;
  
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: var(--purple);
    width: 6rem;
    padding: 8px 8px;
    border-radius: 4px;
  }
`;