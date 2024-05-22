// app.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AboutPage } from './Pages/aboutpage';
import { MainPage } from './Pages/mainPage';
import { Codespace_Homepage } from './Inner Projects/CodeSpace/codespace_homepage';
import { Language_Translate_Homepage } from './Inner Projects/Language Translate/language_translate_homepage';
import { Review_Detection_Homepage } from './Inner Projects/Review Detection/review_detection_homepage';

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/codespace" element={<Codespace_Homepage />} />
          <Route path="/language_translator" element={<Language_Translate_Homepage />} />
          <Route path="/review_detect" element={<Review_Detection_Homepage />} />
        </Routes>
      </div>
    
  );
}

export default App;
