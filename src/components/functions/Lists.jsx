import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { UserRound, Menu, Search, TrendingUpDown, ShoppingCart } from "lucide-react";

const Lists = () => {
  return (
    <div className="-ml-24">
      <ul className="flex flex-col space-y-10">
        {/* User Icon */}
        <li className="border p-6 rounded-full">
          <Link to="/sign">
            <UserRound data-tooltip-id="user-tooltip" />
          </Link>
          <Tooltip id="user-tooltip" content="Sign In / Profile" />
        </li>

        {/* Menu Icon */}
        <li className="border p-6 rounded-full">
          <Link to="/menu">
            <Menu data-tooltip-id="menu-tooltip" />
          </Link>
          <Tooltip id="menu-tooltip" content="Menu" />
        </li>

        {/* Search Icon */}
        <li className="border p-6 rounded-full">
          <Link to="/search">
            <Search data-tooltip-id="search-tooltip" />
          </Link>
          <Tooltip id="search-tooltip" content="Search" />
        </li>

        {/* Trending Icon */}
        <li className="border p-6 rounded-full">
          <Link to="/trending">
            <TrendingUpDown data-tooltip-id="trending-tooltip" />
          </Link>
          <Tooltip id="trending-tooltip" content="Trending Now" />
        </li>

        {/* Shopping Cart Icon */}
        <li className="border p-6 rounded-full">
          <Link to="/cart">
            <ShoppingCart data-tooltip-id="cart-tooltip" />
          </Link>
          <Tooltip id="cart-tooltip" content="Shopping Cart" />
        </li>
      </ul>
    </div>
  );
};

export default Lists;
