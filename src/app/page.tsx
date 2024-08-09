import About from "@/pages/About";
import Hero from "@/pages/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero/>
      <About/>
    </main>
  );
}
