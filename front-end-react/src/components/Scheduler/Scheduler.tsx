import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Button } from "@mui/material";
import DayPicker from "./DayPicker";
import TimePicker from "./TimePicker";
import "./Scheduler.scss";

export default function Scheduler(props: any) {
  const { state, handleDayChange, handleTime, bookNotification } = props;
  return (
    <div className="scheduler-layout">
      <div className="picker-layout">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div className="daypicker-layout">
            <DayPicker state={state} handleDayChange={handleDayChange} />
          </div>
          <div className="timepicker-layout">
            <TimePicker state={state} handleTime={handleTime} />
          </div>
        </LocalizationProvider>
      </div>
      <div className="scheduler-button-layout">
        <Button
          variant="contained"
          onClick={() => {
            // console.log('S',state)
            // console.log('SN',state.notificationFormData)
            bookNotification(state.notificationFormData);
          }}
        >
          Save Notification
        </Button>
      </div>
    </div>
  );
}
