import React from "react";
import { products } from "../../data/product";
import { StarIcon } from "../../assets/icon/star-icon";
import { Link } from "react-router-dom";
export const Product = () => {
  return (
    <div className="flex flex-wrap  justify-between gap-5 ">
      {products.slice(0, 8).map((item) => (
        <Link key={item.id} to={`/shop-single/${item.id}`}>
          <div className="flex w-[335px] flex-col items-start justify-between rounded-[30px] bg-Doctor px-[32px] py-[20px]">
            <img src={item.img} alt="" />
            <p className="absolute rounded-[8px] bg-Arapawa px-[12px] py-[5px] text-white">
              {item.type}
            </p>
            <div>
              <p className="mb-[13px] text-[20px] font-semibold text-Arapawa">
                {item.name}
              </p>
              <span className="mb-[6px] block w-[270px] border-[1px] border-SilverLake"></span>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-[15px] font-semibold text-FortressGray line-through">
                    {item.realprice}
                  </p>
                  <p className="text-[18px] font-bold text-Arapawa">
                    {item.discprice}
                  </p>
                </div>
                <StarIcon />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export const OrganicProduct = () => {
  return (
    <div className="flex flex-wrap  justify-between gap-5 ">
      {products.slice(12, 16).map((item) => (
        <Link key={item.id} to={`/shop-single/${item.id}`}>
          <div className="flex h-[483px]  w-[335px] flex-col items-start justify-between  rounded-[30px] bg-Doctor px-[32px] py-[20px]">
            <img src={item.img} alt="" className="mt-[60px]" />
            <p className="absolute rounded-[8px] bg-Arapawa px-[12px] py-[5px] text-white">
              {item.type}
            </p>
            <div>
              <p className="mb-[13px] text-[20px] font-semibold text-Arapawa">
                {item.name}
              </p>
              <span className="mb-[6px] block w-[270px] border-[1px] border-SilverLake"></span>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-[15px] font-semibold text-FortressGray line-through">
                    {item.realprice}
                  </p>
                  <p className="text-[18px] font-bold text-Arapawa">
                    {item.discprice}
                  </p>
                </div>
                <StarIcon />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const ShopProduct = () => {
  return (
    <div className="flex flex-wrap  justify-between gap-5 ">
      {products.slice(0, 12).map((item) => (
        <Link key={item.id} to={`/shop-single/${item.id}`}>
          <div className="flex   w-[335px] flex-col items-start justify-between  rounded-[30px] bg-Doctor px-[32px] py-[20px]">
            <img
              src={item.img}
              alt=""
              className="mt-[50px] bg-blend-multiply	"
            />
            <p className="absolute rounded-[8px] bg-Arapawa px-[12px] py-[5px] text-white">
              {item.type}
            </p>
            <div>
              <p className="mb-[13px] text-[20px] font-semibold text-Arapawa">
                {item.name}
              </p>
              <span className="mb-[6px] block w-[270px] border-[1px] border-SilverLake"></span>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-[15px] font-semibold text-FortressGray line-through">
                    {item.realprice}
                  </p>
                  <p className="text-[18px] font-bold text-Arapawa">
                    {item.discprice}
                  </p>
                </div>
                <StarIcon />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const ShopSingleProduct = () => {
  return (
    <div className="flex flex-wrap  justify-between gap-5 ">
      {products.slice(0, 4).map((item) => (
        <Link key={item.id} to={`/shop-single/${item.id}`}>
          <div className="flex   w-[335px] flex-col items-start justify-between  rounded-[30px] bg-Doctor px-[32px] py-[20px]">
            <img
              src={item.img}
              alt=""
              className="mt-[50px] bg-blend-multiply	"
            />
            <p className="absolute rounded-[8px] bg-Arapawa px-[12px] py-[5px] text-white">
              {item.type}
            </p>
            <div>
              <p className="mb-[13px] text-[20px] font-semibold text-Arapawa">
                {item.name}
              </p>
              <span className="mb-[6px] block w-[270px] border-[1px] border-SilverLake"></span>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-[15px] font-semibold text-FortressGray line-through">
                    {item.realprice}
                  </p>
                  <p className="text-[18px] font-bold text-Arapawa">
                    {item.discprice}
                  </p>
                </div>
                <StarIcon />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
