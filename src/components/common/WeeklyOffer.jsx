import Image from "next/image";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

export default function WeeklyOffer({
  id,
  notificationText,
  notificationColor,
  header,
  description,
  buttonLabel = "Shop Now",
  discountPrice,
  originalPrice,
  offerText,
  imageUrl,
  headerFontSize,
  headerFontColor,
  descriptionFontSize,
  descriptionFontColor,
  buttonColor,
  buttonTextColor,
  width,
  height,
}) {
  return (
    <div
      id={`${id}-panel-container`}
      className="w-full h-auto border-[#E5E7EB] border-[1px] flex items-center relative"
    >
      <div id="panel-message-container" className="flex flex-col absolute z-10">
        <div
          id="panel-notification"
          className="w-[124px] h-[28px] flex items-center"
          style={{ backgroundColor: notificationColor }}
        >
          <p>{notificationText}</p>
        </div>

        <article>
          <p style={{ headerFontSize, color: headerFontColor }}>{header}</p>
          <p style={{ descriptionFontSize, color: descriptionFontColor }}>
            {description}
          </p>
        </article>

        <div id="button-n-price-container" className="flex">
          <button
            className="text-[14px] font-bold w-[134px] h-[42px] px-4 rounded-lg flex items-center gap-5"
            style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          >
            {buttonLabel}
            <EastOutlinedIcon />
          </button>
          <div id="price-container">
            <div id="price-line" className="flex">
              <p>{discountPrice}</p>
              <p className="line-through">{originalPrice}</p>
            </div>
            <p>{offerText}</p>
          </div>
        </div>
      </div>

      <div id="bg-container">
        <Image
          src={imageUrl}
          alt="tap-panel-item-image"
          layout="responsive"
          width={width}
          height={height}
        />
      </div>
    </div>
  );
}
