import React from "react";
import { team } from "../../data/team";
import { FacebookMiniIcon } from "../../assets/icon/facebook-mini-icon";
import { InstagramMiniIcon } from "../../assets/icon/instagram-mini-icon";
import { TwitterMiniIcon } from "../../assets/icon/twitter-mini-icon";
export const Team = () => {
  return (
    <div className="mx-auto flex w-[1400px] justify-between">
      {team.map((item) => (
        <div key={item.id} className="inline-block rounded-2xl bg-Doctor">
          <img src={item.img} alt="" className="block rounded-t-2xl" />
          <div className="rounded-b-2xl px-[28px] py-[35px]">
            <p className=" text-[25px] font-extrabold text-Arapawa">
              {item.name}
            </p>
            <div className=" flex items-center justify-between">
              <p className="font-secondary text-[22px] text-Padua">
                {item.job}
              </p>
              <div className=" flex gap-4">
                <InstagramMiniIcon />
                <FacebookMiniIcon />
                <TwitterMiniIcon />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
