import React, { useState } from "react";
import styles from "../style";
import { FaSearch } from "react-icons/fa";
import EventList from "../components/EventList";
import { Button, Drawer } from "@mui/material";
import CreateEvent from "../components/CreateEvent";

const names = ["delhi", "mumbai"];

export default function Event() {
  const [personName, setPersonName] = useState([]);
  const [bottom, setBottom] = useState(false);

  const toggleDrawer = () => {
    setBottom(!bottom);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div
      className={`flex flex-col ${styles.boxWidth} mx-auto p-4 md:px-10 font-poppins`}
    >
      <h1 className="uppercase text-white text-[3rem] xs:text-[4rem] sm:text-[5rem] md:text-[7rem] font-bold text-gradient">
        Events
      </h1>
      {/* search */}
      <div className="flex justify-around bg-black-gradient p-4 rounded-xl text-xl sm:text-2xl items-center text-white gap-1 xs:gap-7 sm:gap-10 my-10">
        <input
          type="text"
          placeholder="search..."
          className="p-1 sm:p-2 outline-none border-none rounded-lg flex-1 bg-slate-300 text-black focus:outline-blue-400 hover:cursor-pointer focus:cursor-text"
        />
        <div className="xs:mr-5 sm:mr-10 p-2 rounded-full cursor-pointer">
          <FaSearch />
        </div>
      </div>
      {/* sort */}
      <div className="flex gap-2 items-center">
        <Button variant="contained" color="secondary" onClick={toggleDrawer}>
          CREATE EVENT
        </Button>
        <Button variant="contained" color="secondary">
          SET REGION
        </Button>
      </div>
      {/* list */}
      <p className="my-10 text-white relative text-2xl uppercase after:bg-slate-500 after:absolute after:w-[20%] after:h-[3px] after:left-0 after:bottom-0">
        Open
      </p>
      <EventList />
      <p className="my-14 text-white relative text-2xl uppercase after:bg-slate-500 after:absolute after:w-[20%] after:h-[3px] after:left-0 after:bottom-0 ">
        Past
      </p>
      <EventList />
      {/* org form */}
      <Drawer
        anchor={'bottom'}
        open={bottom}
        onClose={toggleDrawer}
      >
        <CreateEvent toggleDrawer={toggleDrawer}/>
      </Drawer>
    </div>
  );
}
