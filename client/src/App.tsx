import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/login" element={<Landing />} /> */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Layout>
  );
}

export default App;
