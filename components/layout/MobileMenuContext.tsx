"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type MobileMenuContextValue = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const MobileMenuContext = createContext<MobileMenuContextValue | null>(null);

export function MobileMenuProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MobileMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export function useMobileMenu() {
  const ctx = useContext(MobileMenuContext);
  if (!ctx) {
    throw new Error("useMobileMenu must be used within MobileMenuProvider");
  }
  return ctx;
}
