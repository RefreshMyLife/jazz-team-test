import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';
import Profile from './pages/Profile';
import Login from './pages/Login/index.jsx';
import HeaderTemplate from './components/HeaderTemplate';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HeaderTemplate />}>
        <Route path="" element={<Home />} />
        <Route path="info" element={<Info />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
