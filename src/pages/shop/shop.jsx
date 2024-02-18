import React from "react";
import { ShopProduct } from "../../compenents/product/product";
export const Shop = () => {
  return (
    <section className="bg-shopBg  bg-no-repeat py-[184px]">
      <div className="container">
        <h2 className="mb-[290px] text-center text-[70px] font-extrabold text-Arapawa">
          Shop
        </h2>
        <ShopProduct />
      </div>
    </section>
  );
};
