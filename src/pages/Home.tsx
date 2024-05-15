import CounterCard from "../components/Cards/CounterCard";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";

export default function Home() {
  return (
    <div className="HomePage p-4 h-screen flex flex-col items-center justify-center w-full dark:bg-black dark:text-white">
      <span className="text-2xl mb-16">Welcome to the Home Page!</span>
      <ThemeSwitcher />
      <CounterCard />
    </div>
  );
}
