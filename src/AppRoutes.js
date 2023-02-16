import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminRole from "./components/tables/admins/AdminRole";
import Dashboard from "./pages/dashboard/Dashboard";
import Datapoints from "./pages/datapoints/Datapoints";
import AvailableDatapoints from "./pages/availableDatapoints/AvailableDatapoints";
import Collections from "./pages/collections/Collections";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-datapoint" element={<Datapoints />} />
        <Route path="/datapoints" element={<AvailableDatapoints />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/admin-role" element={<AdminRole />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
