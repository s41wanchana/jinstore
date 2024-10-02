import Notification from "../components/common/notification/Notification";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
import TapPanel from "../components/landing-page/TapPanel";
import Categories from "../components/landing-page/categories-nav/Categories";
import EditorPick from "../components/landing-page/EditorPick";
import CategoryProducts from "../components/landing-page/CategoryProducts";
import BestSeller from "../components/landing-page/BestSeller";
import News from "../components/landing-page/News";
import PromotionBar from "@/components/common/PromotionBar";

export default function Home() {
  return (
    <>
      <Notification />
      <Header />
      <TapPanel />
      <Categories />
      <div
        id="landing-page-main-content-bg"
        className="bg-[#ECEBEE] px-48 flex flex-col gap-5"
      >
        <EditorPick />
        <CategoryProducts />
        <PromotionBar
          id={"landing-page-promotion"}
          header={"In store or online your health & safety is our top priority"}
          description={
            "The only supermarket that makes your life easier, makes you enjoy life and makes it better"
          }
          headerFontSize={22}
          headerColor={"#EA580C"}
          headerFontWeight={"Bold"}
          descriptionFontSize={14}
          descriptionColor={"#6B7280"}
          bgColor={"#FFF7ED"}
          borderColor={"#FFF7ED"}
          imgUrl={"/images/promo.png"}
          imgWidth={353}
          imgHeight={572}
        />
        <BestSeller />
        <News />
      </div>
      <Footer />
    </>
  );
}
