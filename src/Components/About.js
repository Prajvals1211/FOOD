const About = () => {
  return (
    <div className=" mt-2 flex flex-col items-center justify-center bg-pink-50">
      <div className="flex my-2 text-xl">
        <h1 className="font-semibold ">App description :</h1>
        <span>
          This is a food ordering app created using{" "}
          <span className="text-pink-600">React</span>.
        </span>
      </div>

      <p className="text-lg font-semibold">
        Below are some few details about the Application :
      </p>
      <ul className="my-4 text-lg">
        {" "}
        <li>
          <span className="font-extrabold mx-2">-</span>
          <span className="text-pink-600">Parcel</span> used as bundler to
          bundle things up.
        </li>
        <li>
          <span className="font-extrabold mx-2">-</span>This application is
          created using{" "}
          <span className="text-pink-600">
            functional Components , inbuild hooks and custom hooks
          </span>{" "}
          .
        </li>
        <li>
          <span className="font-extrabold mx-2">-</span>Used inbuilt hooks like{" "}
          <span className="text-pink-600">useState</span> ,{" "}
          <span className="text-pink-600">useEffect</span> ,{" "}
          <span className="text-pink-600">useContext</span>
        </li>
        <li>
          <span className="font-extrabold mx-2">-</span>
          <span className="text-pink-600 m-1">
            Swiggy's Public API
          </span>used for fetching Resturant List and Menu
        </li>
        <li>
          <span className="font-extrabold mx-2">-</span>Created some custom
          hooks like <span className="text-pink-600">useRestaurant</span> to get
          list of menu items of a selected restaurant
        </li>
        <li>
          <span className="font-extrabold mx-2">-</span>
          <span className="text-pink-600 m-1">Formik</span>used for login page.
        </li>
        <li>
          <span className="font-extrabold mx-2">-</span>
          <span className="text-pink-600 m-1">Shimmer</span>used to make the UI
          friendly for the User.
        </li>
        <li>
          <span className="font-extrabold mx-2">-</span>
          <span className="text-pink-600 m-1">Lazy Loading</span>used to
          optimize my application by loading resources only when they are
          needed.
        </li>
        <li>
          <span className="font-extrabold mx-2">-</span>
          <span className="text-pink-600 m-1">Tailwind CSS</span>used for
          designing and styling the UI.
        </li>
        <li>
          <span className="font-extrabold mx-2">-</span>
          <span className="text-pink-600 m-1">React Router</span>used for
          routing.
        </li>
        <li>
          <span className="font-extrabold mx-2">-</span>
          <span className="text-pink-600 m-1">Redux Toolkit</span>used for state
          management.
        </li>
        <li>
          <span className="font-extrabold mx-2">-</span>
          <span className="text-pink-600 m-1">react-hot-toast</span>used for
          notification popUp.
        </li>
      </ul>
    </div>
  );
};

export default About;
