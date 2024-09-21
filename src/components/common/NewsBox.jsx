import Image from "next/image";

export default function NewsBox({
  id,
  header,
  description,
  authorName,
  date,
  imgUrl,
  width,
  height,
}) {
  return (
    <div id={`${id}-box-container`} className="flex flex-col gap-5">
      <div id={`${id}-img-container`}>
        <Image
          src={imgUrl}
          alt={`${id}-img`}
          width={width ? width : 317.5}
          height={height ? height : 219.64}
        />
      </div>
      <article className="flex flex-col gap-2.5">
        <h1 className="text-wrap text-[18px] font-bold">{header}</h1>
        <p className="text-wrap text-[13px] text-[#4B5563]">{description}</p>
      </article>
      <div id={`${id}-author-container`} className="flex gap-5">
        <p className="italic text-[12px] text-[#6B7280]">
          by{" "}
          <span className="not-italic text-[#374151] text-[12px] font-semibold">
            {authorName}
          </span>{" "}
        </p>
        <ul>
          <li className="text-[12px] text-[#6B7280]">{date}</li>
        </ul>
      </div>
    </div>
  );
}
