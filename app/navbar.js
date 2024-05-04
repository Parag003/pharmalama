"use client";
import React, { useEffect } from "react";
import { IoMdCart } from "react-icons/io";
import SideButton from "./topbutton";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { deleteCookie, getCookie } from "cookies-next";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Navbarc() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Router = useRouter();
  useEffect(() => {
    if (getCookie("data")) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <img
          src="/tablets.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button
          onClick={() => {
            if (isLoggedIn) {
              deleteCookie("data");
              setIsLoggedIn(false);
              Router.push("/login");
            } else {
              Router.push("/login");
            }
          }}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </Button>
        <NavbarToggle />
      </div>
    </Navbar>
  );
}
