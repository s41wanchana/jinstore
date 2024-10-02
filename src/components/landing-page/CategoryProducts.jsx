import WeeklyOffer from "../common/WeeklyOffer";
import VerticalProductPresentation from "../common/VerticalProductPresentation";
import StraightOutlinedIcon from "@mui/icons-material/StraightOutlined";

export default function CategoryProducts() {
  return (
    <div
      id="category-product-container"
      className="px-48 pt-7 flex flex-col gap-5"
    >
      <div id="category-product-header-container" className="w-full flex">
        <header className="basis-1/2 flex items-baseline gap-2">
          <h1 className="font-bold text-[18px]">Category Products</h1>
          <p className="text-[13px] text-[#9CA3AF]">
            Do not miss the current offers until the end of March.
          </p>
        </header>
        <div
          id="view-all-button-container"
          className="basis-1/2 flex justify-end"
        >
          <button className="w-[97.5px] h-[34px] bg-white rounded-full text-[12px] font-bold flex justify-center items-center gap-[5.5px]">
            View All{" "}
            <StraightOutlinedIcon sx={{ transform: "rotate(90deg)" }} />
          </button>
        </div>
      </div>

      <div id="category-product-content-container" className="bg-white flex">
        <div
          id="l-category-product-container"
          className="rounded-md flex flex-col basis-1/2"
        >
          <WeeklyOffer
            id="lemonade"
            notificationText="Only This Week"
            header="Make your grocery shopping easy with us"
            description="Feed your family the best"
            imageUrl="/images/category-product-img/weekly-offer-lemon.png"
            height={240.5}
          />

          <div id="l-bottom-layout" className="flex">
            <VerticalProductPresentation
              id={"frozen-pizza"}
              header={"Great Value Rising Crust Frozen Pizza, Supreme"}
              headerFontSize={13}
              dealPrice={"8.99"}
              originalPrice={"9.99"}
              discount={"11"}
              imageUrl={"/images/product-img/frozen-pizza.png"}
              width={175}
              height={175}
            />
            <VerticalProductPresentation
              id={"sliced-strawberries"}
              header={"Simple Kitchen FD SlicedStrawberries – 1.08lb"}
              headerFontSize={13}
              dealPrice={"21.90"}
              originalPrice={"24.90"}
              discount={"13"}
              imageUrl={"/images/product-img/sliced-strawberries.png"}
              width={175}
              height={175}
            />
            <VerticalProductPresentation
              id={"red-baron-pizza"}
              header={
                "Red Baron Frozen Hand Tossed Ultimate Pepperoni Pizza –…"
              }
              headerFontSize={13}
              dealPrice={"14.99"}
              originalPrice={"19.99"}
              discount={"26"}
              imageUrl={"/images/product-img/red-bacon-pizza.png"}
              width={175}
              height={175}
            />
          </div>
        </div>

        <div
          id="r-category-product-container"
          className="flex flex-col basis-1/2"
        >
          <WeeklyOffer
            id="choc"
            notificationText="Only This Week"
            notificationTextColor="#7C2D12"
            notificationColor={"#FFEDD5"}
            header="Get your everyday needs here with us"
            headerFontSize={"28px"}
            description="A different kind of grocery store"
            descriptionFontColor={"#6B7280"}
            imageUrl="/images/category-product-img/weekly-offer-choc.png"
            height={240.5}
          />
          <div id="r-bottom-layout" className="flex">
            <VerticalProductPresentation
              id={"scrambler"}
              header={"Oscar Mayer Ham & Swiss Melt Scrambler – 3oz"}
              headerFontSize={13}
              dealPrice={"11.90"}
              originalPrice={"12.90"}
              discount={"8"}
              imageUrl={"/images/product-img/scrambler.png"}
              width={175}
              height={175}
            />
            <VerticalProductPresentation
              id={"tortillas"}
              header={"Large Garden Spinach & Herb Wrap Tortillas – 15oz_6ct"}
              headerFontSize={13}
              dealPrice={"27.90"}
              originalPrice={"32.90"}
              discount={"16"}
              imageUrl={"/images/product-img/tortillas.png"}
              width={175}
              height={175}
            />
            <VerticalProductPresentation
              id={"rising-pizza"}
              header={"Great Value Rising Crust Pizza, Cheese, 27.4 oz"}
              headerFontSize={13}
              dealPrice={"12.89"}
              originalPrice={"14.89"}
              discount={"14"}
              imageUrl={"/images/product-img/rising-pizza.png"}
              width={175}
              height={175}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
