import "./App.css";
import Create_Data_Points from "./components/create-data-points/Create_Data_Points";
import Datapoints from "./container/Datapoints";
import DashboardState from "./Context/DashboardState";

function App() {
  return (
    <>
      <DashboardState>
        <Datapoints />
      </DashboardState>
    </>
  );
}

export default App;
