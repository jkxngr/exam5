import React from "react";
import { customer } from "../../data/customers";
export const Customer = () => {
  return (
    <div className="mx-auto flex w-[1030px] gap-[60px]">
      {customer.map((item) => (
        <div
          key={item.id}
          className="bg-SnowFlake h-[211px] w-[211px] rounded-full border-2 border-Padua px-[44px] py-[64px] text-center"
        >
          <p className="align-middle text-[50px] font-extrabold text-Arapawa">
            {item.quantity}
          </p>
          <p className="whitespace-nowrap text-[18px] font-semibold text-Arapawa ">
            {item.category}
          </p>
        </div>
      ))}
    </div>
  );
};
