import Image from "next/image";
import svg2 from "./image/svg2.svg";
import svg from "./image/svg.svg";

export default function Qr() {
  return (
    <div className="max-w-[400px] max-h-[370px] py-[20px] px-[50px] rounded-[5px] border-[1.5px] bg-[#FFFFFF] flex flex-col justify-center gap-[15px] items-center ">
      <div className=" flex  justify-center items-center bg-[#E6E8EA] max-w-[179px] h-[179px] rounded-[5px] border-[5px]">
        <Image
          className="w-[95%] h-[95%]  object-fit"
          alt="qr"
          src={svg}
        ></Image>
      </div>
      <p className="w-[127px] h-[23px] text-[14px] font-[500] leading-[23px] tracking-[0.1px] text-center text-[#1E2329]">
        Log in with QR code
      </p>
      <div className="w-[300px] mt-[5px] max-h-[46px] font-normal text-[14px] text-center text-[#96999C] leading-[22.65px] tracking-[0.25px] font-roboto">
        <p>
          Scan this code with your mobile to log in.Lorem ipsum dolor sit amet,
        </p>
      </div>
    </div>
  );
}
