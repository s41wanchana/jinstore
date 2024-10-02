import StraightOutlinedIcon from "@mui/icons-material/StraightOutlined";
import VerticalProductPresentation from "../common/VerticalProductPresentation";
import HorizontalProductPresentation from "../common/HorizontalProductPresentation";

export default function EditorPick() {
  return (
    <div
      id="editor-pick-container"
      className="w-full h-auto flex flex-col px-48 pt-[60px] gap-5"
    >
      <div id="header-container" className="w-full flex">
        <header className="basis-1/2 flex items-baseline gap-4">
          <h1 className="text-[18px] font-bold text-[#030712]">
            Editor's Pick
          </h1>
          <p className="text-[13px] text-[#9CA3AF]">
            New products with updated stocks.
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

      <div id="editor-pick-content-container" className="bg-white flex">
        <div id="editor-pick-left-side-content" className="basis-1/2 flex">
          <div id="l-vertical-container" className="w-[350px]">
            <VerticalProductPresentation
              id={"100-percent-apple-juice"}
              imageUrl={"/images/product-img/100percent-apple-juice.png"}
              header={"100 Percent Apple Juice - 64 fl oz Bottle"}
              description={
                "Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt."
              }
              dealPrice={"0.50"}
              originalPrice={"1.99"}
              discount={75}
              width={199}
              height={199}
            />
          </div>
          <div
            id="l-horizontal-container"
            className="w-auto flex flex-col justify-between"
          >
            <HorizontalProductPresentation
              id={"frozen-pizza"}
              imageUrl={"/images/product-img/frozen-pizza.png"}
              header={"Great Value Rising Crust Frozen Pizza, Supreme"}
              dealPrice={"8.99"}
              originalPrice={"9.99"}
              discount={11}
              width={300}
              height={300}
            />
            <HorizontalProductPresentation
              id={"simply-orange-pulp"}
              imageUrl={"/images/product-img/simply-orange-pulp.png"}
              header={"Simply Orange Pulp Free Juice – 52 fl oz"}
              dealPrice={"2.45"}
              originalPrice={"4.13"}
              discount={41}
            />
          </div>
        </div>

        <div id="editor-pick-right-side-content" className="basis-1/2 flex">
          <div id="r-vertical-container" className="w-[250px]">
            <VerticalProductPresentation
              id={"california-pizza"}
              imageUrl={"/images/product-img/california-pizza.png"}
              header={"California Pizza Kitchen Margherita, Crispy Thin Crust…"}
              description={
                "Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt."
              }
              dealPrice={"11.77"}
              originalPrice={"14.77"}
              discount={21}
              width={199}
              height={199}
            />
          </div>
          <div
            id="r-horizontal-container"
            className="w-auto h-auto flex flex-col"
          >
            <HorizontalProductPresentation
              id={"cantaloupe"}
              imageUrl={"/images/product-img/cantaloupe.png"}
              header={"Cantaloupe Melon Fresh Organic Cut"}
              dealPrice={"1.25"}
              originalPrice={"2.98"}
              discount={59}
            />
            <HorizontalProductPresentation
              id={"angel-soft-toilet-paper"}
              imageUrl={"/images/product-img/angel-soft-toilet-paper.png"}
              header={"Angel Soft Toilet Paper, 9 Mega Rolls"}
              dealPrice={"14.12"}
              originalPrice={"17.12"}
              discount={18}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
