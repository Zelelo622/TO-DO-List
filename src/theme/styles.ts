import { styled, keyframes } from "styled-components";
import { Keyframes } from "styled-components/dist/types";

export const ThemeSwitcherStyled = styled.div`
  width: 100%;
  max-width: 72px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  padding: 4px;
  border-radius: 20px;
  background: var(--ant-color-border-secondary);
  color: var(--ant-color-text-light-solid);

  .icon-wrapper {
    width: 32px;
    height: 24px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const slide = (isDark: boolean): Keyframes => keyframes`
  0% {
    transform: translateX(${isDark ? "0" : "32px"});
  }
  100% {
    transform: translateX(${isDark ? "32px" : "0"});
  }
`;

export const ToggleCircle = styled.div<{ isDark: boolean }>`
  background-color: var(--ant-color-primary);
  width: 32px;
  height: 24px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  animation: ${({ isDark }) => slide(isDark)} 0.25s ease forwards;
  z-index: 1;
`;
