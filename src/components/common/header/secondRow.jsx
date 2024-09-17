import Image from "next/image";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

export default function SecondRow() {
  return (
    <div
      id="second-row-header"
      className="w-full h-[78px] border-b-[#E5E7EB] border-b-[1px] flex items-center"
    >
      <div id="logo-container">
        <Image src="/images/logo.png" alt="logo-img" width={100} height={100} />
      </div>

      <div id="location-container" className="flex">
        <PlaceOutlinedIcon />
        <p className="flex flex-col">
          Delivery to <span>all</span>
        </p>
      </div>

      <div
        id="search-bar-container"
        className="basis-1/3 h-[46px] bg-[#F3F4F6] flex items-center"
      >
        <input
          className="bg-[#F3F4F6]"
          type="text"
          placeholder="Search for products, categories or brands..."
        />
        <SearchOutlinedIcon />
      </div>

      <div id="sign-in-container" className="flex items-center gap-2">
        <div id="account-img-container">
          <Image
            src="/images/account.png"
            alt="account-img"
            width={20}
            height={20}
          />
        </div>
        <div>
          <p className="flex flex-col">
            Sign in <span>Account</span>
          </p>
        </div>
      </div>

      <div id="wishlist-container">
        <FavoriteBorderOutlinedIcon />
      </div>

      <div id="cart-container">
        <LocalGroceryStoreOutlinedIcon />
      </div>
    </div>
  );
}
