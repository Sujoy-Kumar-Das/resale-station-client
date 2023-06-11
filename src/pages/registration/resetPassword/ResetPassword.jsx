import { Label, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleResetPass = (data) => {
    console.log(data);
  };
  return (
    <div className=" w-4/5 lg:w-1/3 mx-auto mt-20">
      <p className=" text-2xl text-center text-neutral-800 dark:text-white">
        Reset password
      </p>
      <form
        onSubmit={handleSubmit(handleResetPass)}
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

        <Button type="submit">Reset Password</Button>
      </form>
      <p className=" mt-3">
        Return to 
        <Link
          className=" text-blue-600 underline hover:text-blue-800"
          to={"/registration/login"}
        >
          login page
        </Link>
      </p>
    </div>
  );
};

export default ResetPassword;
