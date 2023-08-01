import Image from "next/image";
import svg2 from "./image/svg2.svg";
import svg from "./image/svg.svg";
import { useState } from "react";
import { Button } from "@mui/material";
import { useContext } from "react";
import { Manage } from "./context/context";

export default function Qr() {
  let { lang, setlang, dark, setdark } = useContext(Manage);

  return (
    <div
      className={`${
        dark
          ? " max-w-[400px] max-h-[370px] py-[20px] px-[50px] rounded-[5px] border-[1.5px]  flex flex-col justify-center gap-[15px] items-center"
          : "max-w-[400px] max-h-[370px] py-[20px] px-[50px] rounded-[5px] border-[1.5px]  flex flex-col justify-center gap-[15px] items-center bg-[#2B3139] border-[#2B3139] shadow-[0_2px_8px_0px] shadow-[ #14141466]"
      }`}
    >
      <div className=" flex  justify-center items-center bg-[#E6E8EA] max-w-[179px] h-[179px] rounded-[5px] border-[5px]">
        <Image
          className="w-[95%] h-[95%]  object-fit"
          alt="qr"
          src={dark ? svg : svg2}
        ></Image>
      </div>
      <p
        className={`${
          dark
            ? "w-[127px] h-[23px] text-[14px] font-[500] leading-[23px] tracking-[0.1px] text-center text-[#1E2329]"
            : "text-[#EAECEF] w-[127px] h-[23px] text-[14px] font-[500] leading-[23px] tracking-[0.1px] text-center text-[#1E2329]"
        }`}
      >
        {lang ? (
          <span>Log in with QR code</span>
        ) : (
          <span className="text-right font-iran ">با کیو آر کد وارد شوید</span>
        )}
      </p>
      <div className="w-[300px] mt-[5px] max-h-[46px] font-normal text-[14px] text-center text-[#96999C] leading-[22.65px] tracking-[0.25px] font-roboto">
        {lang ? (
          <span>
            Scan this code with your mobile to log in.Lorem ipsum dolor sit
            amet,
          </span>
        ) : (
          <span className="text-right font-iran ">
            برای رود این کد را روی موبایل خود اسکن کنید{" "}
          </span>
        )}
      </div>
    </div>
  );
}
