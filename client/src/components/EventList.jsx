import React from "react";
import events from "../constants/eventList";

export default function EventList() {
  return (
    <div className="grid grid-cols-16 gap-5">
      {events.map((event) => (
        <div className="bg-white grid grid-cols-1 rounded-2xl pb-4 overflow-hidden">
          <img
            src={event.poster_path}
            alt=""
            className="rounded-2xl hover:scale-105 duration-300 object-cover hover:cursor-pointer"
          />
          <div className="px-3 grid grid-cols-1">
            <h1 className="my-3 font-bold text-lg underline hover:cursor-pointer sm:text-2xl">{event.title}</h1>
            <div className="flex flex-row gap-2 flex-wrap">
              <div className="text-lg p-2 px-3 items-center flex sm:px-4 text-white bg-blue-600 xs:text-xl uppercase rounded-2xl my-2 shadow-lg">
                {event.mode}
              </div>
              <p className="text-lg p-2 px-3 sm:p-3 sm:px-4 bg-blue-600 xs:text-xl text-white uppercase rounded-2xl my-2 shadow-lg">
                {event.eventType}
              </p>
              <p className="text-lg p-2 px-3 sm:p-3 sm:px-4 bg-blue-600 xs:text-xl text-white uppercase rounded-2xl my-2 shadow-lg">
                {event.location}
              </p>
            </div>
            <button className="text-white bg-blue-800 p-2 rounded-lg">Apply Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}
