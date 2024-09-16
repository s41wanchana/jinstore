import Notification from "./../utils/Notification";
import Header from "./../utils/Header";
import Footer from "./../utils/Footer";
import TapPanel from "./landing-page-components/TapPanel";
import Categories from "./landing-page-components/Categories";
import EditorPick from "./landing-page-components/EditorPick";
import CategoryProducts from "./landing-page-components/CategoryProducts";
import BestSeller from "./landing-page-components/BestSeller";
import News from "./landing-page-components/News";

export default function Home() {
  return (
    <>
      <Notification />
      <Header />
      <TapPanel />
      <Categories />
      <EditorPick />
      <CategoryProducts />
      <BestSeller />
      <News />
      <Footer />
    </>
  );
}
