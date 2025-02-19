import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import appRoutes from "./routes/appRoutes";
import Loader from "./utils/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {appRoutes.map((route, index) => {
          return (
            <Route key={index} path={route?.path} element={route?.element}>
              {route?.children &&
                route?.children.map((childRoute, childIndex) => (
                  <Route
                    key={childIndex}
                    path={childRoute?.path}
                    element={childRoute?.element}
                    {...(childRoute?.index && {
                      index: childRoute.index,
                    })}
                  />
                ))}
            </Route>
          );
        })}
      </Routes>
    </Suspense>
  );
}

export default App;
