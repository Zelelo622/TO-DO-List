import { Input, List } from "antd";
import { css, styled } from "styled-components";

export const ListItemStyled = styled(List.Item)<{ isSelected: boolean }>`
  display: flex !important;
  justify-content: start !important;
  gap: 8px !important;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: var(--ant-control-item-bg-hover);
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: var(--ant-color-bg-text-hover);
    `}
`;

export const InputStyled = styled(Input)`
  border: none;
`;
