"use client";
import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
export default function LoginSwitch() {
  const Router = useRouter();
  useEffect(() => {
    if (!getCookie("data")) {
      Router.push("/login");
    }
  }, []);
  return <></>;
}
