import Header from "@/components/header";
import Qr from "@/components/qrcode";
import * as React from "react";
import SignIn from "@/components/signin";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <div className="max-w-[1920px] max-h-[1005px] pb-[343px] bg-[#F6F6F6] top[-337px] left-[-440px]">
        <Header></Header>
        <div className="max-w-[948px] max-h[504px] top-[168px] absolute left-[486px] py-[30px] px-[40px] rounded-[5px] bg-[#FFFFFF]">
          <div className="max-w-[868px] max-h-[42px] pb-[10px] bg-[#FFFFFF]">
            <p className="font-roboto text-[24px] max-w-[220px] max-h-[32px] text-[#474D57] leading-[32px] text-center tracking-normal">
              Log into Iran Source
            </p>
          </div>
          <div className=" max-w-[868px] max-h-[380px] pb-[10px] bg-[#FFFFFF]">
            <SignIn></SignIn>
            <Qr></Qr>
          </div>
        </div>
      </div>
    </div>
  );
}
