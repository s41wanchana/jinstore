export default function ThirdRow() {
  return (
    <div id="third-row-header" className="w-full h-[48px] flex items-center">
      <div id="left-side-nav" className="basis-1/2 flex items-center">
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

      <div id="right-side-nav" className="basis-1/2 flex items-center ">
        <div id="trending-products-nav-container">
          <p className="text-[15px] font-semibold">Trending Products</p>
        </div>

        <div id="almost-finished-nav-container">
          <p className="text-[15px] text-[#DC2626] font-semibold">
            Almost Finished{" "}
            <span className="bg-gradient-to-r from-[#DC2626] to-[#EA580C] text-[10px] font-bold text-white p-1">
              SALE
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
