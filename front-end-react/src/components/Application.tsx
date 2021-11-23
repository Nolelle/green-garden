// import React from "react";
// import ReactDOM from "react-dom";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
import useApplicationData from "../hooks/useApplicationData";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import VegetableCardList from "./VegetableCardList";
import GardenCardList from "./GardenCardList";
import Dashboard from "./Dashboard/Dashboard";
import SideBarList from "./SideBar/SideBarList";
import { Link } from "react-router-dom";

export default function Application() {
  const { state, handleDayChange, handleTime, bookNotification } =
    useApplicationData();
  return (
    <div>
      <Link to="/dashboard">My Garden</Link> | <Link to="/login">Login</Link>
      <Nav />
      <SearchBar />
      <VegetableCardList />
      <GardenCardList />
      {/* <Dashboard
        state={state}
        handleDayChange={handleDayChange}
        handleTime={handleTime}
        bookNotification={bookNotification}
      /> */}
      <SideBarList />
    </div>
  );
}
