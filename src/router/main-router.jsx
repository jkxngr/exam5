import { Home } from "../pages/home";
import { About } from "../pages/about";
import { ShopSingle } from "../pages/shop-single";
import { Shop } from "../pages/shop";

export const headerLinks = [
  {
    path: "/",
    name: "Home",
    component: <Home />,
  },
  {
    name: "About",
    component: <About />,
    path: "about",
  },
  {
    name: "Shop",
    component: <Shop />,
    path: "shop",
  },
  {
    name: "Shop-single",
    component: <ShopSingle />,
    path: "shop-single",
  },
];
