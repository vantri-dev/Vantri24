import { Routes, Route } from "react-router-dom";
import { publicRouter } from "./routes/router";
import DefaultLayout from "./components/layout";
import { Fragment } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
function App() {
  return (
    <div>
      <PayPalScriptProvider  options={{ clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
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
      </PayPalScriptProvider>
    </div>
  );
}

export default App;
