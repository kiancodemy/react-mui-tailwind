import ResponsiveAppBar from "./appbar";
import { useContext } from "react";
import { Manage } from "./context/context";

export default function Header() {
  const { lang, setlang, dark, setdark } = useContext(Manage);

  return <ResponsiveAppBar></ResponsiveAppBar>;
}
