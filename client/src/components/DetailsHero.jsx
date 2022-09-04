import React from 'react'
import { Button, Drawer } from "@mui/material";

export default function DetailsHero({data, toggleDrawer}) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-10 px-10 my-10">
            <div className="text-white flex flex-col gap-3 font-poppins">
              <h1 className="text-white text-[2rem] xs:text-[3rem] md:text-[4rem] lg:text-[5rem] uppercase font-bold text-gradient">
                {data.name}
              </h1>
              <p className="text-[0.8rem] xs:text-[1rem]">{data.bio}</p>
              <div className="flex flex-row gap-3 my-5">
                {data.college && (
                  <div className="text-lg p-2 px-3 sm:p-3 sm:px-4 bg-blue-gradient xs:text-xl text-black uppercase rounded-3xl">
                    {data.college}
                  </div>
                )}
                {data.location && (
                  <div className="text-lg p-2 px-3 sm:p-3 sm:px-4 bg-blue-gradient xs:text-xl text-black uppercase rounded-3xl">
                    {data.location}
                  </div>
                )}
              </div>
                  <Button variant="contained" className="w-1/2" onClick={toggleDrawer}>Update</Button>
            </div>
            <img
              src={data.image}
              alt=""
              className="xs:w-1/2 rounded-full border-4 border-t-0 border-l-0 border-blue-300 p-2"
            />
          </div>
  )
}
