import HangMan from "./components/HangMan";
import Letters from "./components/Letters";


export default function Home() {
  return (
    <main className="w-full h-dvh flex flex-col justify-end pb-18 gap-24 items-center">
      <HangMan/>
      <Letters/>
    </main>
  );
}
