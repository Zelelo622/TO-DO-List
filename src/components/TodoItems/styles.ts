import { List } from "antd";
import { styled } from "styled-components";

export const ListItemStyled = styled(List.Item)`
  display: flex !important;
  justify-content: start !important;
  gap: 8px !important;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: var(--ant-control-item-bg-hover);
  }
`;
