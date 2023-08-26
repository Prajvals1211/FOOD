import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const useLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Extract latitude and longitude from the position object
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          toast.loading("Loading",
            // "Location fetched successfully! Fetching restaurants...",
            { duration: 2000 }
          );
        },
        (error) => {
          console.error("Error getting location:", error.message);
          toast.error(error.message, { duration: 5000 });
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);

  return location;
};
export default useLocation;
