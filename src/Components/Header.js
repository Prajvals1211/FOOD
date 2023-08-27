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
import useLocation1 from "../utils/useLocation";
import { CiLocationOn } from "react-icons/ci";

const Heading = () => {
  const [loc, city] = useLocation1();
  return (
    <>
      <a href="/" className="">
        <div className="bg-pink-50 flex fixed">
          <img
            data-testid="logo"
            className="h-[100px] mt-2"
            src={Food}
            alt="logo"
          />
         
        </div>
      </a>
      <div className="mt-9 mr-[350px] text-xl flex">
        <CiLocationOn
          style={{
            fontSize: "1.6rem",

            margin: "1px",
          }}
        />
        {city ? (
          <div className="mb-6 ">
            <span className="font-light m-1 ">
              <span className="border-b-2 border-black">{city.city},</span><span className="m-1 ">{city.state},</span>
              <span className="m-1">{city.country}</span>
            </span>
          </div>
        ) : null}
      </div>
    </>
  );
};

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const { login } = useContext(LoginContext);
  const location = useContext(Location);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg ">
      <Heading />

      <div className="">
        <ul className="flex py-10">
          {login != undefined && login.name != "Login name" ? (
            <li className="hover:text-red-500 text-xl font-semibold flex">
              Hi,{login.name.toUpperCase()}
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
