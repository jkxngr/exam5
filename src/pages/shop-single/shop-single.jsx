import React from "react";
import { useParams } from "react-router-dom";
import { StarIcon } from "../../assets/icon/star-icon";
import { products } from "../../data/product";
import { Button } from "../../compenents/buttons/button";
import { ShopSingleProduct } from "../../compenents/product/product";
export const ShopSingle = () => {
  const { id } = useParams();
  const data = products.find((item) => item.id == id);
  return (
    <div>
      <div className="bg-shopSingleBg  bg-no-repeat py-[184px]">
        <h2 className="mb-[90px] text-center text-[70px] font-extrabold text-Arapawa">
          Shop Single
        </h2>
      </div>
      <div className="mx-auto flex  w-[1300px] items-center gap-[88px] ">
        <div className="relative">
          <img src={data.img} alt="" className="rounded-2xl bg-Doctor" />
          <p className="absolute left-8 top-8 rounded-[8px] bg-Arapawa px-[12px] py-[5px] text-white">
            {data.type}
          </p>
        </div>
        <div className="w-[658px]">
          <h2 className="mb-[9px] text-[40px] font-semibold text-Arapawa">
            {data.name}
          </h2>
          <StarIcon />
          <div className="mb-[27px] mt-[9px] flex items-center gap-2">
            <p className="text-[20px] font-semibold text-FortressGray line-through">
              {data.realprice}
            </p>
            <p className="text-[25px] font-bold text-Arapawa">
              {data.discprice}
            </p>
          </div>
          <p className="mb-[35px] text-[18px] text-CityRain">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-[20px] font-bold text-Arapawa">Quantity :</p>
            <p className="inline-block rounded-[16px] border-2 border-Arapawa px-[61px] py-[28px] text-[20px] font-bold text-Arapawa">
              1
            </p>
            <Button variant="primary">Add To Cart</Button>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-[140px] mt-[70px] w-[1200px]">
        <div className="mx-auto w-[700px]">
          <button className="mr-[20px] inline-block rounded-[16px] bg-Arapawa px-[39px] py-[29px] text-[25px] font-bold text-white">
            Product Description
          </button>
          <button className="inline-block rounded-[16px] bg-HeavySugar px-[39px]  py-[29px] text-[25px] font-bold text-Arapawa">
            Additional Info
          </button>
        </div>
        <p className="mt-[30px] w-[1137px] text-center text-[18px] text-CityRain">
          Welcome to the world of natural and organic. Here you can discover the
          bounty of nature. We have grown on the principles of health, ecology,
          and care. We aim to give our customers a healthy chemical-free meal
          for perfect nutrition. It offers about 8–10% carbs. Simple sugars —
          such as glucose and fructose — make up 70% and 80% of the carbs in
          raw.
        </p>
      </div>
      <div className="mx-auto mb-[150px] w-[1400px]">
        <h2 className="mb-[40px] text-center text-[50px] font-extrabold text-Arapawa">
          Related Products
        </h2>
        <ShopSingleProduct />
      </div>
    </div>
  );
};
