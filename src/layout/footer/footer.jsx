import React from "react";
import { info } from "../../data/footer";
import { footerLinks } from "../../data/footer";
import { LogoIcon } from "../../assets/icon/logo-icon";
import { FacebookIcon } from "../../assets/icon/facebook-icon";
import { TwitterIcon } from "../../assets/icon/twitter-icon";
import { PinterestIcon } from "../../assets/icon/pinterest-icon";
import { InstagramIcon } from "../../assets/icon/instagram-icon";
export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="bg-subBg flex items-center justify-between rounded-[20px] bg-cover bg-no-repeat px-[70px] py-[100px]">
          <h2 className="w-[357px] text-[50px] font-extrabold text-white">
            Subscribe to our Newsletter
          </h2>
          <form className="flex w-full max-w-[550px] items-center gap-[6px]">
            <input
              type="email"
              className="w-full max-w-[350px] rounded-2xl px-[23px] py-[30px]"
              placeholder="Your Email Address"
            />
            <button className="rounded-[16px] bg-Arapawa px-[39px] py-[29px] text-white">
              Subscribe
            </button>
          </form>
        </div>
        <div className="mx-auto mt-[100px] flex w-[1200px] justify-between">
          <div className="border-r-[1px] pr-[50px] ">
            {info.map((item) => (
              <div key={item.id} className=" text-end">
                <h3 className="mb-[32px] text-[30px] font-bold text-Arapawa">
                  Contact Us
                </h3>
                <p className="text-[18px] font-bold text-CityRain">Email</p>
                <p className="mb-[40px] text-[18px] text-CityRain">
                  {item.email}
                </p>
                <p className="text-[18px] font-bold text-CityRain">Phone</p>
                <p className="mb-[40px] text-[18px] text-CityRain">
                  {item.number}
                </p>
                <p className="text-[18px] font-bold text-CityRain">Address</p>
                <p className="mb-[40px] text-[18px] text-CityRain">
                  {item.addres}
                </p>
              </div>
            ))}
          </div>
          <div className=" px-[50px] text-center">
            <div className="inline-block">
              <LogoIcon />
            </div>
            <p className="mb-[50px] mt-[26px] w-[500px] text-[18px] text-CityRain">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing
            </p>
            <div className="flex justify-center gap-[15px]">
              <InstagramIcon />
              <FacebookIcon />
              <TwitterIcon />
              <PinterestIcon />
            </div>
          </div>
          <div>
            <div className=" border-l-[1px] pl-[50px] text-start">
              <h3 className="mb-[32px] text-[30px] font-bold text-Arapawa">
                Utility Pages
              </h3>
              {footerLinks.map((item) => (
                <div key={item.id} className="w-[285px]">
                  <p className="mb-[30px] text-[18px] text-CityRain">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px] border-t-2 border-t-DiscoBall">
        <p className="py-[17px] text-center text-[18px] text-CityRain">
          Copyright © <span className="font-bold">Organick</span> | Designed by
          <span className="font-bold"> VictorFlow </span> Templates - Powered by{" "}
          <span className="font-bold">Webflow</span>
        </p>
      </div>
    </footer>
  );
};
