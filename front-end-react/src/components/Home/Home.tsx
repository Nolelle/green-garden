import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import VegetableCardList from "./VegetableCardList";
import './Home.scss'
import axios from "axios";

export default function Home(props: any) {
  const { handleAddVegetable, parentState } = props

  const [state, setState] = useState({
    vegetables: [],
    query: ''
  });


  console.log("State in Home", state)
  console.log("PARENT STATE", parentState)

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8080/api/vegetables/search", {
        params: {
          query: state.query
        }
      })
    ])
      .then((all) => {
        const vegetablesData = all[0].data;
        setState((prev) => ({
          ...prev,
          vegetables: vegetablesData,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [state.query]);


  let vegetables = state.vegetables;

  const handleChange = (event: any) => {
    setState((prev) => ({
      ...prev,
      query: event.target.value,
    }));
  }



  return (
    <div className='homepage'>
      <SearchBar handleChange={handleChange} />
      <div className='all-vegetables'>
        <VegetableCardList handleAddVegetable={handleAddVegetable} state={parentState} vegetables={[vegetables]} />
      </div>
    </div>
  );
}
