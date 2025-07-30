import HangMan from "./components/HangMan";
import Letters from "./components/Letters";
import Word from "./components/Word";
import Context from "./context/Context";

export default function Home() {
  return (
    <main className="w-full h-dvh flex flex-col justify-end pb-18 gap-8 items-center">
      <HangMan />
      <Word />
      <Letters />
    </main>
  );
}
