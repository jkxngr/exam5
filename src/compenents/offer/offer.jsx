import React from "react";
import { offer } from "../../data/offer";
export const Offer = () => {
  return (
    <div className="mx-auto flex w-[1400px] justify-between">
      {offer.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt="" className=" rounded-3xl object-contain" />
          <p className="mt-[24px] text-center text-[25px] text-white">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};
