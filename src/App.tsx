import { Route, Routes } from "react-router-dom";

//import LoginPage from "@/pages/login";
import SignUpPage from "@/pages/signup";


function App() {
  return (
    <Routes>
      <Route element={<SignUpPage />} path="/" />
      {/* <Route element={<LoginPage />} path="/login" /> */}
    </Routes>
  );
}

export default App;
