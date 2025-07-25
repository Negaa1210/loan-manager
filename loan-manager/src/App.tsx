import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

import LoanDashboard from './pages/user';
import Admin from './pages/Admin';
import Verifier from './pages/Verifier';

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<Admin/>} /> {/* Admin & Verifier */}
        <Route path="/verifier" element={<Verifier/>} /> 
        <Route path="/user" element={<LoanDashboard />} />   {/* User */}
      </Routes>
    </Router>
  );
}

export default App;
