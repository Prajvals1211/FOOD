import { useDispatch, useSelector } from "react-redux";
import { FoodCart, FoodCart1 } from "./Restuarant";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import CartImage from "../Images/CartEmpty.png";
import { useContext, useState } from "react";
import LoginContext from "../utils/loginContext";
import { useNavigate } from "react-router-dom";
import { Navigatetologinpage } from "../utils/location";

const Cart = () => {
  let newCartItem;
  const navigate = useNavigate();
  const [Navigatetologin,setNavigateToLogin] = useContext(Navigatetologinpage);
  const { login } = useContext(LoginContext);
  const [loginbtn,setLoginbtn]  = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const showToast = (a) => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Order Placed successfully");
        toast.dismiss(a);
      }, 3000);
    });

    promise
      .then((message) => {
        toast.success(message);
        setTimeout(() => {
          dispatch(clearCart());
        }, 1000);
      })
      .catch((error) => toast.error(error));
  };

  const handlePlaceOrder = () => {
    if (login.name === "Login name") {
      toast("To place your order now, kindly log in to your account", {
        position: "top-right",
      });
      setNavigateToLogin('cart');
      setLoginbtn(true);
    } else {
      let a = toast.loading("Placing Order");
      showToast(a);
    }
  };
  const navigateToLogin = ()=>{
    
    navigate('/login')
  }
  let iteminCards = [];
  if (cartItems.length > 0) {
    iteminCards = [...new Set(cartItems)];
  }
  let totalAmount = 0;
  cartItems.map((e) => {
    e.price
      ? (totalAmount = totalAmount + e.price / 100).toFixed(2)
      : (totalAmount = totalAmount + e.defaultPrice / 100).toFixed(2);
  });
  const toPay = totalAmount + 29 + 49;
  return cartItems.length === 0 ? (
    <div className="flex justify-center">
      <div className="">
        <div className="flex justify-center">
          <span className=" m-1 ml-14 font-semibold text-3xl flex justify-center">
            You can go to{" "}
            <Link className="text-pink-500 ml-1 mr-1" to="/">
              Home Page
            </Link>
            to view more restaurants.
          </span>
        </div>
        <div className=" flex  flex-col items-center">
          <img className="w-[500] bg-pink-50" src={CartImage} />
          <span className="font-bold text-3xl text-pink-500 flex justify-center">
            Cart is EMPTY!!
          </span>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col bg-pink-50 m-1 p-2 shadow-lg">
     {loginbtn &&
      <div className="fixed  left-1/2 transform -translate-x-1/2 z-50">
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow-md"
           onClick={navigateToLogin}
        >
          Click here to logIn
        </button>
      </div>
}
      <div className="flex justify-between">
        {cartItems.length === 1 ? (
          <h1 className="font-bold text-3xl p-2 m-3">
            Cart Item - {cartItems.length}
          </h1>
        ) : (
          <h1 className="font-bold text-3xl p-2 m-3">
            Cart Items - {cartItems.length}
          </h1>
        )}

        <button
          className="p-2 m-3 bg-red-500 font-bold rounded-md"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>
      <div className="flex flex-row mx-10">
        <div className="flex flex-wrap w-[50%]">
          {iteminCards.map((e) => {
            let a = cartItems.filter((c) => {
              return c.id === e.id;
            }).length;
            return <FoodCart food={e} count={a} key={e.id} />;
          })}
        </div>

        <div>
          <div className="flex  my-4 border-b-2 border-b-black ">
            <div className="">
              <div className="border-b-2 p-2">
                <h2 className="mx-14 px-10">Bill Details</h2>
              </div>
              <div className="my-2">
                <div className="flex items-center justify-between">
                  <p>Item Total</p>{" "}
                  <span className="mx-10">₹ {totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p>Delivery Fee</p> <span className="mx-10">₹ 29</span>
                </div>
                <div className="flex items-center justify-between">
                  <p>GST and Restaurant Charges</p>
                  <span className="mx-10">₹ 49</span>
                </div>
              </div>
            </div>
          </div>
          <div className="font-bold flex items-center justify-between">
            <p>TO PAY</p> <span className="mx-12">₹ {toPay.toFixed(2)}</span>
          </div>
        </div>

        <div className="m-16">
          <div>
            <button
              className="p-2 m-3 bg-green-500 font-bold rounded-md text-white"
              onClick={() => {
                handlePlaceOrder();
              }}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
