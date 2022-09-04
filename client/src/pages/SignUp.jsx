import React, { useContext } from "react";
import { useState } from "react";
import { FaImage } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import { Store } from "../store";
import axios from "axios";

const SignUp = () => {
  const { state, dispatch } = useContext(Store);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    poster_path:
      "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png",
    userType: "student",
    college: "",
  });
  const [load, setLoad] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const addImage = (img) => {
    setLoad(true);
    if (img.type === "image/jpeg" || img.type === "image/png") {
      const data = new FormData();
      data.append("file", img);
      data.append("upload_preset", "Garuda");
      data.append("cloud_name", "di5gni2uz");
      fetch("http://api.cloudinary.com/v1_1/di5gni2uz/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data.url.toString());
          setUserData({ ...userData, poster_path: data.url.toString() });
          setLoad(false);
        })
        .catch((err) => {
          setLoad(false);
          console.log(err);
        });
    } else {
      setLoad(false);
    }
  };

  const handleSubmit = async () => {
    if (load) return;

    if (
      userData.name.length > 0 &&
      userData.email.length > 0 &&
      userData.location.length > 0 &&
      userData.college.length > 0
    ) {
      try {
        const { data } = await axios.post("/auth/signUp", userData);
        localStorage.setItem('userinfo', JSON.stringify(data));
        dispatch({ type: "SIGN_IN", payload: data });
        reset();
        navigate('/');
      } catch (err) {
        console.log(err);
        reset();
      }
    }
  };
  const reset = () => {
    setUserData({
      name: "",
      email: "",
      password: "",
      location: "",
      image:
        "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png",
      userType: "student",
      college: "",
    });
  };

  return (
    <>
      <div class="bg-grey-lighter min-h-screen flex flex-col ">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="name"
              placeholder="Full Name"
              value={userData.name}
              onChange={handleChange}
            />

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={userData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="location"
              placeholder="Location"
              value={userData.location}
              onChange={handleChange}
            />
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="college"
              placeholder="College"
              value={userData.college}
              onChange={handleChange}
            />
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleChange}
            />
            <label
              htmlFor="imageFile"
              className="text-white text-xl flex gap-2 items-center"
            >
              <FaImage /> Add an image :{" "}
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => addImage(e.target.files[0])}
            />
            <div class="my-3">
              <h3>Choose one: </h3>
              <input
                type="radio"
                id="1"
                name="userType"
                value="student"
                className="mx-2"
                onChange={handleChange}
              />
              <label htmlFor="1">Student</label>
              <input
                type="radio"
                name="userType"
                id="2"
                value="organizer"
                className="mx-2"
                onChange={handleChange}
              />
              <label htmlFor="2">Organizer</label>
              <input
                type="radio"
                id="3"
                name="userType"
                value="sponsor"
                className="mx-2"
                onChange={handleChange}
              />
              <label htmlFor="3">Sponsor</label>
            </div>

            <button
              type="submit"
              class="w-full text-center py-3 rounded bg- text-black border-solid border-2 border-sky-500   hover:bg-green-dark focus:outline-none my-1"
              onClick={handleSubmit}
            >
              {load ? "loading..." : "Create Account"}
            </button>

            <div class="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
            <div class="text-black mt-6 text-center ">
              Already have an account?
              <a
                class="no-underline border-b border-blue text-blue"
                href="../login/"
              >
                Log in
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
