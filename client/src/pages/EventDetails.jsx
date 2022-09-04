import React from "react";
import eventList from "../constants/eventList.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";

const EventDetails = () => {
  const params = useParams();
  const { id } = params;

  const [data, setData] = useState(null);

  useEffect(() => {
    const data = eventList.filter((event) => event.id === id);
    setData(data[0]);
    console.log(data[0]);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-10 px-10 my-10">
        {
          data ? (
            <>
              <div className="text-white flex flex-col gap-3 font-poppins">
              <h1 className="text-white text-[2rem] xs:text-[3rem] md:text-[4rem] lg:text-[5rem] uppercase font-bold text-gradient">
                {data.title}
              </h1>
              <p className="text-[0.8rem] xs:text-[1rem]">{data.content}</p>
              <div className="flex flex-row gap-3 my-5">
                {data.organizer && (
                  <div className="text-lg p-2 px-3 sm:p-3 sm:px-4 bg-blue-gradient xs:text-xl text-black uppercase rounded-3xl">
                    {data.organizer}
                  </div>
                )}
                {data.location && (
                  <div className="text-lg p-2 px-3 sm:p-3 sm:px-4 bg-blue-gradient xs:text-xl text-black uppercase rounded-3xl">
                    {data.location}
                  </div>
                )}
                {data.eventType && (
                  <div className="text-lg p-2 px-3 sm:p-3 sm:px-4 bg-blue-gradient xs:text-xl text-black uppercase rounded-3xl">
                    {data.eventType}
                  </div>
                )}
                {data.mode && (
                  <div className="text-lg p-2 px-3 sm:p-3 sm:px-4 bg-blue-gradient xs:text-xl text-black uppercase rounded-3xl">
                    {data.mode}
                  </div>
                )}
              </div>
                  <Button variant="contained" className="w-1/2">APPLY NOW</Button>
            </div>
            <img
              src={data.poster_path}
              alt=""
              className="xs:w-1/2 rounded-full border-4 border-t-0 border-l-0 border-blue-300 p-2"
            />
            </>
          ) : (
            <h1>No data exist</h1>
          )
        }
    </div>
  );
};

export default EventDetails;
