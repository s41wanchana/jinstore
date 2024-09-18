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
  description,
  dealPrice,
  originalPrice,
}) {
  return (
    <div id={id} className="border-[#E5E7EB] border-[1px]">
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
          width={width ? width : 199}
          height={height ? height : 199}
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
        <button
          id="add-button"
          className="rounded-full w-8 h-8 bg-[#634C9F] text-white text-[18px] pl-0.25 absolute right-0 bottom-0"
        >
          +
        </button>
      </div>
      <Stack spacing={1}>
        <Rating
          name="avg-rating-read"
          defaultValue={4}
          precision={0.5}
          readOnly
        />
      </Stack>
      <article id="product-description">
        <h4 className="text-[#030712] text-[14px] font-medium text-wrap">
          {header}
        </h4>
        <p className="text-[12px] text-[#4B5563] text-wrap">{description}</p>
      </article>
      <p className="text-[22px] text-[#DC2626] font-bold">
        {`$${dealPrice}`}{" "}
        <span className="text-[16.1px] text-[#111827] font-medium line-through">
          {`$${originalPrice}`}
        </span>
      </p>
    </div>
  );
}
