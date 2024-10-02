import Image from "next/image";

export default function Tag({ id, imageUrl, text }) {
  return (
    <button id={id} className="w-[122px] h-[145px] flex flex-col relative">
      <div className="bg-[#F3F4F6] rounded-full w-[116px] h-[116px] absolute -z-10"></div>
      <Image src={imageUrl} alt={`${id}-img`} width={122} height={122} />
      <p className="text-[12px] font-bold leading-[15.6px] tracking-[-0.26px] w-full pt-3">
        {text}
      </p>
    </button>
  );
}
