import { Route, Routes } from "react-router-dom";
import SSOSuccess from "./components/SSOSuccess";
import { CCDSidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <CCDSidebar />
      <div className="m-32 text-xl">
        <a href={`http://localhost:3000/signup?durl=${window.location.href}`}>Sign Up</a>
      </div>
      <Routes>
        <Route path="/sso-success" element={<SSOSuccess />} />
      </Routes>
    </>
  );
}

export default App;
