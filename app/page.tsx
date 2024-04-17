import About from "@/components/About";
import Detail from "@/components/Detail";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="h-full w-full  bg-[url('/LooperGroup2.png')] bg-no-repeat">
      <div className="flex flex-col gap-20">
        <Banner />
        <About />
        <Detail />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
