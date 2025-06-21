import { Spin } from "antd";
import { PropsWithChildren, ReactElement, Suspense } from "react";

// TODO: в fallback добавить лоэдер отцентрированный
export const SafeLoad = ({ children }: PropsWithChildren): ReactElement => (
  <Suspense fallback={<Spin />}>{children}</Suspense>
);
