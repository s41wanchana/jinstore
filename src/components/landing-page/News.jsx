import StraightOutlinedIcon from "@mui/icons-material/StraightOutlined";
import NewsBox from "../common/NewsBox";

export default function News() {
  return (
    <div id="our-news-container">
      <div
        id="news-header-container"
        className="flex justify-between items-center"
      >
        <div id="header-text" className="flex gap-4">
          <p>OUR NEWS</p>
          <p>Some of the new posts this week</p>
        </div>
        <div
          id="view-all-button-container"
          className="basis-1/2 flex justify-end"
        >
          <button className="flex items-center">
            View All{" "}
            <StraightOutlinedIcon sx={{ transform: "rotate(90deg)" }} />
          </button>
        </div>
      </div>

      <div id="news-content-container" className="flex justify-between">
        <NewsBox
          id={"grocer-approach"}
          header={"How grocers are approaching delivery as the market evolves"}
          description={
            "Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass"
          }
          authorName={"sinan"}
          date={"3 Nov 2023"}
          imgUrl={"/images/news-img/grocer-approach.png"}
        />
        <NewsBox
          id={"friday-checkout"}
          header={
            "The Friday Checkout: Food insecurity keeps retailers off balance"
          }
          description={
            "Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass"
          }
          authorName={"sinan"}
          date={"3 Nov 2023"}
          imgUrl={"/images/news-img/friday-checkout.png"}
        />
        <NewsBox
          id={"ai-help"}
          header={
            "Consumer want grocer to use AI to help them save money Dunnhumby"
          }
          description={
            "Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass"
          }
          authorName={"sinan"}
          date={"3 Nov 2023"}
          imgUrl={"/images/news-img/ai-help.png"}
        />
        <NewsBox
          id={"replicateting-restaurant"}
          header={
            "Order up! How grocers are replicating the restaurant experience in retail"
          }
          description={
            "Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass"
          }
          authorName={"sinan"}
          date={"3 Nov 2023"}
          imgUrl={"/images/news-img/replicateting-restaurant.png"}
        />
      </div>
    </div>
  );
}
