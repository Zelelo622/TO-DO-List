import { Spin } from "antd";
import React, { Suspense } from "react";
import { AppRouting } from "../router";
import { AppTheme } from "src/theme/AppTheme";
import { createStore, StoreContext } from "src/store/DAL";

export const StoreContextValue = createStore();

const App = (): React.ReactElement => (
  <AppTheme>
    <Suspense fallback={<Spin />}>
      <StoreContext.Provider value={StoreContextValue}>
        <AppRouting />
      </StoreContext.Provider>
    </Suspense>
  </AppTheme>
);

export default App;
