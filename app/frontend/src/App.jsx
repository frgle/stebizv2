import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import HomePage from './pages/free/Home';
import DeniedPage from './pages/free/Denied';
import AltPage from './pages/first_level/Alt';
import FirstLevelPage from './pages/first_level/FirstLevel';
import SecondLevelPage from './pages/second_level/SecondLevel';
import ThirdLevelPage from './pages/third_level/ThirdLevel';

//routes
import ReqLogRoute from './routes/ReqLog';
import FirstLevelAuthRoute from './routes/FirstLevel';
import SecondLevelAuthRoute from './routes/SecondLevel';
import ThirdLevelAuthRoute from './routes/ThirdLevel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/denied" element={<DeniedPage />}></Route>
        <Route path="/" element={<HomePage />}></Route>

        <Route element={<ReqLogRoute />}>

          <Route element={<FirstLevelAuthRoute />}>
            <Route path="/alt" element={<AltPage />}></Route>
            <Route path="/first-level" element={<FirstLevelPage />}></Route>
          </Route>

          <Route element={<SecondLevelAuthRoute />}>
            <Route path="/second-level" element={<SecondLevelPage />}></Route>
          </Route>

          <Route element={<ThirdLevelAuthRoute />}>
            <Route path="/third-level" element={<ThirdLevelPage />}></Route>
          </Route>

        </Route>
      </Routes>
    </Router>
  )
}

export default App;
