// app.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AboutPage } from './Pages/aboutpage';
import { MainPage } from './Pages/mainPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/codespace" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
