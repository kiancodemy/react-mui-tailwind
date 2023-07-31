import Header from "@/components/header";
import Qr from "@/components/qrcode";
import * as React from "react";
import SignIn from "@/components/signin";
import Provider from "@/components/context/context";

export default function Home() {
  return (
    <Provider>
      <div className="relative">
        <div className="max-w-[1920px] max-h-[1005px] pb-[343px] bg-[#F6F6F6] top[-337px] left-[-440px]">
          <Header></Header>
          <div className=" max-w-[948px] max-h[1504px] mx-auto mt-[158px] py-[30px] px-[40px] rounded-[5px] bg-[#FFFFFF]">
            <div className="max-w-[868px] max-h-[42px] pb-[10px] bg-[#FFFFFF]">
              <p className="font-roboto ml-[25px] text-[24px] max-w-[220px] max-h-[32px] text-[#474D57] leading-[32px] text-center tracking-normal">
                Log into Iran Source
              </p>
            </div>
            <div className=" flex items-center flex-col  max-w-[868px] max-h-[1380px] pb-[10px] bg-[#FFFFFF]  md:items-center gap-[25px] md:flex-row ">
              <SignIn></SignIn>
              <Qr></Qr>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}
