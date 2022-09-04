import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import orgList from "../constants/orgList";
import styles from "../style";
import ProfileGroup from "../components/ProfileGroup";
import {
  BsBox,
  BsMailbox,
  BsFacebook,
  BsTwitter,
  BsDiscord,
  BsInstagram,
  BsGlobe,
} from "react-icons/bs";
import decor from "../assets/text-deco.png";
import { Button, Drawer } from "@mui/material";
import ContactUs from "../components/ContactUs";
import OrgForm from "../components/OrgForm";
import UpdateOrg from "../components/UpdateOrg";
import DetailsHero from "../components/DetailsHero";

export default function OrgDetails() {
  const { id } = useParams();
  const [orgData, setOrgData] = useState(null);
  const [bottom, setBottom] = useState(false);

  const toggleDrawer = () => {
    setBottom(!bottom);
  };

  useEffect(() => {
    const data = orgList.filter((org) => org.id === id);
    setOrgData(data[0]);
  }, []);

  return (
    <div
      className={`${styles.boxWidth} mx-auto md:container flex flex-col font-poppins`}
    >
      {orgData ? (
        <div>
          <DetailsHero data={orgData} toggleDrawer={toggleDrawer} />
          <div className="px-4">
            {/* members */}
            <ProfileGroup
              data={orgData.members}
              title="members"
              toggleDrawer={toggleDrawer}
            />
            {/* sponsors */}
            <ProfileGroup
              data={orgData.sponsors}
              title="sponsors"
              toggleDrawer={toggleDrawer}
            />
            {/* events */}
            <div className="flex flex-col justify-center items-center gap-0 my-20">
              <img src={decor} alt="" className="" />
              <h1 className="text-white text-[3rem] sm:text-[4rem] font-bold -mt-4">
                Collab
              </h1>
            </div>
            {/* add the events list component */}
            <div className="text-2xl text-white flex flex-row justify-between items-center font-bold font-poppins uppercase my-10">
              <div className="flex flex-row gap-2 items-center">
                <BsBox /> <span>Socials</span>
              </div>
              <Button variant="contained" onClick={toggleDrawer}>
                Update
              </Button>
            </div>
            <div className="socials flex flex-col text-3xl gap-3 mb-10">
              <div className="flex flex-row items-center gap-3 text-white">
                <BsDiscord color="skyblue" />
                <p>http://nsut.discord.com</p>
              </div>
              <div className="flex flex-row items-center gap-3 text-white">
                <BsFacebook color="blue" />
                <p>http://nsut.facebook.com</p>
              </div>
              <div className="flex flex-row items-center gap-3 text-white">
                <BsInstagram color="red" />
                <p>http://nsut.insta.com</p>
              </div>
              <div className="flex flex-row items-center gap-3 text-white">
                <BsMailbox color="white" />
                <p>http://nsut@gmail.com</p>
              </div>
              <div className="flex flex-row items-center gap-3 text-white">
                <BsTwitter color="blue" />
                <p>http://nsut.twitter.com</p>
              </div>
              <div className="flex flex-row items-center gap-3 text-white">
                <BsGlobe color="grey" />
                <p>http://nsut.com</p>
              </div>
            </div>
            <ContactUs />
          </div>
        </div>
      ) : (
        <div className="text-3xl text-center text-white">
          No organization data exist
        </div>
      )}
      {/* org form */}
      <Drawer anchor={"bottom"} open={bottom} onClose={toggleDrawer}>
        <UpdateOrg toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
}
