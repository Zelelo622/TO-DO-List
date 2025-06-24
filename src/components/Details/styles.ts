import { BubbleMenu } from "@tiptap/react";
import { styled } from "styled-components";

export const EditorWrapper = styled.div`
  height: 100%;

  .editor-content {
    height: 100%;
  }

  .ProseMirror {
    border: 1px solid var(--ant-color-text-placeholder);
    padding: 16px;
    border-radius: 4px;
    min-height: 300px;
    height: 100%;

    h1 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 16px;
    }

    h2 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 12px;
    }

    p {
      margin-bottom: 12px;
    }

    ul[data-type="taskList"] {
      list-style: none;
      padding: 0;
    }

    ul[data-type="taskList"] li {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
    }

    ul[data-type="taskList"] li p {
      margin-bottom: 0;
    }

    ul[data-type="taskList"] li input[type="checkbox"] {
      margin-right: 8px;
    }
  }
`;

export const StyledBubbleMenu = styled(BubbleMenu)`
  display: flex;
  background: #1f1f1f;
  padding: 4px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  gap: 8px;

  .ant-btn {
    color: #fff;
    background: transparent;
    border: none;
    &:hover {
      background: #ffffff1a;
    }
    &.is-active {
      background: #1677ff;
    }
  }
`;
