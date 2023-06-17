import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Socila from "../socialLogin/Social";
import { AuthContextProvider } from "../../../contexts/authContext/AuthContext";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {loginWithEmailAndPass} = useContext(AuthContextProvider)

  const [firebaseErr,setFirebaseErr] = useState("")

  // login handler
  const handleLogin = (data) => {
    loginWithEmailAndPass(data.email,data.password)
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .catch(err => {
      console.log(err)
      setFirebaseErr(err.message)
    })
  };

  return (
    <div className=" w-4/5 lg:w-1/3 mx-auto mt-20">
      <p className=" text-2xl text-center text-neutral-800 dark:text-white">
        Login
      </p>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col gap-4 "
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            color={errors?.email?.message && "failure"}
            {...register("email", { required: "Invalid Email Address" })}
            id="email1"
            type="email"
            placeholder={
              errors?.email?.message
                ? `${errors.email.message}`
                : "Enter Your Email Address"
            }
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            id="password"
            color={errors?.password?.message && "failure"}
            {...register("password", { required: "Incorrect password" })}
            placeholder={
              errors?.password?.message
                ? `${errors.password.message}`
                : "Enter Your Password"
            }
            type="password"
          />
        </div>
        {firebaseErr && <p>{firebaseErr === "Firebase: Error (auth/wrong-password)." ? "Wrong password": firebaseErr === "Firebase: Error (auth/user-not-found)."?"This email address doesn't exist":firebaseErr}</p>}
        <Button type="submit">Login</Button>
      </form>

      <p className=" mt-3">
        Don't have account ? Please{" "}
        <Link
          className=" text-blue-600 underline hover:text-blue-800"
          to={"/registration/singup"}
        >
          register
        </Link>
      </p>
      <p className=" mt-3">
        Forgoten Password ? Please{" "}
        <Link
          className=" text-blue-600 underline hover:text-blue-800"
          to={"/registration/resetPassword"}
        >
          reset now
        </Link>
      </p>
      <Socila>Login</Socila>
    </div>
  );
};

export default Login;
