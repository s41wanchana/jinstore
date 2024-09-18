import Image from "next/image";

export default function Tag({ id, imageUrl, text }) {
  return (
    <div id={id} className="flex flex-col relative">
      <div className="bg-[#F3F4F6] rounded-full w-[116px] h-[116px] absolute -z-10"></div>
      <Image src={imageUrl} alt={`${id}-img`} width={122} height={122} />
      <p className="text-[13px] font-bold">{text}</p>
    </div>
  );
}
