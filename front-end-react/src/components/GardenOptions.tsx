import React from "react";
import { Button } from "@mui/material";
import DeleteForm from "./Dashboard/DeleteForm";
import Scheduler from "./Scheduler/Scheduler";
import { useState } from "react";

export default function GardenOptions(props: any) {
  const {
    state,
    showNotifications,
    showDelete,
    setShowDelete,
    setShowNotifications,
    deleteGarden,
    updateGardenState,
    handleTime,
    handleDayChange,
    bookNotification,
    handleVegetable,
  } = props;

  const notificationsHandler = () => {
    setShowNotifications(!showNotifications);
  };

  const deleteGardenForm = () => {
    setShowDelete(!showDelete);
  };

  const cancelForm = () => {
    setShowDelete(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          deleteGardenForm();
        }}
      >
        Delete Garden
      </Button>
      {showDelete ? (
        <DeleteForm
          state={state}
          deleteGarden={deleteGarden}
          cancelForm={cancelForm}
          updateGardenState={updateGardenState}
        />
      ) : null}
      <Button
        variant="contained"
        onClick={() => {
          notificationsHandler();
        }}
      >
        Set Notifications
      </Button>
      {showNotifications ? (
        <Scheduler
          showNotifications={showNotifications}
          setShowNotifications={setShowNotifications}
          state={state}
          handleDayChange={handleDayChange}
          handleTime={handleTime}
          bookNotification={bookNotification}
          handleVegetable={handleVegetable}
        />
      ) : null}
    </div>
  );
}
