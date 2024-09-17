import Image from "next/image";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

export default function TapPanel() {
  return (
    <div
      id="tap-panel-container"
      className="w-full h-auto flex items-center relative"
    >
      <div id="panel-message-container" className="flex flex-col absolute z-10">
        <div
          id="panel-notification"
          className="bg-gradient-to-r from-[#16A34A] to-[#22c55e00] w-[124px] h-[28px] flex items-center"
        >
          <p>Weekend Discount</p>
        </div>

        <article>
          <p>Shopping with us for better quality and the best price</p>
          <p>
            We have prepared special discounts for you on grocery products.
            Don't miss these opportunities...
          </p>
        </article>

        <div id="button-n-price-container" className="flex">
          <button className="bg-[#634C9F] text-white text-[14px] font-bold w-[134px] h-[42px] px-4 rounded-lg flex items-center gap-5">
            Shop Now
            <EastOutlinedIcon />
          </button>
          <div id="price-container">
            <div id="price-line" className="flex">
              <p>$21.67</p>
              <p className="line-through">$26.67</p>
            </div>
            <p>Don't miss this limited time offer.</p>
          </div>
        </div>
      </div>

      <div id="bg-container">
        <Image
          src="/images/tap-panel-item-1.png"
          alt="tap-panel-item-image"
          layout="responsive"
          width={1920}
          height={700.5}
        />
      </div>
    </div>
  );
}
