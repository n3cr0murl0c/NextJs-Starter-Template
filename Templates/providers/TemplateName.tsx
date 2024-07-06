"use client";

import { createContext, useContext, useEffect, useState } from "react";

const TemplateNameContext = createContext(null);

export const useTemplateName = () => useContext(TemplateNameContext);

function TemplateNameProvider({ children }: { children: React.ReactNode }) {
  const [TemplateNameState, setTemplateNameState] = useState<any | null>(null);
  const [rafState, setRaf] = useState<number>(0);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <TemplateNameContext.Provider value={TemplateNameState}>
      {children}
    </TemplateNameContext.Provider>
  );
}

export default TemplateNameProvider;
