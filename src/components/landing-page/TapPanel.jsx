import Image from "next/image";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

export default function TapPanel() {
  return (
    <div
      id="tap-panel-container"
      className="w-full h-auto flex items-center relative"
    >
      <div
        id="panel-message-container"
        className="w-[900px] flex flex-col absolute z-10 px-48 gap-[6px]"
      >
        <div
          id="panel-notification"
          className="bg-gradient-to-r from-[#16A34A80] via-transparent via-[65%] to-[#22c55e00] w-[130px] h-[28px] rounded-md flex justify-center items-center px-[10px] py-[6px]"
        >
          <p className="text-[#166534] text-[12px] font-semibold">
            Weekend Discount
          </p>
        </div>

        <article>
          <p className="text-[58px] font-bold text-[#39245F] leading-[63px]">
            Shopping with us for better quality and the best price
          </p>
          <p className="text-[16px] text-[#030712] w-[500px] pt-1">
            We have prepared special discounts for you on grocery products.
            Don't miss these opportunities...
          </p>
        </article>

        <div id="button-n-price-container" className="flex gap-4 pt-9">
          <button className="bg-[#634C9F] text-white text-[14px] font-bold w-[134px] h-[42px] px-4 rounded-lg flex items-center gap-6">
            Shop Now
            <EastOutlinedIcon />
          </button>
          <div id="price-container">
            <div id="price-line" className="flex items-end gap-[6px]">
              <p className="text-[28px] font-bold leading-[28px] text-[#DC2626] ">
                $21.67
              </p>
              <p className="line-through text-[19.6px] font-medium leading-[19.6px]">
                $26.67
              </p>
            </div>
            <p className="text-[11px] text-[#6B7280]">
              Don't miss this limited time offer.
            </p>
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
