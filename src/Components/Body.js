import { Restocard } from "./Restuarant";
import { RestuarantList } from "../Constant";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/common";
import useOnline from "../utils/useOnline";
import { FiSearch } from "react-icons/fi";

export const Body = () => {
  const [allRestCard, setAllRestCard] = useState([]);
  const [restacard, setRestaCard] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    RestaurantCardData();
  }, []);

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>OFFLINE!! Please check your internet connection😥</h1>;
  }

  async function RestaurantCardData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.437973605399232&lng=73.86362334666698"
    );

    const json = await data.json();

    setRestaCard(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestCard(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  return !restacard || restacard.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-3 flex justify-center my-2 bg-pink-50">
        <input
          type="text"
          placeholder="search"
          className="p-2 flex space-x-1 w-[500px] rounded-lg m-1"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="m-1 bg-pink-50 rounded-md hover:bg-pink-200"
          onClick={() => {
            if (searchText === "") {
              setRestaCard(allRestCard);
            } else {
              const data = filterData(searchText.toLowerCase(), allRestCard);
              data.length === 0
                ? setRestaCard(allRestCard)
                : setRestaCard(data);
            }
          }}
        >
          <FiSearch
            style={{
              fontSize: "1.5rem",
              margin: "10px",
            }}
          />
        </button>
      </div>

      <div className="flex flex-wrap cursor-pointer justify-center bg-pink-50">
        {restacard?.map((e) => {
          return (
            <Link to={"/restaurant/" + e.info.id} key={e.info.id}>
              <Restocard {...e.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
