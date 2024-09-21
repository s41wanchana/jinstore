import StraightOutlinedIcon from "@mui/icons-material/StraightOutlined";
import HorizontalProductPresentation from "../common/HorizontalProductPresentation";
import VerticalProductPresentation from "../common/VerticalProductPresentation";
import WeeklyOffer from "../common/WeeklyOffer";

export default function BestSeller() {
  return (
    <div id="best-seller-container">
      <div id="best-seller-header-container" className="flex justify-between">
        <div id="header-text" className="flex gap-4">
          <p>BEST SELLERS</p>
          <p>
            Dont miss this opportunity at a special discount just for this week.
          </p>
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

      <div id="best-seller-content-container" className="flex justify-between">
        <div id="l-container">
          <HorizontalProductPresentation
            id={"100percent-apple-juice"}
            discount={75}
            imageUrl={"/images/product-img/100percent-apple-juice.png"}
            width={169.17}
            height={169.17}
            header={"100 Percent Apple Juice – 64 fl oz Bottle"}
            dealPrice={0.5}
            originalPrice={1.99}
          />
          <HorizontalProductPresentation
            id={"simply-orange-pulp"}
            discount={41}
            imageUrl={"/images/product-img/simply-orange-pulp.png"}
            width={169.17}
            height={169.17}
            header={"Simply Orange Pulp Free Juice – 52 fl oz"}
            dealPrice={2.45}
            originalPrice={4.13}
          />
          <HorizontalProductPresentation
            id={"vitamin-water"}
            discount={45}
            imageUrl={"/images/product-img/vitamin-water.png"}
            width={169.17}
            height={169.17}
            header={"Vitaminwater zero sugar squeezed electrolyte…"}
            dealPrice={4.99}
            originalPrice={8.99}
          />
        </div>
        <div id="m-container">
          <VerticalProductPresentation
            id={"sparkling-grapefruit-vodka"}
            discount={31}
            imageUrl={"/images/product-img/sparkling-grapefruit-vodka.png"}
            width={345.33}
            height={345.33}
            header={
              "Absolute Grapefruit Paloma Sparkling Vodka Cocktail – 4pk_355ml"
            }
            description={
              "Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent Vivamus adipiscing nisl ut dolor dignissim semper."
            }
            dealPrice={6.99}
            originalPrice={9.99}
          />
        </div>
        <div id="r-container">
          <HorizontalProductPresentation
            id={"double-choc-protein-powder"}
            discount={17}
            imageUrl={"/images/product-img/double-choc-protein-powder.png"}
            width={169.17}
            height={169.17}
            header={"Real Plant-Powered Protein Shake – Double Chocolate …"}
            dealPrice={14.89}
            originalPrice={17.89}
          />
          <HorizontalProductPresentation
            id={"sparkling-grapefruit-vodka"}
            discount={31}
            imageUrl={"/images/product-img/sparkling-grapefruit-vodka.png"}
            width={169.17}
            height={169.17}
            header={
              "Absolute Grapefruit Paloma Sparkling Vodka Cocktail – 4pk_355ml"
            }
            dealPrice={6.99}
            originalPrice={9.99}
          />
          <HorizontalProductPresentation
            id={"vitamin-water"}
            discount={45}
            imageUrl={"/images/product-img/vitamin-water.png"}
            width={169.17}
            height={169.17}
            header={"Vitaminwater zero sugar squeezed electrolyte…"}
            dealPrice={4.99}
            originalPrice={8.99}
          />
        </div>
      </div>
      <div
        id="promotion-container"
        className="flex justify-between items-center"
      >
        <WeeklyOffer
          id={"juice-offer"}
          notificationText={"Only This Week"}
          header={"We provide you the best quality products"}
          description={"A family place for grocery"}
          buttonLabel="Shop Now"
          imageUrl={"/images/weekly-offer-img/juice.png"}
          width={433.33}
          height={220.41}
        />
        <WeeklyOffer
          id={"popcorn-offer"}
          notificationText={"Only This Week"}
          header={"We make your grocery shopping more exciting"}
          description={"Shine the morning..."}
          buttonLabel="Shop Now"
          imageUrl={"/images/weekly-offer-img/popcorn.png"}
          width={433.33}
          height={220.41}
        />
        <WeeklyOffer
          id={"orange-n-pear-offer"}
          notificationText={"Only This Week"}
          header={"The one supermarket that saves your money"}
          description={"Breakfast made better"}
          buttonLabel="Shop Now"
          imageUrl={"/images/weekly-offer-img/orange-n-pear.png"}
          width={433.33}
          height={220.41}
        />
      </div>
    </div>
  );
}
