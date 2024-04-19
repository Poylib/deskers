"use client";

import Link from "next/link";

import { useSpyElem } from "../hook/useSpy";
import ThemeSwitch from "./theme/Switch";
import ScrollProgressBar from "../components/ScrollProgressBar";

export const Header = () => {
  const { ref, marginTop } = useSpyElem(65);

  return (
    <nav
      style={{ marginTop }}
      ref={ref}
      className="fixed z-40 flex w-full flex-col items-center justify-center border-b bg-background shadow-sm"
    >
      <div className="mt-1 flex h-[64px] w-full max-w-[1200px] items-center justify-between px-4">
        <div className="flex items-center text-lg font-medium">
          <Link href="/">DESKERS</Link>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center text-sm mr-2 font-medium">
            <Link href="/about">ABOUT</Link>
          </div>
          <div className="flex items-center text-sm font-medium">
            <Link href="/content-seo">CONTENTS-SEO</Link>
          </div>
          <ThemeSwitch />
        </div>
      </div>
      <ScrollProgressBar />
    </nav>
  );
};
