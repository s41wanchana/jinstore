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
  imgWidth,
  imgHeight,
  bgColor,
  borderColor,
}) {
  return (
    <div
      id={id}
      className="relative"
      style={{ backgroundColor: bgColor, borderColor: borderColor }}
    >
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
      {imgUrl && (
        <div id="image-container" className="absolute -z-10">
          <Image src={imgUrl} width={imgWidth} height={imgHeight} />
        </div>
      )}
    </div>
  );
}
