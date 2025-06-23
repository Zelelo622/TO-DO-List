import { ReactElement } from "react";
import { useParams } from "react-router-dom";

export const Details = (): ReactElement => {
  const { id } = useParams<{ id: string }>();

  return <div>Детали задачи с ID: {id}</div>;
};
