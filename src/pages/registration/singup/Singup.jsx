import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Radio,
  TextInput,
} from "flowbite-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Socila from "../socialLogin/Social";

const Singup = () => {
  const [accept, setAccept] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSingup = (data) => {
    console.log(data);
  };
  return (
    <div className=" w-4/5 lg:w-1/3 mx-auto mt-16 pb-3">
      <p className=" text-2xl text-center text-neutral-800 dark:text-white">
        Create Account
      </p>
      <form
        onSubmit={handleSubmit(handleSingup)}
        className="flex flex-col gap-4 "
      >
        <fieldset className="mt-5" id="radio">
          <legend className="mb-4">Create account as a ....</legend>
          <div className=" flex gap-4 border-2 p-3 rounded-lg">
            <div className="flex items-center gap-2">
              <Radio
                {...register("role", { required: "Please select a role" })}
                name="role"
                value="buyer"
              />
              <Label htmlFor="buyer">Buyer</Label>
            </div>

            <div className="flex items-center gap-2">
              <Radio
                {...register("role", { required: "Please select a role" })}
                name="role"
                value="Seller"
              />
              <Label htmlFor="seller">Seller</Label>
            </div>
          </div>
        </fieldset>
        {errors?.role?.message && (
          <p className=" text-red-600 mt-3 text-xl font-bold">
            {errors?.role?.message}
          </p>
        )}
        {console.log()}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput
            color={errors?.name?.message && "failure"}
            {...register("name", { required: "Name field must be required" })}
            id="name"
            type="text"
            placeholder={
              errors?.name?.message
                ? `${errors.name.message}`
                : "Enter Your Name"
            }
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="file" value="Attach Your Photo" />
          </div>
          <FileInput
            helperText={errors?.file?.message && `${errors.file.message}`}
            id="file"
            color={errors?.file?.message && "failure"}
            {...register("file", {
              required:
                "A profile picture is useful to confirm your are logged into your account",
            })}
          />
        </div>
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
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long.",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.",
              },
            })}
            placeholder="Enter Your Password"
            type="password"
          />
          <p className=" text-red-600 mt-1">{errors?.password?.message}</p>
        </div>
        <Button type="submit">Sing Up</Button>
      </form>
      <p className=" mt-3">
        Already have an account ? Please{" "}
        <Link
          className=" text-blue-600 underline hover:text-blue-800"
          to={"/registration/login"}
        >
          Login
        </Link>
      </p>
      <Socila>Sing up</Socila>
    </div>
  );
};

export default Singup;
