import { Button, TextField } from "@mui/material";
import React from "react";
import { FaImage, FaUser, FaCompass } from "react-icons/fa";
import {
  BsMailbox,
  BsFacebook,
  BsTwitter,
  BsDiscord,
  BsInstagram,
  BsGlobe,
} from "react-icons/bs";

export default function CreateEvent({ toggleDrawer }) {
  return (
    <form className="flex flex-col p-10 m-0 bg-slate-800">
      <div className="container mx-auto flex gap-2 flex-col md:w-[40%]">
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          className="p-2 border outline-none rounded-2xl text-lg"
        />
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          className="p-2 border outline-none rounded-2xl text-lg"
        />
        <input
          type="text"
          placeholder="Hosted By"
          name="hostedBy"
          className="p-2 border outline-none rounded-2xl text-lg"
        />
        <input
          type="text"
          placeholder="Enter location"
          name="location"
          className="p-2 border outline-none rounded-2xl text-lg"
        />
        <textarea
          cols="30"
          rows="5"
          name="content"
          placeholder="About event"
          className="p-2 border outline-none rounded-2xl text-lg"
        ></textarea>
        <label
          htmlFor="imageFile"
          className="text-gradient text-xl flex gap-2 items-center"
        >
          <div className="text-white">
            <FaImage />
          </div>
          Add an image :{" "}
        </label>
        <input type="file" accept="image/*" className="text-white" />

        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Select mode
        </label>
        <select
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose mode</option>
          <option value="OFF">Offline</option>
          <option value="ON">Online</option>
        </select>

        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Select Event type
        </label>
        <select
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose event type</option>
          <option value="hack">Hackathon</option>
          <option value="meet">MeetUp</option>
          <option value="fest">Fest</option>
        </select>
        {/* socials */}
        <div className="socials flex flex-col text-3xl gap-3 my-10">
          <div className="flex items-center">
            <BsDiscord color="skyblue" />
            <input
              type="text"
              placeholder="Enter discord"
              className="p-2 border outline-none rounded-2xl text-lg mx-2 flex-1"
            />
          </div>
          <div className="flex items-center">
            <BsInstagram color="skyblue" />
            <input
              type="text"
              placeholder="Enter instagram"
              className="p-2 border outline-none rounded-2xl text-lg mx-2 flex-1"
            />
          </div>
          <div className="flex items-center">
            <BsGlobe color="skyblue" />
            <input
              type="text"
              placeholder="Enter portal"
              className="p-2 border outline-none rounded-2xl text-lg mx-2 flex-1"
            />
          </div>
          <div className="flex items-center">
            <BsFacebook color="skyblue" />
            <input
              type="text"
              placeholder="Enter facebook"
              className="p-2 border outline-none rounded-2xl text-lg mx-2 flex-1"
            />
          </div>
          <div className="flex items-center">
            <BsMailbox color="skyblue" />
            <input
              type="text"
              placeholder="Enter email"
              className="p-2 border outline-none rounded-2xl text-lg mx-2 flex-1"
            />
          </div>
          <div className="flex items-center">
            <BsTwitter color="skyblue" />
            <input
              type="text"
              placeholder="Enter twitter"
              className="p-2 border outline-none rounded-2xl text-lg mx-2 flex-1"
            />
          </div>
        </div>
        <div></div>
        <Button variant="contained">CREATE</Button>
        <Button variant="contained" onClick={toggleDrawer}>
          Back
        </Button>
      </div>
    </form>
  );
}
