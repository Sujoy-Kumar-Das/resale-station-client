import { Label, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";

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
          <TextInput {...register("email")} id="email1" required type="email" />
        </div>

        <Button type="submit">Reset Password</Button>
      </form>
    </div>
  );
};

export default ResetPassword;
