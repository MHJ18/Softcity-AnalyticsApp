import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminRole from "./components/tables/admins/AdminRole";
import Dashboard from "./pages/dashboard/Dashboard";
import Datapoints from "./pages/datapoints/Datapoints";
import AvailableDatapoints from "./pages/availableDatapoints/AvailableDatapoints";
import Collections from "./pages/collections/Collections";
import UserAssigned from "./components/tables/users/UserAssigned";
import UserGroup from "./components/tables/users/UserGroup";
import Users from "./components/tables/users/Users";
import CreateAdmin from "./pages/createAdmin/CreateAdmin";
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-datapoint" element={<Datapoints />} />
        <Route path="/datapoints" element={<AvailableDatapoints />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/admin-role" element={<AdminRole />} />
        <Route path="/userGroup/createUser" element={<CreateAdmin />} />
        <Route path="/users/profile" element={<UserAssigned />} />
        <Route path="/userGroup/admin-role" element={<UserGroup />} />
        <Route path="/userGroup/account" element={<Users />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
