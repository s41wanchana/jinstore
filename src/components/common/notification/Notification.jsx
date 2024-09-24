export default function Notification() {
  return (
    <div
      id="notification"
      className="w-full h-[41px] bg-[#634C9F] flex justify-evenly items-center"
    >
      <div id="notification-note">
        <p
          id="notification-message"
          className=" text-white text-[12px] font-semibold"
        >
          FREE delivery & 40% Discount for next 3 orders! Place your 1st order
          in.{" "}
        </p>
      </div>

      <div id="countdown-note">
        <p
          id="notification-countdown"
          className="text-white text-[12px] font-semibold"
        >
          Until the end of the sale:
        </p>
      </div>
    </div>
  );
}
