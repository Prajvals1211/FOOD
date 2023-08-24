import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import LoginContext from "../utils/loginContext";
import { BsFillCartFill, BsFillInfoSquareFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import Location from "../utils/location";
import Food from "../Images/Food.png";
import { FaBowlFood } from "react-icons/fa6";

const heading = (
  <a href="/" className="">
    <div className="bg-pink-50 flex">
      <img
        data-testid="logo"
        className="h-[100px] mt-2"
        src={Food}
        alt="logo"
      />
      <div className="text-pink-500">
        <FaBowlFood
          style={{
            fontSize: "2rem",

            marginTop: "34px",
          }}
        />
      </div>
    </div>
  </a>
);

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const { login } = useContext(LoginContext);
  const location = useContext(Location);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg ">
      {heading}

      <div className="">
        <ul className="flex py-10">
          {login != undefined && login.name != "Login name" ? (
            <li className=" px-8 hover:text-red-500 text-xl font-semibold">
              Hi,{login.name.toUpperCase()}👋
            </li>
          ) : location.pathname === "/login" ? (
            <li className=" px-8 text-red-500 text-xl">
              <Link to="/login">
                <HiOutlineUserCircle
                  style={{
                    fontSize: "1.8rem",
                    marginRight: "8px",
                    marginTop: "2px",
                  }}
                />
              </Link>
            </li>
          ) : (
            <li className=" px-8 hover:text-red-500 text-xl">
              <Link to="/login">
                <HiOutlineUserCircle
                  style={{
                    fontSize: "1.8rem",
                    marginRight: "8px",
                    marginTop: "2px",
                  }}
                />
              </Link>
            </li>
          )}
          {location.pathname === "/" ? (
            <li className=" px-8 text-red-500 text-xl ">
              <Link to="/">
                <AiFillHome
                  style={{ fontSize: "1.8rem", marginRight: "8px" }}
                />
              </Link>
            </li>
          ) : (
            <li className=" px-8 hover:text-red-500 text-xl">
              <Link to="/">
                <AiFillHome
                  style={{ fontSize: "1.8rem", marginRight: "8px" }}
                />
              </Link>
            </li>
          )}

          {location.pathname === "/cart" ? (
            <Link to="/cart">
              <li className="px-8 text-medium font-semibold flex items-center  text-red-500 ">
                <BsFillCartFill
                  style={{ fontSize: "1.8rem", marginRight: "8px" }}
                />
                {cartItems.length >= 10 ? (
                  <div className="mx-2.5  mb-1 text-xs text-white absolute font-semibold">
                    {cartItems.length === 0 ? "" : cartItems.length}
                  </div>
                ) : (
                  <div className="mx-3  mb-1 text-xs text-white absolute font-semibold">
                    {cartItems.length === 0 ? "" : cartItems.length}
                  </div>
                )}
              </li>
            </Link>
          ) : (
            <Link to="/cart">
              <li className="px-8 text-medium font-semibold flex items-center text-gray-600 hover:text-red-500 ">
                <BsFillCartFill
                  style={{ fontSize: "1.8rem", marginRight: "8px" }}
                />
                {cartItems.length >= 10 ? (
                  <div className="mx-2.5  mb-1 text-xs text-white absolute font-semibold">
                    {cartItems.length === 0 ? "" : cartItems.length}
                  </div>
                ) : (
                  <div className="mx-3  mb-1 text-xs text-white absolute font-semibold">
                    {cartItems.length === 0 ? "" : cartItems.length}
                  </div>
                )}
              </li>
            </Link>
          )}
          {location.pathname === "/about" ? (
            <li className=" px-8 text-red-500 text-xl">
              <Link to="/about">
                <BsFillInfoSquareFill
                  style={{
                    fontSize: "1.7rem",
                    marginRight: "8px",
                    marginTop: "2px",
                  }}
                />
              </Link>
            </li>
          ) : (
            <li className=" px-8 hover:text-red-500 text-xl">
              <Link to="/about">
                <BsFillInfoSquareFill
                  style={{
                    fontSize: "1.7rem",
                    marginRight: "8px",
                    marginTop: "2px",
                  }}
                />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
