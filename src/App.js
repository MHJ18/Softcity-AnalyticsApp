import "./App.css";
import Header from "./shared/header/Header";
import Sidebar from "./shared/sidebar/Sidebar";
import Footer from "./shared/Footer";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import DashboardState from "./Context/DashboardState";
function App() {
  return (
    <>
      <DashboardState>
        <Router>
          <div className="App">
            <Header />
            <div className="app-main">
              <Sidebar />
              <div className="app-main__outer">
                <div className="app-main__inner">
                  <AppRoutes />
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </Router>
      </DashboardState>
    </>
  );
}

export default App;
