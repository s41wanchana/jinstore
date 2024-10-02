import Image from "next/image";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function VerticalProductPresentation({
  id,
  discount,
  imageUrl,
  width,
  height,
  header,
  headerFontSize,
  description,
  dealPrice,
  originalPrice,
}) {
  return (
    <div
      id={id}
      className="w-full h-full border-[#E5E7EB] border-[1px] flex flex-col pt-6 pb-9 px-4"
    >
      <div
        id="image-container"
        className="relative mb-[12px] flex flex-col gap-1"
      >
        {discount && (
          <div
            id="discount"
            className="bg-[#DC2626] text-[10px] text-[#FEF2F2] font-extrabold rounded-l-[14px] rounded-r-[40px] w-[38.3px] h-[24px] flex items-center justify-center absolute top-0 left-0"
          >
            {`${discount}%`}
          </div>
        )}
        <FavoriteBorderOutlinedIcon className="absolute right-0 hover:cursor-pointer" />
        <div className="flex justify-center">
          <Image
            src={imageUrl}
            alt={`${id}-img`}
            width={width ? width : 199}
            height={height ? height : 199}
          />
        </div>
        <div
          id="label"
          className="w-auto h-[24px] bg-gradient-to-r from-[#D4FC79] to-[#96E6A1] rounded-l-[40px] rounded-r-[40px] text-[#166534] text-[10px] font-extrabold p-[6px] flex justify-center items-center gap-1 absolute bottom-[-12px] left-0"
        >
          <div className="">
            <Image
              src="/images/organic-icon.png"
              alt="organic-icon"
              width={14}
              height={14}
            />
          </div>
          <p>ORGANIC</p>
        </div>
        <button
          id="add-button"
          className="rounded-full w-8 h-8 bg-[#634C9F] text-white text-[18px] pl-0.25 absolute right-0 bottom-[-12px]"
        >
          +
        </button>
      </div>

      <div className="pt-2 flex items-center">
        <Rating name="size-large" defaultValue={2} size="small" />
      </div>

      <article id="product-description" className="flex flex-col gap-4">
        <h4
          className="pt-[7.5px] text-[#030712] text-[14px] font-medium text-start break-words tracking-[-0.28px] leading-[18.2px]"
          style={{ fontSize: headerFontSize ? headerFontSize : "14px" }}
        >
          {header}
        </h4>
        <p className="text-[12px] text-[#4B5563]">{description}</p>
      </article>
      <p className="pt-[14px] text-[22px] text-[#DC2626] font-sta font-bold">
        {`$${dealPrice}`}{" "}
        <span className="text-[16.1px] text-[#111827] font-medium line-through">
          {`$${originalPrice}`}
        </span>
      </p>
    </div>
  );
}
