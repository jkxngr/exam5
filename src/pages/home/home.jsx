import React from "react";
import { Button } from "../../compenents/buttons/button";
import { banner } from "../../data/banner";
import { OrganicIcon } from "../../assets/icon/organic-icon";
import { QualityIcon } from "../../assets/icon/quality-icon";
import { Product } from "../../compenents/product/product";
import { StarIcon } from "../../assets/icon/star-icon";
import { Customer } from "../../compenents/customer";
import { OrganicProduct } from "../../compenents/product/product";
import { News } from "../../compenents/news";
import aboutUs from "../../assets/img/aboutUs.png";
import customer from "../../assets/img/customer.jpg";
import eco from "../../assets/img/ecoBg.jpg";
export const Home = () => {
  return (
    <>
      <section className="bg-heroBg py-[210px] text-[36px]">
        <div className="container">
          <p className="font-secondary text-SeaLettuce">100% Natural Food</p>
          <h1 className="mb-[23px] w-[520px] text-[70px] font-extrabold text-Arapawa">
            Choose the best healthier way of life
          </h1>
          <Button variant="secondary">Explore Now</Button>
        </div>
      </section>
      <section className="py-[150px]">
        <div className="mx-auto flex w-[1400px] gap-7 ">
          {banner.slice(0, 2).map((item) => (
            <div key={item.id} className="relative">
              <div className="absolute left-[60px] top-[100px]">
                <p className={item.style1}>{item.text}</p>
                <h3 className={item.style2}>{item.name}</h3>
              </div>
              <img src={item.img} alt="" className="rounded-[26px]" />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-Doctor py-[90px]">
        <div className="container flex items-center justify-between">
          <img src={aboutUs} alt="" />
          <div>
            <p className="font-secondary text-[36px] text-Padua">About Us</p>
            <h2 className="mb-[14px] text-[50px] font-extrabold text-Arapawa">
              We Believe in Working Accredited Farmers
            </h2>
            <p className=" mb-[48px] text-[18px] leading-7 text-CityRain">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="mb-[30px] flex items-center gap-5">
              <OrganicIcon />
              <div>
                <p className="mb-[7px] text-[25px] font-extrabold text-Arapawa">
                  Organic Foods Only
                </p>
                <p className="w-[444px] text-[18px] text-CityRain">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="mb-[50px] flex items-center gap-5">
              <QualityIcon />
              <div>
                <p className="mb-[7px] text-[25px] font-extrabold text-Arapawa">
                  Quality Standards{" "}
                </p>
                <p className="w-[444px] text-[18px] text-CityRain">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <Button variant="primary">Shop Now</Button>
          </div>
        </div>
      </section>
      <section>
        <div className="container  py-[150px]">
          <p className="text-center font-secondary text-secondary text-Padua">
            Categories
          </p>
          <h2 className="mb-[40px] text-center text-[50px] font-extralight ">
            Our Products
          </h2>
          <Product />
          <div className="mx-auto  mt-[122px] w-[185px]">
            <Button variant="primary">Load More</Button>
          </div>
        </div>
      </section>
      <section className="bg-customerBg bg-cover bg-no-repeat py-[164px]">
        <div className="container">
          <div className="mx-auto w-[780px] text-center">
            <p className="font-secondary text-secondary text-Padua ">
              Testimonial
            </p>
            <h2 className="mb-[51px] text-[50px] font-extrabold text-Arapawa">
              What Our Customer Saying?
            </h2>
            <div className="mx-auto  flex w-[100px] flex-col gap-5">
              <img src={customer} alt="" className="rounded-full" />
              <StarIcon />
            </div>
            <p className="mb-[18px] mt-[25px] text-[18px] text-CityRain">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </p>
            <p className="text-[25px] font-semibold text-Arapawa">
              Sara Taylor
            </p>
            <p className="text-[15px]">Consumer</p>
          </div>
          <Customer />
        </div>
      </section>
      <section className="bg-Arapawa py-[200px]">
        <div className="container">
          <div className="mb-[50px] flex items-end justify-between">
            <div>
              <p className="font-secondary text-secondary text-Padua">Offer</p>
              <h2 className="text-[50px] font-extrabold text-white">
                We Offer Organic For You
              </h2>
            </div>
            <div>
              <Button variant="secondary">View All Product</Button>
            </div>
          </div>

          <OrganicProduct />
        </div>
      </section>
      <section className="and relative  h-[930px] ">
        <div className="relative mx-auto flex ">
          <img src={eco} alt="" />
          <div className="and absolute left-1/2 top-1/2 w-[800px]  -translate-x-1/4 -translate-y-1/2 transform	 rounded-[20px] bg-white	 px-[78px] py-[90px]">
            <p className="font-secondary text-secondary text-Padua">
              Eco Friendly
            </p>
            <h2 className="mb-[35px] text-[50px] font-extrabold text-Arapawa">
              Econis is a Friendly Organic Store
            </h2>
            <h3 className="text-[25px] font-medium text-Arapawa">
              Start with Our Company First
            </h3>
            <p className="mb-[35px] text-[18px] text-CityRain">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
            <h3 className="text-[25px] font-medium text-Arapawa">
              Learn How to Grow Yourself
            </h3>
            <p className="mb-[35px] text-[18px] text-CityRain">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
            <h3 className="text-[25px] font-medium text-Arapawa">
              Farming Strategies of Today
            </h3>
            <p className="mb-[35px] text-[18px] text-CityRain">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-PeacefulRain py-[187px]">
        <div className=" flex justify-center gap-[40px] text-start">
          {banner.slice(2, 5).map((item) => (
            <div key={item.id} className="text-center">
              <p className="absolute ml-[100px] mt-[220px] block rounded-[20px] bg-white px-[64px] py-[13px] text-[25px] font-medium text-Arapawa">
                {item.name}
              </p>
              <img src={item.img} alt="" className="w-[500px]" />
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-secondary text-secondary text-Padua">News</p>
              <h2 className="w-[701px] text-[50px] font-extrabold text-Arapawa">
                Discover weekly content about organic food, & more
              </h2>
            </div>
            <div>
              <Button variant="bordered"> More News</Button>
            </div>
          </div>
          <div>
            <News />
          </div>
        </div>
      </section>
    </>
  );
};
