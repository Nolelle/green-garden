import React from "react";
import GraphTwo from "./GraphTwo";
import GraphOne from "./GraphOne";
import Scheduler from "../Scheduler /Scheduler";
import Map from "./Map";
import { Button } from "@mui/material";
import Sidebar from "../SideBar";

// import GardenCardList from "./GardenCardList";
// import GardenCard from "../GardenCard";

export default function Dashboard(props: any) {
  const { state, handleDayChange, handleTime, bookNotification, createGarden } = props;

  return (
    <div className="layout">
      <div className="sidebard">
        <Sidebar 
          state={state} 
          createGarden= {createGarden}
          />
      </div>
      <div className="dashboard">
        <Map />
        <GraphOne />
        <GraphTwo />
        <Button variant="contained">Set Notifications</Button>
      </div>
      <Scheduler
        state={state}
        handleDayChange={handleDayChange}
        handleTime={handleTime}
        bookNotification={bookNotification}
      />
    </div>
  );
}
