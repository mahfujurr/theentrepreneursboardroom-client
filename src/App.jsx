import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Meetings from "./pages/Meetings";
import TeamOverview from "./pages/TeamOverview";
import Exploration from "./pages/Exploration";
import MATerms from "./pages/MATerms";
import DueDiligence from "./pages/DueDiligence";
import Offer from "./pages/Offer";
import Valuation from "./pages/Valuation";

import PrivateRoute from "./components/PrivateRoutes";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AdminDashboard from "./pages/AdminDashboard";
import { AuthProvider } from "./context/AuthProvider";
import Unauthorized from "./components/Unauthorized";
import Welcome from "./pages/Welcome";

const App = () => {
  return (
    <AuthProvider>
      <div className="bg-zinc-950 min-h-screen text-white dm-sans text-lg">
        <Navbar />
        <div className="p-4 pt-10 md:pt-24">
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute allowedRoles={["admin", "user"]}>
                  <Welcome />
                </PrivateRoute>
              }
            />
            <Route
              path="/meetings"
              element={
                <PrivateRoute allowedRoles={["admin", "user"]}>
                  <Meetings />
                </PrivateRoute>
              }
            />
            <Route
              path="/your-team"
              element={
                <PrivateRoute allowedRoles={["admin", "user"]}>
                  <TeamOverview />
                </PrivateRoute>
              }
            />
            <Route
              path="/ma-terms"
              element={
                <PrivateRoute allowedRoles={["admin", "user"]}>
                  <MATerms />
                </PrivateRoute>
              }
            />
            <Route
              path="/exploration"
              element={
                <PrivateRoute allowedRoles={["admin", "user"]}>
                  <Exploration />
                </PrivateRoute>
              }
            />
            <Route
              path="/valuation"
              element={
                <PrivateRoute allowedRoles={["admin", "user"]}>
                  <Valuation />
                </PrivateRoute>
              }
            />
            <Route
              path="/due-diligence"
              element={
                <PrivateRoute allowedRoles={["admin", "user"]}>
                  <DueDiligence />
                </PrivateRoute>
              }
            />
            <Route
              path="/offer"
              element={
                <PrivateRoute allowedRoles={["admin", "user"]}>
                  <Offer />
                </PrivateRoute>
              }
            />

            <Route
              path="/admin"
              element={
                <PrivateRoute allowedRoles={["admin"]}>
                  <AdminDashboard />
                </PrivateRoute>
              }
            />
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;
