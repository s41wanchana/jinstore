export default function Notification() {
  return (
    <div
      id="notification"
      className="w-full h-7 bg-[#634C9F] flex items-center"
    >
      <p
        id="notification-message"
        className="basis-1/2 text-center text-white text-[12px]"
      >
        FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.{" "}
      </p>
      <p
        id="notification-countdown"
        className="basis-1/2 text-white text-[12px]"
      >
        Until the end of the sale:
      </p>
    </div>
  );
}
