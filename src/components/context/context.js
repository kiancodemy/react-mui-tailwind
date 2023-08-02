import { createContext } from "react";

import { useState } from "react";
export const Manage = createContext();

export default function Provider({ children }) {
  const [lang, setlang] = useState(true);
  const [dark, setdark] = useState(true);

  const value = { lang, setlang, dark, setdark };

  return <Manage.Provider value={value}>{children}</Manage.Provider>;
}
