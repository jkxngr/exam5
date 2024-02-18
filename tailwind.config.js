/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1600px",
        },
      },
      backgroundImage: {
        heroBg: "url('./assets/img/heroBg.png')",
        customerBg: "url('./assets/img/cutomerBg.png')",
        ecoBg: "url('./assets/img/ecoBg.jpg')",
        subBg: "url('./assets/img/subBg.jpg')",
        shopBg: "url('./assets/img/shopBg.png')",
        shopSingleBg: "url('./assets/img/shopSingleBg.jpg')",
        aboutBg: "url('./assets/img/aboutBg.png')",
      },
      fontFamily: {
        secondary: "Yellowtail",
      },
      colors: {
        Arapawa: "#274C5B",
        Padua: "#7EB693",
        FunkyYellow: "#EFD372",
        DiscoBall: "#D4D4D4",
        Doctor: "#F9F8F8",
        HeavySugar: "#EFF6F1",
        CityRain: "#525C60",
        DrWhite: "#FAFAFA",
        ChristmasSilver: "#E0E0E0",
        SeaLettuce: "#68A47F",
        SilverLake: "DEDDDD",
        FortressGray: "#B8B8B8",
        SnowFlake: "#F0F0F0",
        PeacefulRain: "#F1F8F4",
        DiscoBall: "#D4D4D4",
        Coronation: "#ECECEC",
      },
      dropShadow: {
        primary: "drop-shadow(0px 29px 44px rgba(150, 150, 150, 0.25));",
      },

      boxShadow: {
        primary: "0px 20px 35px 0px rgba(167, 167, 167, 0.25)",
      },
      fontSize: {
        secondary: "36px",
      },
    },
  },
  plugins: [],
};
