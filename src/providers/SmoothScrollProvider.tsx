"use client";
import Lenis from "lenis";
import { createContext, useContext, useEffect, useState } from "react";

const ScrollContext = createContext(null);

export const useScrollContext = () => useContext(ScrollContext);

function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const [rafState, setRaf] = useState<number>(0);

  useEffect(() => {
    const lenisRef = new Lenis();
    let rf;
    function raf(time: number) {
      lenisRef.raf(time);
      requestAnimationFrame(raf);
    }

    rf = requestAnimationFrame(raf);

    setRaf(rf);
    setLenis(lenisRef);

    return () => {
      if (lenisRef) {
        cancelAnimationFrame(rafState);
        lenisRef.destroy();
      }
    };
  }, []);

  return (
    <ScrollContext.Provider
      //@ts-expect-error
      value={lenis}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export default SmoothScrollProvider;
