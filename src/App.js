import "./App.css";
import Create_Data_Points from "./components/create-data-points/Create_Data_Points";
import MenuData from "./components/menu/dataMenu/MenuData";

import Filter from "./components/menu/filter/Filter";
import MenuChart from "./components/menu/teamMenu/MenuChart";
import Datapoints from "./container/Datapoints";
import DashboardState from "./Context/DashboardState";

function App() {
  return (
    <>
      <DashboardState>
        <Datapoints />
        <MenuChart />
        <MenuData />
        <Filter />
      </DashboardState>
    </>
  );
}

export default App;
