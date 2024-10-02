import Image from "next/image";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

export default function WeeklyOffer({
  id,
  notificationText,
  notificationTextColor,
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
      <div
        id="panel-message-container"
        className="p-[30px] flex flex-col absolute z-10"
      >
        <div
          id="panel-notification"
          className="w-[100px] h-[28px] flex justify-center items-center rounded-[30px] font-semibold"
          style={{
            backgroundColor: notificationColor ? notificationColor : "#FFEDD5",
          }}
        >
          <p
            style={{
              color: notificationTextColor ? notificationTextColor : "#7C2D12",
            }}
          >
            {notificationText}
          </p>
        </div>

        <article>
          <p
            className="font-bold pt-2 tracking-[-1.12px]"
            style={{
              fontSize: headerFontSize ? headerFontSize : "28px",
              color: headerFontColor,
              wordBreak: "break-word",
              maxWidth: "55%",
            }}
          >
            {header}
          </p>
          <p
            className="pt-2"
            style={{
              fontSize: descriptionFontSize ? descriptionFontSize : "13px",
              color: descriptionFontColor ? descriptionFontColor : "#6B7280",
            }}
          >
            {description}
          </p>
        </article>

        <div id="button-n-price-container" className="pt-[18.5px] flex">
          <button
            className="text-[14px] font-bold w-[134px] h-[42px] px-4 border-[1px] border-[#E5E7EB] rounded-full flex items-center gap-5"
            style={{
              backgroundColor: buttonColor ? buttonColor : "white",
              color: buttonTextColor,
            }}
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

      <div
        id="bg-container"
        style={{
          width: width ? width : "100%",
          height: height ? height : "100%",
        }}
      >
        <Image
          src={imageUrl}
          alt="tap-panel-item-image"
          fill={true}
          style={{ objectFit: "fill" }}
        />
      </div>
    </div>
  );
}
