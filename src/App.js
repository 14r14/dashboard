import { Route, Routes } from "react-router-dom";
import SSOSuccess from "./components/SSOSuccess";
import { CCDSidebar } from "./components/Sidebar";
import Auth from "./components/Auth";

function App() {
  return (
    <>
      <CCDSidebar />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/sso-success" element={<SSOSuccess />} />
      </Routes>
    </>
  );
}

export default App;
