import ResponsiveAppBar from "./appbar";
import { useContext } from "react";
import { Manage } from "./context/context";

export default function Header() {
  const { lang, setlang, dark, setdark } = useContext(Manage);

  return (
    <div
      className={`${
        dark ? "bg-[#FFFFFF]" : "bg-[#1C2329]"
      } "max-w-[1920px] max-h-[61px] py-[12px] px-[30px] gap-[8px] bg-[#FFFFFF] shadow-[#6463631A] shadow-[0_1px_6px_0px]"`}
    >
      <ResponsiveAppBar></ResponsiveAppBar>
    </div>
  );
}
