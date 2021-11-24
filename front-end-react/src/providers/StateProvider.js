import { createContext, useState } from "react";

// Create a Context
export const counterContext = createContext();

// Create a Component wrapper from Context.Provider
export default function StateProvider(props) {
  // Here is our Shared State Object
  const [counter, setCounter] = useState(0);

  // This list can get long with a lot of functions.  Reducer may be a better choice
  const providerData = { counter, increment, decrement, clear };

  // We can now use this as a component to wrap anything
  // that needs our state
  return (
    <counterContext.Provider value={providerData}>
      {props.children}
    </counterContext.Provider>
  );
}
