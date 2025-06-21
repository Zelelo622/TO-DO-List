import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { EmptyPlaceholderContainer, NotFoundContainer } from "./styles";
import { ROUTES } from "src/router/constants";

export const NotFound = (): ReactElement => {
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate(ROUTES.root.path, { replace: true });
  };

  return (
    <NotFoundContainer>
      <Button type="link" onClick={handleClick}>
        На главную
      </Button>
      <EmptyPlaceholderContainer>
        <div className="icon_wrapper">
          <SearchOutlined style={{ fontSize: "56px" }} />
        </div>
        <Typography.Title>404</Typography.Title>
        <Typography.Text>Запрошенной страницы не существует</Typography.Text>
      </EmptyPlaceholderContainer>
    </NotFoundContainer>
  );
};
