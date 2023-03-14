import { createContext, useContext, useState } from "react";

const ConfiguratorContext = createContext();

export const ConfiguratorProvider = ({ children }) => {
  const [legs, setLegs] = useState(0);
  const [legsColor, setLegsColor] = useState("#777777");
  const [tableWidth, setTableWidth] = useState(100);
  const [tableHeight, setTableHeight] = useState(50);
  const [plateColor, setPlateColor] = useState("#ECECEC");

  return (
    <ConfiguratorContext.Provider
      value={{
        legs,
        setLegs,
        legsColor,
        setLegsColor,
        tableWidth, 
        setTableWidth,
        tableHeight,
        setTableHeight,
        plateColor,
        setPlateColor,
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  return useContext(ConfiguratorContext);
};
