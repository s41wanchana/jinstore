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
    <div id={id} className="flex gap-6 border-[#E5E7EB] border-[1px]">
      <div id="image-container" className="relative">
        {discount && (
          <div
            id="discount"
            className="bg-[#DC2626] text-[10px] text-[#FEF2F2] font-extrabold rounded-l-[14px] rounded-r-[40px] w-[38.3px] h-[24px] flex items-center justify-center absolute"
          >
            {`${discount}%`}
          </div>
        )}
        <FavoriteBorderOutlinedIcon className="absolute right-0 hover:cursor-pointer" />
        <Image
          src={imageUrl}
          alt={`${id}-img`}
          width={width ? width : 172}
          height={height ? height : 172}
        />
        <div
          id="label"
          className="w-[80px] h-[24px] bg-gradient-to-r from-[#D4FC79] to-[#96E6A1] rounded-l-[14px] rounded-r-[40px] text-[#166534] text-[10px] font-extrabold flex items-center"
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
      <div id="content-container">
        <article id="product-description">
          <h4 className="text-[#030712] text-[14px] font-medium">{header}</h4>
          {description && (
            <p className="text-[12px] text-[#4B5563] text-wrap">
              {description}
            </p>
          )}
        </article>
        <Stack spacing={1}>
          <Rating
            name="avg-rating-read"
            defaultValue={4}
            precision={0.5}
            readOnly
          />
        </Stack>
        <p className="text-[22px] text-[#DC2626] font-bold">
          {`$${dealPrice}`}{" "}
          <span className="text-[16.1px] text-[#111827] font-medium line-through">
            {`$${originalPrice}`}
          </span>
        </p>
        <button
          id="add-button"
          className="w-[192px] h-[34px] rounded-full border-[#634C9F] border-[1px] text-[#634C9F] flex items-center justify-between px-[15px]"
        >
          <p className="text-[13px]">Add to cart</p>
          <p className="text-[20px] font-extralight mb-2">+</p>
        </button>
      </div>
    </div>
  );
}
