import { css, Global } from "@emotion/react";
import Roboto from "@trucking/assets/fonts/Roboto.ttf";
import Viga from "@trucking/assets/fonts/Viga.ttf";

const globalStyles = () => {
  return (
    <Global
      styles={() => css`
        @font-face {
          font-family: "Roboto";
          font-style: normal;
          font-weight: regular;
          src: url(${Roboto}) format("truetype");
        }
        @font-face {
          font-family: "Viga";
          font-style: normal;
          font-weight: regular;
          src: url(${Viga}) format("truetype");
        }
        html,
        body {
          margin: 0;
          padding: 0;
          min-height: 100%;
          font-family: "Roboto";
          scroll-behavior: smooth;
        }
        body {
          -moz-osx-font-smoothing: grayscale;
          -webkit-text-size-adjust: 100%;
          -webkit-font-smoothing: antialiased;
          font-size: 14px;
          padding-top: 0px;
          margin: 0px;
          font-family: "Roboto";
        }
        * {
          box-sizing: border-box;
          &:before,
          &:after {
            box-sizing: border-box;
          }
        }
        .swiper {
          width: 100%;
          height: 100%;
        }

        .swiper-slide {
          text-align: center;
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}
    />
  );
};

export { globalStyles };
