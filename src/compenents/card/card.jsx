import React from "react";
import { cards } from "../../data/card";
import { ReturnIcon } from "../../assets/icon/return-icon";
import { FreshIcon } from "../../assets/icon/fresh-icon";
import { SupportIcon } from "../../assets/icon/support-icon";
import { SecureIcon } from "../../assets/icon/secure-icon";
export const Card = () => {
  return (
    <div className="mx-auto flex w-[1118px] justify-between">
      {cards.map((item) => (
        <div key={item.id} className="block w-[257px] rounded-[30px] bg-white px-[38px] py-[50px] text-center">
          <div className="inline-block">
            <item.img />
          </div>
          <p className="mb-[12px] mt-[15px] whitespace-nowrap text-[25px] font-extrabold text-Arapawa">
            {item.name}
          </p>
          <p className="text-[18px] text-CityRain">{item.text}</p>
        </div>
      ))}
    </div>
  );
};
