import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RestoInfo } from "./Restuarant";
import Shimmer from "./Shimmer";
import { FaRupeeSign } from "react-icons/fa";
import { LuPanelBottomClose, LuPanelBottomOpen } from "react-icons/lu";
import { IMG_URL } from "../Constant";
import useRestuarant from "../utils/useRestuarant";
import { addItem, removeItem, increment, decrement } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const RestaurantMenu = () => {
  const resId = useParams();
  const [restInformation, recommended] = useRestuarant(resId);
  const [addbtn, setAddBtn] = useState(null);
  const [toshow, setToShow] = useState(true);
  const [addbtn1, setAddBtn1] = useState(0);
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleAddItem = (e) => {
    setAddBtn(e.id);
    setAddBtn1(addbtn1 + 1);
    dispatch(addItem(e));

    dispatch(increment());
  };

  const handleRemoveItem = (e) => {
    dispatch(removeItem(e));
    dispatch(decrement());
    setAddBtn1(addbtn1 - 1);
  };

  return !restInformation ? (
    <Shimmer />
  ) : (
    <>
      <div className="bg-pink-50 m-3">
        <div className="flex justify-center">
          {restInformation?.map((e) => {
            return <RestoInfo {...e} key={e.id} />;
          })}
        </div>
      </div>
      {!recommended ? (
        <Shimmer />
      ) : (
        Object.values(recommended)?.map((list) => {
          const length = list?.card?.itemCards?.length;
          return (
            <div
              className="w-[100%] my-6 border-b-4 bg-pink-50"
              key={list?.card?.info?.id}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold mx-3">
                  {list?.card?.title} {length && <span>({length})</span>}
                </h2>
                {toshow ? (
                  <i
                    className="text-2xl mr-10 hover:cursor-pointer"
                    onClick={() => {
                      setToShow(false);
                    }}
                  >
                    <LuPanelBottomOpen />
                  </i>
                ) : (
                  <i
                    className="text-2xl mx-10 hover:cursor-pointer"
                    onClick={() => {
                      setToShow(true);
                    }}
                  >
                    <LuPanelBottomClose />
                  </i>
                )}
              </div>
              {toshow &&
                list.card.itemCards.map((item) => {
                  return (
                    <>
                      <div
                        className="flex items-center justify-between my-2 border-b-2 py-4"
                        key={item?.card.info.id}
                      >
                        <div className="m-4 px-3" key={item?.card.info.id}>
                          <p className="text-medium font-bold">
                            {item?.card.info.name}
                          </p>
                          <p className="flex items-center text-medium">
                            <FaRupeeSign />
                            {item.card.info.price
                              ? (item?.card.info.price / 100).toFixed(0)
                              : (item?.card.info.defaultPrice / 100).toFixed(0)}
                          </p>
                          <p className="my-2 text-gray-800 w-[55%] ">
                            {item?.card.info.description}
                          </p>
                        </div>
                        <div className="flex flex-col items-center mx-3 px-3">
                          <img
                            className="h-24 rounded-xl"
                            src={IMG_URL + item?.card?.info?.imageId}
                          />
                          {cartItems.filter((c) => c.id === item.card.info.id)
                            .length === 0 ? (
                            <button
                              className="px-2   mt-2 bg-white text-sm text-green-600 font-bold border border-gray-500"
                              onClick={() => handleAddItem(item.card.info)}
                            >
                              Add Item
                            </button>
                          ) : (
                            <>
                              <div className="flex items-center mt-2  bg-white text-green-600 font-bold border border-gray-500">
                                <button
                                  className="mx-2 text-lg"
                                  onClick={() => handleAddItem(item.card.info)}
                                >
                                  +
                                </button>
                                <span className="text-orange-400">
                                  {" "}
                                  {
                                    cartItems.filter(
                                      (c) => c.id === item.card.info.id
                                    ).length
                                  }
                                </span>
                                <button
                                  className="mx-2 text-lg text-red-600"
                                  onClick={() =>
                                    handleRemoveItem(item.card.info)
                                  }
                                >
                                  -
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          );
        })
      )}
    </>
  );
};

export default RestaurantMenu;
