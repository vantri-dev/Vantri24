import {  Routes, Route } from "react-router-dom";
import { publicRouter } from "./routes/router";
import DefaultLayout from "./components/layout";
import { Fragment } from "react";
function App() {
  return (
    <div>
      <Routes>
        {publicRouter.map((router, index) => {
          const Layout = router.layout === null ? Fragment : DefaultLayout;
          const Page = router.component;
          return (
            <Route
              key={index}
              path={router.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
