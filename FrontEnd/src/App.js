import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Inbox from './pages/Inbox';
import Schedule from './pages/Schedule';
import Reviews from './pages/Reviews';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="d-flex">
                <Sidebar />
                <div className="flex-grow-1 p-3">
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/inbox" element={<Inbox />} />
                        <Route path="/schedule" element={<Schedule />} />
                        <Route path="/reviews" element={<Reviews />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </div>
    </div>
  );
}

export default App;
