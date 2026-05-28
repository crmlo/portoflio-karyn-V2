import { Navbar3 } from "./components/home/Navbar3";
import { Header1 } from "./components/home/Header1";
import { Layout241 } from "./components/home/Layout241";
import { Header64 } from "./components/home/Header64";
import { Layout262 } from "./components/home/Layout262";
import { Logo3 } from "./components/home/Logo3";
import { Portfolio16 } from "./components/home/Portfolio16";
import { Testimonials } from "./components/home/Testimonials";
import { CtaBanner } from "./components/home/CtaBanner";
import { Footer } from "./components/shared/Footer";

export default function Home() {
  return (
    <>
      <Navbar3 />
      <main className="pt-16 md:pt-[72px]">
        <Header1 />
        <Layout241 />
        <Header64 />
        <Layout262 />
        <Logo3 />
        <Portfolio16 />
        <Testimonials />
        <CtaBanner />
        <Footer />
      </main>
    </>
  );
}
