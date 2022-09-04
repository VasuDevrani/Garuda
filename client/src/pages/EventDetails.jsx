import React from 'react'
import eventList from '../constants/eventList.js'
import {useEffect,useState} from 'react'
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const data = eventList.filter((org) => org.id === id);
    setEventData(data[0]);
  }, []);

  console.log(eventData);
  return (
    <div className="text-white">{eventData.title}</div>
  )
}

export default EventDetails