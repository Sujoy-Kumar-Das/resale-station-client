import { Button } from "flowbite-react";
import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContextProvider } from "../../../contexts/authContext/AuthContext";
import uploadUserInfo from "../../../commonFuntions/storeUserInfo";

const Socila = ({ children }) => {
  const { singUpWithGoogle, singupWithGithub } =
    useContext(AuthContextProvider);

  // google singup or login handler
  const handleGoogleLogin = () => {
    singUpWithGoogle()
      .then((result) => {
        const user = result.user;

        const userInfo = {
          email: user.email,
          name: user.displayName,
          role: "buyer",
        };
        uploadUserInfo(userInfo);
      })
      .catch((err) => console.log(err));
  };

  // github singup or login handler
  const handleGithubLogin = () => {
    singupWithGithub()
      .then((result) => {
        const user = result.user;
        const userInfo = {
          email: user?.email,
          name: user?.displayName,
          role: "buyer",
        };
        uploadUserInfo(userInfo);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Button
        onClick={handleGoogleLogin}
        className=" w-full my-3"
        gradientMonochrome="purple"
      >
        {" "}
        <span className="me-3 ">
          <FaGoogle></FaGoogle>
        </span>{" "}
        {children} with Google
      </Button>
      <Button
        onClick={handleGithubLogin}
        className=" w-full mt-3"
        gradientMonochrome="purple"
      >
        {" "}
        <span className="me-3">
          <FaGithub></FaGithub>
        </span>{" "}
        {children} with Github
      </Button>
    </div>
  );
};

export default Socila;
