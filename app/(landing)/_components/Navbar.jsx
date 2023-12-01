"use client";

import React from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ui/ModeToggle";
import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const scrolled = useScroll();
  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full px-6 pt-3 pb-3",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className=" md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        <Button variant="ghost" size="sm">
          Login
        </Button>
        <Button>Get Notion Free</Button>

        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
