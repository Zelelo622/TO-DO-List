import { Spin } from "antd";
import React, { Suspense } from "react";
import { AppRouting } from "../router";
import { AppTheme } from "src/theme/AppTheme";

const App = (): React.ReactElement => (
  <AppTheme>
    <Suspense fallback={<Spin />}>
      <AppRouting />
    </Suspense>
  </AppTheme>
);

export default App;
