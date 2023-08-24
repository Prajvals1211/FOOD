

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
        Hello All,
        <li>
          <span className="font-extrabold mx-2">-</span> I have used{" "}
          <span className="text-pink-600">Parcel</span> as bundler to bundle
          things up.
        </li>
        <li>
          <span className="font-extrabold mx-2">-</span>The application is
          created using functional Components , inbuild hooks and custom hooks .
        </li>
        <li>
          <span className="font-extrabold mx-2">-</span>I have used inbuilt
          hooks like <span className="text-pink-600">useState</span> ,{" "}
          <span className="text-pink-600">useEffect</span> ,{" "}
          <span className="text-pink-600">useContext</span>
        </li>
        <li>
          <span className="font-extrabold mx-2">-</span>I have used{" "}
          <span className="text-pink-600">Swiggy's Public API</span> for
          fetching Resturant List and Menu
        </li>
        <li>
          <span className="font-extrabold mx-2">-</span>Created some custom
          hooks like <span className="text-pink-600">useRestaurant</span> to get
          list of menu items of a selected restaurant
        </li>
        <li>
          <span className="font-extrabold mx-2">-</span>I have used{" "}
          <span className="text-pink-600">Formik</span> for login page.
        </li>
        <li>
          <span className="font-extrabold mx-2">-</span>I have used{" "}
          <span className="text-pink-600">Shimmer</span> to make the UI friendly
          for the User.
        </li>
        <li>
          <span className="font-extrabold mx-2">-</span>I have used{" "}
          <span className="text-pink-600">Lazy Loading</span> to optimize my
          application by loading resources only when they are needed.
        </li>
        <li>
          <span className="font-extrabold mx-2">-</span>I have used{" "}
          <span className="text-pink-600">Tailwind CSS</span> for designing and
          styling the UI.
        </li>
        <li>
          <span className="font-extrabold mx-2">-</span>I have used{" "}
          <span className="text-pink-600">React Router</span> for routing.
        </li>
        <li>
          <span className="font-extrabold mx-2">-</span>I have used{" "}
          <span className="text-pink-600">Redux Toolkit</span> for state
          management.
        </li>
        <li>
          <span className="font-extrabold mx-2">-</span>I have used{" "}
          <span className="text-pink-600">react-hot-toast</span> for
          notification popUp.
        </li>
      </ul>
    </div>
  );
};

export default About;
