// eslint-disable-next-line
import React from "react";
import GardenCardList from "../Dashboard/GardenCardList";
import Empty from "./Empty";
import Form from "./Form";
import { useState } from "react";
// eslint-disable-next-line
import GardenVegetableList from "./GardenVegetablesList";


const Sidebar = function (props: any) {
  // eslint-disable-next-line
  const { state, createGarden, changeGarden, updateGardenState } = props;
  // console.log('STATE',state);
  const [addButton, setAddButton] = useState(true);
  // eslint-disable-next-line
  const [gardenID, setGardenID] = useState(null);



  //set state which id gets displayed

  return (
    <article className="sidebarItems">
      <img className='logo' src="https://raw.githubusercontent.com/nikolajjuuel/scheduler/master/public/images/lhl.png" alt="" />
      <h2>My Gardens</h2>
      <hr />
      <GardenCardList state={state} changeGarden={changeGarden}/>


      {/* <GardenVegetableList 
        state={state}
        vegetables={state.gardenVegetables}
        /> */}



      {/* setting state and passing props to components */}
      {/* {mode === SHOW && <Show student={interview.student} interviewer={interview.interviewer.name}
                onDelete={() => transition(CONFIRMING)}
                onEdit={() => transition(EDIT)} />}
            {mode === EMPTY && <Empty onAdd={() => { transition(CREATE) }} />}
            {mode === CREATE && <Form onCancel={back} onSave={save} interviewers={allInterviewers} />}
            {mode === SAVING && <Status message="Saving" />}
            {mode === DELETING && <Status message="Deleting" />}
            {mode === CONFIRMING && <Confirm onConfirm={deleteInterview} onCancel={back} />}
            {mode === EDIT && <Form interviewers={allInterviewers} onCancel={back} onSave={save} student={interview.student} interviewer={interview.interviewer.id} />}
            {mode === ERROR_SAVE && <Error message="Could not save appointment." onClose={back} />}
            {mode === ERROR_DELETE && <Error message="Could not save appointment." onClose={() => transition(SHOW)} />} */}

      <div className='add' onClick={() => { setAddButton(false) }}>
        {addButton ? <Empty /> : null}
      </div>
      {!addButton ? <Form state={state} createGarden={createGarden} setAddButton={setAddButton} /> : null}


    </article>
  );
}

export default Sidebar;