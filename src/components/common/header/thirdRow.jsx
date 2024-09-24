export default function ThirdRow() {
  return (
    <div
      id="third-row-header"
      className="w-full h-[48px] px-48 flex justify-between items-center"
    >
      <div id="left-side-nav" className="flex items-center gap-[25px]">
        <div id="home-nav-container">
          <p className="text-[15px] font-semibold">Home</p>
        </div>

        <div id="shop-nav-container">
          <p className="text-[15px] font-semibold">Shop</p>
        </div>

        <div id="fruit-n-vegies-nav-container">
          <p className="text-[15px] font-semibold">Fruits & Vegetables</p>
        </div>

        <div id="beverages-nav-container">
          <p className="text-[15px] font-semibold">Beverages</p>
        </div>

        <div id="blog-nav-container">
          <p className="text-[15px] font-semibold">Blog</p>
        </div>

        <div id="contact-nav-container">
          <p className="text-[15px] font-semibold">Contact</p>
        </div>
      </div>

      <div id="right-side-nav" className="flex items-center gap-[25px]">
        <div id="trending-products-nav-container">
          <p className="text-[15px] font-semibold">Trending Products</p>
        </div>

        <div id="almost-finished-nav-container">
          <p className="text-[15px] text-[#DC2626] font-semibold">
            Almost Finished{" "}
            <span className="w-[37px] h-[21px] px-[6.5px] py-1 rounded bg-gradient-to-r from-[#DC2626] to-[#EA580C] text-[10px] font-bold leading-[10px] text-white">
              SALE
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
