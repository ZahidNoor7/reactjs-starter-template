import React from "react";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";

export default function Home() {
  return (
    <div className="HomePage p-4 h-screen w-full dark:bg-black dark:text-white">
      Welcome to the Home Page!
      <ThemeSwitcher />
    </div>
  );
}
