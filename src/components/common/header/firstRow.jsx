export default function FirstRow() {
  return (
    <div
      id="first-row-header"
      className="w-full h-[41px] border-b-[#E5E7EB] border-b-[1px] px-48 flex justify-between"
    >
      <div
        id="left-side-nav"
        className="text-[#6B7280] text-[12px] font-medium flex justify-center items-center gap-3.5"
      >
        <a id="about-us">About Us</a>
        <a id="my-account">My account</a>
        <a id="wish-list">Wishlist</a>
        <p className="text-[#6B7280] border-l-[1px] pl-3.5">
          We deliver to you every day from{" "}
          <span className="text-[#EA580C] text-[12px] font-bold">
            7:00 to 23:00
          </span>
        </p>
      </div>

      <div
        id="right-side-nav"
        className="text-[#6B7280] flex justify-center items-center gap-3.5"
      >
        <a id="language-option">English</a>
        <a id="currency-option">USD</a>
        <a id="order-tracking">Order Tracking</a>
      </div>
    </div>
  );
}
