import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;