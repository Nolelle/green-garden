// eslint-disable-next-line
import React from "react";
import VegetableCareGraph from "./VegetableCareGraph";
import GardenDiversityGraph from "./GardenDiversityGraph";
import GraphThree from "./SeasonsPieChart";
import GardenDiversityPolerGraph from "./GardenDiversityPolerGraph";
import { TagsBarGraph } from "./TagsBarGraph";
import Scheduler from "../Scheduler/Scheduler";
import Map from "./Map";
import Nav from "../Nav";
import { Button, formGroupClasses } from "@mui/material";
import Sidebar from "../SideBar";
import { Link, NavLink } from "react-router-dom";
import "../SideBar/index.scss";
import "../Dashboard/GraphOne.scss";
import SeasonsPieChart from "./SeasonsPieChart";
import { useState, useEffect } from "react";
import GardenOptions from "../GardenOptions";
import GrowingDaysGraph from "./GrowingDaysGraph";
import DeleteDropDown from "./DeleteDropDown";

export default function Dashboard(props: any) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [gardenName, setGardenName] = useState("All Gardens");

  const {
    updateGardenVegetableState,
    state,
    handleDayChange,
    handleTime,
    bookNotification,
    createGarden,
    changeGarden,
    deleteGarden,
    updateGardenState,
    handleVegetable,
    deleteGardenVegetable,
  } = props;

  const gardenId = state.garden;

  useEffect(() => {
    if (!state.selected) {
      setGardenName("All Gardens");
    }
    if (!gardenId) {
      setGardenName("All Gardens");
    }
    for (let garden of state.gardens) {
      if (garden.id === gardenId) {
        setGardenName(garden.name);
      }
    }
  }, [gardenId]);

  return (
    <div className="main">
      <div className="nav-dash">
        <Nav />
      </div>

      <div className="layout">
        <div className="sidebar-wrap">
          <div className="sidebard">
            <Sidebar
              updateGardenVegetableState={updateGardenVegetableState}
              state={state}
              createGarden={createGarden}
              changeGarden={changeGarden}
            />
          </div>
        </div>
        {/* <Map /> */}
        <div className="dashboard">
          <div className="garden-name">{gardenName}</div>
          {gardenId ? (
            <DeleteDropDown
              state={state}
              deleteGardenVegetable={deleteGardenVegetable}
            />
          ) : null}
          <div className="graphContainer full">
            {/* vegetable care */}
            <VegetableCareGraph state={state.gardensVegetables} />
          </div>
          <div className="graphContainer half">
            <SeasonsPieChart state={state.gardensVegetables} />
            {/* garden diversity */}
            <GardenDiversityPolerGraph state={state.gardensVegetables} />
          </div>
          <div className="graphContainer half">
            <TagsBarGraph state={state.gardensVegetables} />
            <GrowingDaysGraph state={state.gardensVegetables} />
          </div>
          {gardenId ? (
            <GardenOptions
              state={state}
              handleDayChange={handleDayChange}
              handleTime={handleTime}
              bookNotification={bookNotification}
              handleVegetable={handleVegetable}
              updateGardenState={updateGardenState}
              deleteGarden={deleteGarden}
              showNotifications={showNotifications}
              showDelete={showDelete}
              setShowNotifications={setShowNotifications}
              setShowDelete={setShowDelete}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
