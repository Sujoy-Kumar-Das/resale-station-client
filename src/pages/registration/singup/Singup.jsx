import React, { useState } from "react";
import { Button, Checkbox, FileInput, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Singup = () => {
    const [accept,setAccept] = useState(true)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSingup = (data) => {
    console.log(data);
  };
  return (
    <div className=" w-4/5 lg:w-1/3 mx-auto mt-20">
      <p className=" text-2xl text-center text-neutral-800 dark:text-white">
        Singup
      </p>
      <form
        onSubmit={handleSubmit(handleSingup)}
        className="flex flex-col gap-4 "
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your name" />
          </div>
          <TextInput {...register("name")} id="name" required type="text" />
        </div>
        <div id="fileUpload">
          <div className="mb-2 block">
            <Label htmlFor="file" value="Upload file" />
          </div>
          <FileInput id="file" />
        </div>
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
        <div className="flex items-center gap-2">
          <Checkbox onClick={()=>{setAccept(!accept)}} id="agree" />
          <Label className="flex" htmlFor="agree">
            <p>I agree with the <Link className=" text-blue-600 underline hover:text-blue-800">terms and conditions</Link> </p> 
          </Label>
        </div>
        <Button disabled={accept} type="submit">Singup</Button>
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
    </div>
  );
};

export default Singup;
