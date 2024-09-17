import Image from "next/image";

export default function Categories() {
  return (
    <div id="categories-nav-container">
      <div id="fruit-n-vegies-nav" className="flex flex-col relative">
        <div
          id="circle"
          className="bg-[#F3F4F6] rounded-full w-[116px] h-[116px] absolute -z-10"
        ></div>
        <Image
          src="/images/fruit-n-vegies-category.png"
          alt="fruit-category-img"
          width={122}
          height={122}
        />
        <p className="text-[13px] font-bold">Fruits & Vegetables</p>
      </div>
    </div>
  );
}
