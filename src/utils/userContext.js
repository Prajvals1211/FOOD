import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Prajval Sorate",
    email: "dummy@gmail.com",
  },
});

export default UserContext;
