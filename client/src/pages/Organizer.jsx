import React, { useEffect, useRef, useState } from "react";
import styles from "../style";
import orgList from "../constants/orgList";
import { Drawer, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import OrgForm from "../components/OrgForm";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Store } from "../store";
import axios from "axios";

export default function Organizer() {
  const search = useRef(null);

  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [bottom, setBottom] = useState(false);
  const [org, setOrg] = useState(userInfo.isOrganizer || false);
  const [list, setList] = useState([]);

  useEffect(() => {
    const getOrgList = async() => {
      try{
        const {data} = await axios.get('/auth/allUsers');

        console.log(data);
      }catch(err){
        console.log(err);
      }
    }

    getOrgList();
  }, [])

  const toggleDrawer = () => {
    setBottom(!bottom);
  };

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleKeyPress = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      handleDispatch();
    }
  };

  const handleDispatch = () => {
    search.current?.blur();
    setQuery("");
  };

  const addOrg = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`org p-4 md:px-10 ${styles.boxWidth} mx-auto `}>
      <h1 className="uppercase text-white text-[2rem] xs:text-[4rem] sm:text-[5rem] md:text-[7rem] font-bold text-gradient">
        Organizations
      </h1>
      {/* search and sort section */}
      <div className="special my-7 flex flex-col sm:flex-row justify-between sm:items-center gap-5">
        <div className="search flex">
          <input
            type="text"
            ref={search}
            className="bg-transparent outline-none text-white font-roboto border-b p-2 w-[8rem] md:w-[12rem]"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={handleKeyPress}
          />
          <IconButton color="warning" onClick={handleDispatch}>
            <SearchIcon sx={{ color: "white" }} />
          </IconButton>
        </div>
        <div className="sortButtons flex xs:flex-row flex-col">
          <ButtonGroup variant="contained" aria-label="outlined button group">
            <Button>A-Z</Button>
            <Button>Z-A</Button>
            <Button>Latest</Button>
            <Button>Oldest</Button>
          </ButtonGroup>
          <ButtonGroup variant="contained" aria-label="outlined button group">
            {org && (
              <Button color="secondary" onClick={toggleDrawer}>
                Create New
              </Button>
            )}
          </ButtonGroup>
        </div>
      </div>
      {/* list */}
      <div className="list grid grid-cols-15 gap-7 my-10 items-center justify-center">
        {orgList.length !== 0 ? (
          orgList.map((org) => (
            <div
              key={org.id}
              className="grid grid-cols-1 rounded-3xl border border-gradient p-2 text-center hover:scale-105 duration-300"
            >
              <Link to={`/org/${org.id}`}>
                <img src={org.image} alt="image" className="rounded-3xl " />
              </Link>
              <Link to={`/org/${org.id}`}>
                <h1 className="text-white text-xl md:text-2xl mt-3">
                  {org.name}
                </h1>
              </Link>
              <p className="text-white">{org.college}</p>
            </div>
          ))
        ) : (
          <h1>No Data exist</h1>
        )}
      </div>
      {/* org form */}
      <Drawer anchor={"bottom"} open={bottom} onClose={toggleDrawer}>
        <OrgForm addOrg={addOrg} toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
}
