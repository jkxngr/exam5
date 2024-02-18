import React from "react";
import { news } from "../../data/news";
import { Button } from "../buttons/button";
import { AuthorIcon } from "../../assets/icon/author-icon";
export const News = () => {
  return (
    <div className="relative flex gap-[46px]">
      {news.map((item) => (
        <div key={item.id} className="p-[46px]">
          <img src={item.img} alt="" className="rounded-[25px]" />
          <div className="absolute top-20 ml-[40px] flex h-[82px] w-[82px] flex-col items-center justify-around rounded-full bg-white">
            <p className="text-[25px]  font-extrabold text-Arapawa">
              {item.date}
            </p>
            <br />
            <p className="text-[20px]  font-extrabold text-Arapawa">
              {item.month}
            </p>
          </div>
          <div className="shadow-primary relative bottom-[300px] left-[40px]  mt-[40px] inline-block w-[580px] rounded-[30px] bg-white px-[57px] py-[46px]">
            <div className="flex gap-2">
              <AuthorIcon />
              <p className="mb-[15px] text-[18px] text-Arapawa">
                {item.author}
              </p>
            </div>
            <h3 className="text-[25px] font-extrabold text-Arapawa">
              {item.name}
            </h3>
            <p className="mb-[15px] text-[18px] text-CityRain">{item.text}</p>
            <Button variant="secondary">Read More</Button>
          </div>
        </div>
      ))}
    </div>
  );
};
