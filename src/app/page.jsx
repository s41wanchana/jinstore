import Notification from "../components/common/notification/Notification";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
import TapPanel from "../components/landing-page/TapPanel";
import Categories from "../components/landing-page/Categories";
import EditorPick from "../components/landing-page/EditorPick";
import CategoryProducts from "../components/landing-page/CategoryProducts";
import BestSeller from "../components/landing-page/BestSeller";
import News from "../components/landing-page/News";

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
