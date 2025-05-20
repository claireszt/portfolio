import AboutMe from "../sections/AboutMe";
import Header from "../components/layout/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen max-w-5xl mx-auto px-4">
      <Header />
      <AboutMe />
    </main>
  );
}
