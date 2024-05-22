// app.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AboutPage } from './Pages/aboutpage';
import { MainPage } from './Pages/mainPage';

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/codespace" element={<AboutPage />} />
        </Routes>
      </div>
    
  );
}

export default App;
