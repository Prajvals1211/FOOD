import { IMG_URL } from "../Constant";
import { useSelector } from "react-redux";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BiSolidOffer } from "react-icons/bi";

export const Restocard = ({ name, cuisines, cloudinaryImageId }) => {
  return (
    <div className=" w-[300px] p-2 m-2 bg-pink-100 hover:shadow-lg hover:animate-pulse ">
      <img src={IMG_URL + cloudinaryImageId}></img>
      <h2 className="font-bold text-1xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
    </div>
  );
};

export const RestoInfo = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  totalRatingsString,
  areaName,
  city,
  costForTwoMessage,
  aggregatedDiscountInfo,
  sla,
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col w-[300px]">
        <div className="border-b-2">
          <p className="font-bold m-1 text-2xl">{name}</p>
          <p className="font-thin">{cuisines.join(", ")}</p>
        </div>
        <div className="border-b-2">
          <p className="p-2 ">
            {areaName},{city}
          </p>
        </div>
        <div className="flex justify-between w-[120%] mx-2 px-2">
          <p className="">{costForTwoMessage}</p>
          <p className="text-lg">|</p>

          <p className="text-sm ">{sla.slaString}</p>
          <p className="text-lg ">|</p>

          <p className="text-sm">{sla.lastMileTravelString}</p>
        </div>
        <div className="flex py-4 ">
          {aggregatedDiscountInfo.descriptionList.map((offer) => {
            return (
              <div className="flex border justify-between w-[200px] mx-2  hover:shadow-lg">
                <p className="w-[200px] p-2 bg-pink-200">
                  <BiSolidOffer />
                  {offer.meta}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-2 ml-[600px] w-[350px] hover:cursor-pointer hover:shadow-2xl bg-pink-100 shadow-lg">
        <img className="rounded-lg" src={IMG_URL + cloudinaryImageId}></img>

        <div className="flex items-center">
          {avgRating >= 4 ? (
            <div className="flex space-x-2 p-1 rounded-sm ml-[68px]">
              <i className="text-green-500 text-xl">
                <AiFillStar />
              </i>
              <p className="text-black text-sm">
                {avgRating} <span className="m-2 py-1">|</span>{" "}
                {totalRatingsString}
              </p>
            </div>
          ) : (
            <div className="flex space-x-2 p-1 rounded-sm  ml-12">
              <i className="text-orange-500 text-xl">
                <AiFillStar />
              </i>
              <p className="text-black text-sm">
                {avgRating}
                <span className="m-2 py-1">|</span> {totalRatingsString}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const FoodCart = ({ food, count }) => {
  return (
    <>
      <div className="border-b-4 w-[55%]">
        <div className="flex my-4 items-center justify-between py-2  border-b-2">
          <div className="w-[60%]">
            <h3 className="text-lg ">{food.name} - </h3>
            <div className="flex text-gray-600 font-medium">
              <div className="flex items-center my-2 text-base ml-0">
                <p className="px-2">Quantity {count}</p>
                <span>
                  {" "}
                  ₹.{food.price ? food.price / 100 : food.defaultPrice / 100}
                </span>
              </div>
            </div>
          </div>
          <div>
            <img
              className="h-[85] rounded-md"
              alt="res-img"
              src={IMG_URL + food.imageId}
            />
          </div>
        </div>
      </div>
    </>
  );
};
