import { useContext } from "react";
import UserContext from "../utils/userContext";

export const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="py-6 ml-2 flex bg-pink-50 items-center flex-col">
      <div className="flex items-center">
        <span className=" text-black ml-[50px]">
          Developed by :<span className="text-red-600 font-bold"> {user.name}</span>
        </span>
        {/* <span>Email : {user.email}</span> */}
      </div>
      <div className="flex justify-between">
        <span className="m-2 mr-[80px]">
          Email :<span className=" m-1 font-semibold">{user.email}</span>
        </span>
        <span className="m-2 ml-[70px]"> Contact :
        <span className="m-1 font-semibold">{user.contact}</span></span>
      </div>
    </div>
  );
};
