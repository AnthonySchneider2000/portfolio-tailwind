import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const useStateContext = () => {
  return useContext(StateContext);
};

export const StateContextProvider = ({ children }) => {
  //store json about current State
  const [projectSelected, setProjectSelected] = useState(false);
  const [selectedProjectName, setSelectedProjectName] = useState("");

  const selectProject = (projectName) => {
    if (projectName === selectedProjectName) {
      setProjectSelected(false);
      setSelectedProjectName("");
    } else {
      setProjectSelected(true);
      setSelectedProjectName(projectName);
    }
  };

  // You can define more functions as needed to modify State data

  return (
    <StateContext.Provider
      value={{
        projectSelected,
        selectedProjectName,
        selectProject,
        // You can add other functions and state variables here
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
