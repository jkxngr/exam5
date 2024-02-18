import React from "react";
import { TractorIcon } from "../../assets/icon/tractor-icon";
import { CircleIcon } from "../../assets/icon/circle-icon";
import { FactoryIc } from "../../assets/icon/factory-icon";
import { Button } from "../../compenents/buttons/button";
import { Card } from "../../compenents/card/card";
import { Team } from "../../compenents/team/team";
import { Offer } from "../../compenents/offer/offer";
import about from "../../assets/img/about.png";
import choose from "../../assets/img/choose.jpg";

export const About = () => {
  return (
    <>
      <section className="bg-aboutBg  bg-no-repeat py-[184px]">
        <div className="container">
          <h2 className="mb-[90px] text-center text-[70px] font-extrabold text-Arapawa">
            About Us
          </h2>
        </div>
      </section>
      <section className="mb-[200px] py-[90px]">
        <div className="container flex items-center justify-between">
          <img src={about} alt="" className="w-[750px]" />
          <div className="w-[671px]">
            <p className="font-secondary text-[36px] text-Padua">About Us</p>
            <h2 className="mb-[14px] text-[50px] font-extrabold text-Arapawa">
              We do Creative Things for Success{" "}
            </h2>
            <p className=" mb-[48px] text-[18px] leading-7 text-CityRain">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley. <br />
              <br /> Simply dummy text of the printing and typesetting industry.
              Lorem had ceased to been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley.
            </p>
            <div className="mb-[30px] flex items-center gap-5">
              <div>
                <div className="flex items-center gap-3">
                  <TractorIcon />
                  <p className="w-[226px] text-[25px] font-medium text-Arapawa ">
                    Modern Agriculture Equipment
                  </p>
                </div>
              </div>
              <div className="flex  items-center gap-3">
                <FactoryIc />
                <p className="w-[226px] text-[25px] font-medium text-Arapawa">
                  No growth hormones are used
                </p>
              </div>
            </div>
            <Button variant="primary">Explore More</Button>
          </div>
        </div>
      </section>
      <section className="bg-Doctor py-[190px]">
        <div className="container flex items-center justify-between">
          <div className="w-[671px]">
            <p className="font-secondary text-[36px] text-Padua">
              Why Choose us?
            </p>
            <h2 className="mb-[14px] text-[50px] font-extrabold text-Arapawa">
              We do not buy from the open market & traders.
            </h2>
            <p className=" mb-[48px] text-[18px] leading-7 text-CityRain">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard the 1500s, when an
              unknown
            </p>
            <div className="flex  w-[339px] items-center gap-2 rounded-[50px] bg-Coronation py-[29px] pl-[27px]">
              <CircleIcon />
              <p className="text-[20px] font-medium text-Arapawa">
                100% Natural Product
              </p>
            </div>
            <p className="mb-[24px] ml-[60px] mt-[12px] w-[444px] text-[18px] leading-7 text-CityRain">
              Simply dummy text of the printing and typesetting industry Lorem
              Ipsum
            </p>
            <div className="flex  w-[339px] items-center gap-2 rounded-[50px] bg-Coronation py-[29px] pl-[27px]">
              <CircleIcon />
              <p className="text-[20px] font-medium text-Arapawa">
                Increases resistance
              </p>
            </div>
            <p className="mb-[24px] ml-[60px] mt-[12px] w-[444px] text-[18px] leading-7 text-CityRain">
              Filling, and temptingly healthy, our Biona Organic Granola with
              Wild Berries is just the thing
            </p>
          </div>
          <img src={choose} alt="" className="" />
        </div>
        <div>
          <Card />
        </div>
      </section>
      <section className="py-[150px]">
        <div className="mx-auto w-[852px] text-center">
          <p className="font-secondary text-[36px] text-Padua">Team</p>
          <h2 className="mb-[14px] text-[50px] font-extrabold text-Arapawa">
            Our Organic Experts
          </h2>
          <p className=" mb-[48px] text-[18px] leading-7 text-CityRain">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
        </div>
        <div>
          <Team />
        </div>
      </section>
      <section className="mb-[200px] bg-Arapawa py-[150px]">
        <div className="mx-auto w-[852px] text-center">
          <p className="font-secondary text-[36px] text-Padua">About Us</p>
          <h2 className="mb-[24px] text-[50px] font-extrabold text-white">
            What We Offer for You
          </h2>
        </div>
        <div>
          <Offer />
        </div>
      </section>
    </>
  );
};
