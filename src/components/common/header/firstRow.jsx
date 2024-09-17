export default function FirstRow() {
  return (
    <div
      id="first-row-header"
      className="w-full h-10 border-b-[#E5E7EB] border-b-[1px] flex"
    >
      <div
        id="left-side-nav"
        className="basis-1/5 text-[#6B7280] flex justify-center items-center gap-3.5"
      >
        <a id="about-us">About Us</a>
        <a id="my-account">My account</a>
        <a id="wish-list">Wishlist</a>
      </div>
      <div
        id="working-hour"
        className="basis-3/5 flex justify-start items-center"
      >
        <p className="text-[#6B7280] border-l-[1px] pl-4">
          We deliver to you every day from{" "}
          <span className="text-[#EA580C] text-[12px] font-bold">
            7:00 to 23:00
          </span>
        </p>
      </div>
      <div
        id="right-side-nav"
        className="basis-1/5 text-[#6B7280] flex justify-center items-center gap-3.5"
      >
        <a id="language-option">English</a>
        <a id="currency-option">USD</a>
        <a id="order-tracking">Order Tracking</a>
      </div>
    </div>
  );
}
