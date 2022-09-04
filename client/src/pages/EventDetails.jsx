import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsHero from "../components/DetailsHero";
import events from "../constants/eventList";

export default function EventDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [bottom, setBottom] = useState(false);

  const toggleDrawer = () => {
    setBottom(!bottom);
  };

  useEffect(() => {
    const data = events.filter((event) => event.id === id);
    setData(data[0]);
  }, []);
  return (
    <div>
        <DetailsHero toggleDrawer={toggleDrawer} data={data}/>
    </div>
  );
}
