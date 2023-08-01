import Header from "./header";
import Qr from "./qrcode";
import SignIn from "./signin";
import { useContext } from "react";
import { Manage } from "./context/context";

export default function Container() {
  let { lang, setlang, dark, setdark } = useContext(Manage);
  return (
    <div className="relative  ">
      <div className=" max-w-[1920px] max-h-[1005px] pb-[343px] bg-[#1C2329]  top[-337px] left-[-440px]">
        <Header></Header>
        <div className=" max-w-[948px] max-h[1504px] mx-auto mt-[158px] py-[30px] px-[40px] rounded-[5px] bg-[#FFFFFF]">
          <div
            className={`${
              dark
                ? "max-w-[868px] max-h-[42px] pb-[10px] bg-[#FFFFFF]"
                : "max-w-[868px] max-h-[42px] pb-[10px] bg-[#2B3139]"
            }`}
          >
            <p
              className={`${
                dark
                  ? "font-roboto py-[10px]   ml-[25px] text-[24px] max-w-[220px] max-h-[32px] text-[#474D57] leading-[32px] text-center tracking-normal"
                  : "font-roboto py-[10px] ml-[25px] text-[24px] max-w-[220px] max-h-[32px] text-[#EAECEF] leading-[32px] text-center tracking-normal"
              }`}
            >
              Log into Iran Source
            </p>
          </div>
          <div
            className={`${
              dark
                ? "bg-[#FFFFFF] flex items-center flex-col  max-w-[868px] max-h-[1380px] pb-[10px] md:items-center gap-[25px] md:flex-row "
                : "bg-[#2B3139] flex items-center flex-col  max-w-[868px] max-h-[1380px] pb-[10px] md:items-center gap-[25px] md:flex-row "
            } `}
          >
            <SignIn></SignIn>
            <Qr></Qr>
          </div>
        </div>
      </div>
    </div>
  );
}
