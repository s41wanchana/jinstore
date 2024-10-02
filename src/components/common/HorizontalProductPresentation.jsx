import Image from "next/image";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function HorizontalProductPresentation({
  id,
  discount,
  imageUrl,
  width,
  height,
  header,
  description,
  dealPrice,
  originalPrice,
}) {
  return (
    <div
      id={id}
      className="w-full h-full flex gap-6 border-[#E5E7EB] border-[1px] pt-6 p-4"
    >
      <div id="image-container" className="relative basis-1/2">
        {discount && (
          <div
            id="discount"
            className="bg-[#DC2626] text-[10px] text-[#FEF2F2] font-extrabold rounded-l-[14px] rounded-r-[40px] w-[38.3px] h-[24px] flex items-center justify-center absolute"
          >
            {`${discount}%`}
          </div>
        )}
        <FavoriteBorderOutlinedIcon className="absolute right-0 hover:cursor-pointer" />
        <div className="flex justify-center">
          <Image
            src={imageUrl}
            alt={`${id}-img`}
            width={width ? width : 200}
            height={height ? height : 200}
          />
        </div>
        <div
          id="label"
          className="w-[80px] h-[24px] bg-gradient-to-r from-[#D4FC79] to-[#96E6A1] rounded-l-[40px] rounded-r-[40px] text-[#166534] text-[10px] font-extrabold p-[6px] flex justify-center items-center gap-1 absolute bottom-0 left-0"
        >
          <div>
            <Image
              src="/images/organic-icon.png"
              alt="organic-icon"
              width={14}
              height={14}
            />
          </div>
          <p>ORGANIC</p>
        </div>
      </div>
      <div id="content-container" className="basis-1/2">
        <article id="product-description">
          <h4 className="text-[#030712] text-[14px] text-wrap font-medium">
            {header}
          </h4>
          {description && (
            <p className="text-[12px] text-[#4B5563] text-wrap">
              {description}
            </p>
          )}
        </article>
        <div className="pt-2">
          <Rating
            name="avg-rating-read"
            defaultValue={4}
            precision={0.5}
            readOnly
          />
        </div>
        <p className="text-[22px] text-[#DC2626] font-bold">
          {`$${dealPrice}`}{" "}
          <span className="text-[16.1px] text-[#111827] font-medium line-through">
            {`$${originalPrice}`}
          </span>
        </p>
        <button
          id="add-button"
          className="w-[192px] h-[34px] rounded-full mt-3 border-[#634C9F] border-[1px] text-[#634C9F] flex items-center justify-between px-[15px]"
        >
          <p className="text-[13px]">Add to cart</p>
          <p className="text-[20px] font-extralight mb-2">+</p>
        </button>
      </div>
    </div>
  );
}
