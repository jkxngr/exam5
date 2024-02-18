import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { nanoid } from "nanoid";
import { headerLinks } from "./router/main-router";
import { ShopSingle } from "./pages/shop-single";

function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {headerLinks.map((route) => (
              <Route
                index={route.path ? false : true}
                key={nanoid()}
                path={route.path}
                element={route.component}
              />
              ))}
              <Route path="/shop-single/:id" element={<ShopSingle />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
