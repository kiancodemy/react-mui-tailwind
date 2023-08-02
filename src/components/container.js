import Header from "./header";
import Qr from "./qrcode";
import SignIn from "./signin";
import { useContext } from "react";
import { Manage } from "./context/context";
import Switch from "@mui/material/Switch";

export default function Container() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  let { lang, setlang, dark, setdark } = useContext(Manage);
  return (
    <div>
      <div
        className={` ${
          dark
            ? " max-w-[1920px] max-h-[1005px] pb-[343px] bg-[#F6F6F6] top[-337px] left-[-440px]"
            : "  max-w-[1920px] max-h-[1005px] pb-[343px] bg-[#1C2329] top[-337px] left-[-440px]"
        }`}
      >
        <Header></Header>
        <div
          className={`${
            dark
              ? " max-w-[948px] max-h[1504px] mx-auto mt-[158px] py-[30px] px-[40px] rounded-[5px] bg-[#FFFFFF]"
              : " max-w-[948px] max-h[1504px] mx-auto mt-[158px] py-[30px] px-[40px] rounded-[5px] bg-[#1C2329]"
          }
            
          `}
        >
          <div
            className={`${
              dark
                ? "mb-[25px] max-w-[868px] max-h-[42px] pb-[10px] bg-[#FFFFFF]"
                : " max-w-[868px] max-h-[82px] pb-[10px] bg-[#2B3139]"
            }`}
          >
            <p>
              <Switch
                onClick={() => {
                  setdark(!dark);
                }}
                className="ml-[25px] "
                {...label}
              />
            </p>
            <p
              className={`${
                dark
                  ? "ml-[25px] font-roboto py-[10px]  text-[24px] max-w-[220px] max-h-[32px] text-[#474D57] leading-[32px]  text-center tracking-normal"
                  : "ml-[25px] font-roboto py-[10px]  text-[24px] max-w-[220px] max-h-[32px] text-[#EAECEF] leading-[32px] text-center tracking-normal"
              }`}
            >
              Log into Iran Source
            </p>
          </div>
          <div
            className={`${
              dark
                ? "bg-[#FFFFFF] flex items-center flex-col   max-w-[868px] max-h-[1380px] pb-[10px] md:items-center gap-[25px] md:flex-row "
                : "bg-[#2B3139] flex items-center flex-col  max-w-[868px] max-h-[1380px] pb-[10px] md:items-center gap-[25px] md:flex-row "
            }  `}
          >
            <SignIn></SignIn>
            <Qr></Qr>
          </div>
        </div>
      </div>
    </div>
  );
}
