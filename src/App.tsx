import { Spin } from "antd";
import React, { Suspense } from "react";
import { AppRouting } from "./router";

const App = (): React.ReactElement => (
  <Suspense fallback={<Spin />}>
    <AppRouting />
  </Suspense>
);

export default App;
