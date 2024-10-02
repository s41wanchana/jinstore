import Image from "next/image";

export default function PromotionBar({
  id,
  header,
  description,
  headerColor,
  headerFontSize,
  headerFontWeight,
  descriptionColor,
  descriptionFontSize,
  descriptionFontWeight,
  imgUrl,
  bgColor,
  borderColor,
}) {
  return (
    <div
      id={id}
      className="w-full h-auto rounded-md px-[30px] flex "
      style={{ backgroundColor: bgColor, borderColor: borderColor }}
    >
      <div className="py-[15px] basis-3/5">
        <p
          style={{
            color: headerColor,
            fontSize: headerFontSize,
            fontWeight: headerFontWeight,
          }}
        >
          {header}
        </p>
        <p
          style={{
            color: descriptionColor,
            fontSize: descriptionFontSize,
            fontWeight: descriptionFontWeight,
          }}
        >
          {description}
        </p>
      </div>
      {imgUrl && (
        <div id="image-container" className="basis-2/5 h-[85px] relative">
          <Image
            src={imgUrl}
            alt={`${id}-img`}
            fill
            style={{ objectFit: "fill" }}
          />
        </div>
      )}
    </div>
  );
}
