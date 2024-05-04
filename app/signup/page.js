"use client";
import React, { useState } from "react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [full_name, setFullName] = useState("");
  const Router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://172.31.219.169:8000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        full_name,
      }),
    });

    if (response.ok) {
      const createdUser = await response.json();
      console.log(createdUser);
      // Handle the created user data
      // Redirect to home page
      Router.push("/login");
    } else {
      console.log("Failed", response.status, response.text);
      // Handle the error response
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <Card className="w-[28rem]">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Username" />
            </div>
            <TextInput
              id="username"
              type="text"
              placeholder="Enter your username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput
              id="password"
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="fullName" value="Full Name" />
            </div>
            <TextInput
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              required
              value={full_name}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
}
