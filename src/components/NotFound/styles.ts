import { styled } from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const EmptyPlaceholderContainer = styled.div`
  position: relative;
  width: 100%;
  min-width: 200px;
  overflow-y: auto;
  word-wrap: break-word;
  hyphens: auto;
  padding: 24px;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  align-content: stretch;

  text-align: center;

  & > .icon_wrapper {
    width: 40px;
    height: 40px;
    border-radius: 16px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
    flex-shrink: 0;
    background-color: var(--midgard4);
  }
`;
