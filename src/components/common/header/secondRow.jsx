import Image from "next/image";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { light } from "@mui/material/styles/createPalette";

export default function SecondRow() {
  return (
    <div
      id="second-row-header"
      className="w-full h-[78px] border-b-[#E5E7EB] border-b-[1px] px-48 flex justify-between items-center gap-6"
    >
      <div id="logo-container">
        <Image src="/images/logo.png" alt="logo-img" width={154} height={39} />
      </div>

      <div
        id="location-search-container"
        className="flex flex-grow items-center justify-evenly gap-[15px]"
      >
        <div id="location-container" className="flex gap-3.5">
          <div className="w-[26px] h-[26px] pt-1 flex">
            <Image
              src="/images/icons/location.png"
              alt="location-icon"
              width={19}
              height={23}
            />
          </div>
          <p className="text-[11px] text-[#6B7280] flex flex-col">
            Delivery to <span className="font-medium text-[#030712]">all</span>
          </p>
        </div>

        <div
          id="search-bar-container"
          className=" h-[46px] bg-[#F3F4F6] rounded-lg p-[18px] flex flex-grow justify-start items-center"
        >
          <input
            className="bg-[#F3F4F6] w-full focus:outline-none text-[14px] mx-4.5"
            type="text"
            placeholder="Search for products, categories or brands..."
          />
          <button className="w-[26px] h-[26px]">
            <Image
              src="/images/icons/search.png"
              alt="search-icon"
              width={21}
              height={21}
            />
          </button>
        </div>
      </div>

      <div
        id="account-wishlist-tracking-container"
        className="pl-4 flex justify-between items-center gap-[15px]"
      >
        <button
          id="sign-in-container"
          className="text-start flex items-center gap-2"
        >
          <div id="account-img-container" className="w-[26px] h-[26px]">
            <Image
              src="/images/account.png"
              alt="account-img"
              width={20}
              height={24}
            />
          </div>
          <div>
            <p className="text-[11px] text-[#6B7280] leading-[11px] flex flex-col">
              Sign in{" "}
              <span className="font-medium text-[13px] text-[#030712] leading-[13px]">
                Account
              </span>
            </p>
          </div>
        </button>

        <button id="wishlist-container" className="w-[26px] h-[26px]">
          <FavoriteBorderOutlinedIcon sx={{ width: 26, height: 26 }} />
        </button>

        <button id="cart-container" className="w-[26px] h-[26px]">
          <LocalGroceryStoreOutlinedIcon sx={{ width: 26, height: 26 }} />
        </button>
      </div>
    </div>
  );
}
