import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import Image from "next/image";

export default function Footer() {
  return (
    <div id="footer-container" className="bg-[#F3F4F6] flex flex-col gap-14">
      <div id="join-our-newsletter-container" className=" flex justify-between">
        <div id="message-container" className="w-[300px]">
          <h1 className="text-[20px] font-bold">
            Join our newsletter for £10 offs
          </h1>
          <p className="text-wrap text-[13px] text-[#6B7280]">
            Register now to get latest updates on promotions & coupons.Don’t
            worry, we not spam!
          </p>
        </div>
        <div
          id="email-collecting-container"
          className="flex flex-col justify-center"
        >
          <div
            id="email-input-container"
            className="rounded-lg bg-white w-[418px] h-[48px] flex justify-between items-center"
          >
            <div id="input-container" className="flex gap-1.5">
              <MailOutlineOutlinedIcon
                sx={{ color: "#9CA3AF", width: 20, height: 20 }}
              />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-[300px] focus:outline-none"
              />
            </div>
            <button className="bg-[#634C9F] text-white rounded-r-lg w-[73.11px] h-[50px] text-[14px] font-bold">
              SEND
            </button>
          </div>
          <p>
            By subscribing you agree to our{" "}
            <a href="#" className="font-medium text-[#634C9F]">
              Terms & Conditions and Privacy & Cookies Policy.
            </a>
          </p>
        </div>
      </div>

      <hr />

      <div id="contact-n-nav-container" className="flex justify-between">
        <div id="contact-container" className="flex flex-col justify-between">
          <h1 className="text-[14px] font-semibold text-[#111827]">
            Do You Need Help?
          </h1>
          <p className="text-[#6B7280] text-[13px]">
            Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat.
            Pressa fåmoska.
          </p>
          <div id="phone-container" className="flex">
            <div id="phone-icon-container">
              <Image
                src={"/images/icons/phone.png"}
                alt="phone-icon"
                width={28}
                height={28}
              />
            </div>
            <div id="phone-detail-container">
              <p className="text-[#111827] text-[13px]">
                Monday-Friday: 08am-9pm
              </p>
              <h1>0 800 300-353</h1>
            </div>
          </div>
          <div id="mail-container" className="flex">
            <div id="mail-icon-container">
              <Image
                src={"/images/icons/mail.png"}
                alt="mail-icon"
                width={28}
                height={28}
              />
            </div>
            <div id="mail-detail-container">
              <p className="text-[#111827] text-[13px]">
                Need help with your order?
              </p>
              <h1>info@example.com</h1>
            </div>
          </div>
        </div>
        <nav id="make-money-with-us-container" className="flex flex-col">
          <h1 className="text-[14px] font-semibold text-[#111827]">
            Make Money with Us
          </h1>
          <a href="#" className="text-[#4B5563] text-[13px]">
            Sell on Grogin
          </a>
          <a href="#" className="text-[#4B5563] text-[13px]">
            Sell Your Services on Grogin
          </a>
          <a href="#" className="text-[#4B5563] text-[13px]">
            Sell on Grogin Business
          </a>
          <a href="#" className="text-[#4B5563] text-[13px]">
            Sell Your Apps on Grogin
          </a>
          <a href="#" className="text-[#4B5563] text-[13px]">
            Become an Affilate
          </a>
          <a href="#" className="text-[#4B5563] text-[13px]">
            Advertise Your Products
          </a>
          <a href="#" className="text-[#4B5563] text-[13px]">
            Sell-Publish with Us
          </a>
          <a href="#" className="text-[#4B5563] text-[13px]">
            Become an Blowwe Vendor
          </a>
        </nav>
        <nav id="let-us-help-container" className="flex flex-col">
          <h1 className="text-[14px] font-semibold text-[#111827]">
            Let Us Help You
          </h1>
          <a href="#" className="text-[#4B5563] text-[13px]">
            Accessibility Statement
          </a>
          <a href="#" className="text-[#4B5563] text-[13px]">
            Your Orders
          </a>
          <a href="#" className="text-[#4B5563] text-[13px]">
            Returns & Replacements
          </a>
          <a href="#" className="text-[#4B5563] text-[13px]">
            Shipping Rates & Policies
          </a>
          <a href="#" className="text-[#4B5563] text-[13px]">
            Refund and Returns Policy
          </a>
          <a href="#" className="text-[#4B5563] text-[13px]">
            Privacy Policy
          </a>
          <a href="#" className="text-[#4B5563] text-[13px]">
            Terms and Conditions
          </a>
          <a href="#" className="text-[#4B5563] text-[13px]">
            Cookie Settings
          </a>
          <a href="#" className="text-[#4B5563] text-[13px]">
            Help Center
          </a>
        </nav>
        <nav id="get-to-know-us" className="flex flex-col">
          <h1 className="text-[14px] font-semibold text-[#111827]">
            Get to Know Us
          </h1>
          <a href="#" className="text-[#4B5563] text-[13px]">
            Careers for Grogin
          </a>
          <a href="#" className="text-[#4B5563] text-[13px]">
            About Grogin
          </a>
          <a href="#" className="text-[#4B5563] text-[13px]">
            Inverstor Relations
          </a>
          <a href="#" className="text-[#4B5563] text-[13px]">
            Grogin Devices
          </a>
          <a href="#" className="text-[#4B5563] text-[13px]">
            Customer reviews
          </a>
          <a href="#" className="text-[#4B5563] text-[13px]">
            Social Responsibility
          </a>
          <a href="#" className="text-[#4B5563] text-[13px]">
            Store Locations
          </a>
        </nav>
        <div id="app-n-social-media-container" className="flex flex-col">
          <h1 className="text-[14px] font-semibold text-[#111827]">
            Download our app
          </h1>
          <div id="google-play-container" className="flex">
            <div id="google-play-icon-container">
              <Image
                src={"/images/partner-logo/google-play.png"}
                alt="google-play-icon"
                width={120}
                height={38.92}
              />
            </div>
            <div id="google-play-message-container">
              <p>Download App Get</p>
              <p>-10% Discount</p>
            </div>
          </div>
          <div id="app-store-container" className="flex">
            <div id="app-store-icon-container">
              <Image
                src={"/images/partner-logo/app-store.png"}
                alt="app-store-icon"
                width={120}
                height={38.92}
              />
            </div>
            <div id="app-store-message-container">
              <p>Download App Get</p>
              <p>-20% Discount</p>
            </div>
          </div>
          <div id="social-media-nav-container">
            <p>Follow us on social media:</p>
            <div id="social-media-icons-container">
              <button id="facebook-btn">
                <Image
                  src={"/images/partner-logo/facebook.png"}
                  alt="facebook-icon"
                  width={8}
                  height={15}
                />
              </button>
              <button id="twitter-btn">
                <Image
                  src={"/images/partner-logo/twitter.png"}
                  alt="twitter-icon"
                  width={15}
                  height={15}
                />
              </button>
              <button id="instagram-btn">
                <Image
                  src={"/images/partner-logo/instagram.png"}
                  alt="instagram-icon"
                  width={15}
                  height={15}
                />
              </button>
              <button id="linkedin-btn">
                <Image
                  src={"/images/partner-logo/linkedin.png"}
                  alt="linkedin-icon"
                  width={15}
                  height={15}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div id="copy-right-n-legal-container" className="flex flex-col">
        <div
          id="copy-right-n-policy-container"
          className="flex justify-between"
        >
          <p className="text-[12px] text-[#6B7280] font-medium">
            Copyright 2024 © Jinstore WooCommerce WordPress Theme. All right
            reserved. Powered by{" "}
            <span className="font-semibold text-[#634C9F]">
              BlackRise Themes
            </span>
            .
          </p>
          <nav className="flex gap-2">
            <a href="#" className="underline text-[12px]">
              Terms and Conditions
            </a>
            <a href="#" className="underline text-[12px]">
              Privacy Policy
            </a>
            <a href="#" className="underline text-[12px]">
              Order Tracking
            </a>
          </nav>
        </div>
        <div id="payment-partners-icon-container" className="flex gap-2.5">
          <Image
            src={"/images/partner-logo/visa.png"}
            alt="visa-icon"
            width={36}
            height={13}
          />
          <Image
            src={"/images/partner-logo/master-card.png"}
            alt="master-card-icon"
            width={24}
            height={14.8}
          />
          <Image
            src={"/images/partner-logo/paypal.png"}
            alt="paypal-icon"
            width={52.5}
            height={14}
          />
          <Image
            src={"/images/partner-logo/skrill.png"}
            alt="skrill-icon"
            width={40}
            height={14}
          />
          <Image
            src={"/images/partner-logo/klarna.png"}
            alt="klarna-icon"
            width={62.7}
            height={14}
          />
        </div>
      </div>
    </div>
  );
}
