import React, { useContext, useState } from "react";
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
import { AuthContextProvider } from "../../../contexts/authContext/AuthContext";
import { toast } from "react-hot-toast";
import uploadUserInfo from "../../../commonFuntions/storeUserInfo";
import storeUserInfo from "../../../commonFuntions/storeUserInfo";

const Singup = () => {
  const [accept, setAccept] = useState(false);
  const [loading, setLoading] = useState(false);
  const [firebaseErr, setFirebaseErr] = useState("");
  const { singupWithEmailAndPass, updateUser } =
    useContext(AuthContextProvider);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // validate image file type funtion
  const validateImgage = (file) => {
    const allowedExtantions = ["image/png", "image/jpg", "image/jpeg"];
    if (!allowedExtantions.includes(file[0].type)) {
      return "File does not support. You must use .png or .jpg or jpeg";
    } else {
      return true;
    }
  };
  // validate password validation
  const validatePassword = (password) => {
    if (!password) {
      return "Password is required";
    }
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one digit";
    }
    if (!/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)) {
      return "Password must contain at least one special charecter";
    }
    return true;
  };
  // create user fundtion handler
  const handleSingup = async (data, event) => {
    setLoading(true);
    const storeUserInfo = {
      name: data.name,
      email: data.email,
      role: data.role,
    };

    const imageURL = await uploadImage(data.image);
    singupWithEmailAndPass(data.email, data.password)
      .then(() => {
        updateUserInfo(data.name, imageURL);
        uploadUserInfo(storeUserInfo);
        setFirebaseErr("");
        setLoading(false);
        setAccept(false);
        event.target.reset();
      })
      .catch((error) => {
        setFirebaseErr(error.message);
        setLoading(false);
      });
  };
  // upload image funtion
  const uploadImage = async (image) => {
    const imageFile = image[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_REACT_APP_imgApi_key
      }`,
      {
        method: "POST",
        body: formData,
      }
    );
    const imageData = await res.json();
    if (imageData.success) {
      return imageData.data.display_url;
    }
  };
  // update user funtion
  const updateUserInfo = (name, imageURL) => {
    const userInfo = {
      displayName: name,
      photoURL: imageURL,
    };
    updateUser(userInfo)
      .then(() => {})
      .catch((error) => {
        setFirebaseErr(error.message);
        setLoading(false);
      });
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
            <Label htmlFor="image" value="Attach Your Photo" />
          </div>
          <FileInput
            helperText={errors?.file?.message && `${errors.file.message}`}
            id="file"
            color={errors?.file?.message && "failure"}
            {...register("image", {
              required:
                "A profile picture is useful to confirm your are logged into your account",
              validate: validateImgage,
            })}
          />
          <p className=" text-red-600 mt-1">{errors?.image?.message}</p>
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
        {firebaseErr && (
          <p className=" text-red-600">
            {firebaseErr === "Firebase: Error (auth/email-already-in-use)." &&
              "This email address already had a account"}
          </p>
        )}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            id="password"
            color={errors?.password?.message && "failure"}
            {...register("password", {
              validate: validatePassword,
            })}
            placeholder="Enter Your Password"
            type="password"
          />

          <p className=" text-red-600 mt-1">{errors?.password?.message}</p>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            onClick={() => {
              setAccept(!accept);
            }}
            id="agree"
          />
          <Label className="flex" htmlFor="agree">
            <p>I agree with the</p>
            <Link
              className="text-cyan-600 hover:underline dark:text-cyan-500"
              href="/forms"
            >
              <p>terms and conditions</p>
            </Link>
          </Label>
        </div>
        {!loading ? (
          <Button disabled={!accept} type="submit">
            Sing Up
          </Button>
        ) : (
          <Button isProcessing>Account Createing</Button>
        )}
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
