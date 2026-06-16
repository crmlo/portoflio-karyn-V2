import { Navbar } from "../../components/shared/Navbar";
import { PortfolioHeader7 } from "./components/PortfolioHeader7";
import { Layout65 } from "./components/Layout65";
import { Layout463 } from "./components/Layout463";
import { Layout65_1 } from "./components/Layout65_1";
import { Layout237 } from "./components/Layout237";
import { Layout10 } from "./components/Layout10";
import { Layout105 } from "./components/Layout105";
import { Content18 } from "./components/Content18";
import { Layout306 } from "./components/Layout306";
import { Layout105_1 } from "./components/Layout105_1";
import { Stats17 } from "./components/Stats17";
import { Header44 } from "./components/Header44";
import { Footer } from "../../components/shared/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-[72px]">
        <PortfolioHeader7 />
        <Layout65 />
        <Layout463 />
        <Layout65_1 />
        <Layout237 />
        <Layout10 />
        <Layout105 />
        <Content18 />
        <Layout306 />
        <Layout105_1 />
        <Stats17 />
        <Header44 />
        <Footer />
      </main>
    </>
  );
}
