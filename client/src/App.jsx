import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Organizer from "./pages/Organizer";
import SignUp from "./pages/SignUp";
import styles from "./style";
import Login from "./pages/Login";
import { Navbar } from "./components";
import OrgDetails from "./pages/OrgDetails";
import Event from "./pages/Event";
import EventDetails from "./pages/EventDetails";

const App = () => {
  return (
    <div className="bg-primary">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="org" element={<Organizer />} />
        <Route path="/org/:id" element={<OrgDetails />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path='events' element={<Event/>}/>
        <Route path="event/:id" element={<EventDetails/>}/>
      </Routes>
    </div>
  );
};

export default App;
