"use client";
import React, { useState } from "react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
export default function Login() {
  const Router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append("username", email);
    formData.append("password", password);

    const response = await fetch("http://172.31.219.169:8000/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    if (response.ok) {
      const data = await response.json();
      const { access_token } = data;
      console.log(access_token);
      // Store the JWT token in cookies
      setCookie("data", access_token);
      Router.push("/");
      Router.refresh();
      // Redirect to another page or perform any other action
      // window.location.href = "/dashboard";
    } else {
      // Handle login error
      console.error("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Card className="w-[28rem]">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="UserName" />
            </div>
            <TextInput
              id="email1"
              placeholder="name@flowbite.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
}
