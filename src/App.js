// app.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AboutPage } from './Pages/aboutpage';
import { MainPage } from './Pages/mainPage';
import { Language_Translate_Homepage } from './Inner Projects/Language Translate/language_translate_homepage';
import { Review_Detection_Homepage } from './Inner Projects/Review Detection/review_detection_homepage';
import { Chat_With_Ai } from './Inner Projects/Chat With AI/chat_with_ai';
import { Login_Register } from './Pages/login_Register';

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/language_translator" element={<Language_Translate_Homepage />} />
          <Route path="/chat_with_ai" element={<Chat_With_Ai />} />
          <Route path="/review_detect" element={<Review_Detection_Homepage />} />
          <Route path="/login_register" element={<Login_Register />} />
        </Routes>
      </div>
    
  );
}

export default App;
