import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className=" w-4/5 lg:w-1/3 mx-auto mt-20">
      <p className=" text-2xl text-center text-neutral-800 dark:text-white">Login</p>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col gap-4 "
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput {...register("email")} id="email1" required type="email" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            id="password"
            {...register("password")}
            required
            type="password"
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
      <p className=" mt-3">Forgoten Password ? Please <Link className=" text-blue-600 underline hover:text-blue-800" to={"/registration/resetPassword"}>reset now</Link></p>
      <p className=" mt-3">Don't have account ? Please <Link className=" text-blue-600 underline hover:text-blue-800" to={"/registration/singup"}>register</Link></p>
    </div>
  );
};

export default Login;
