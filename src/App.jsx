import { useState} from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import { useTranslation } from 'react-i18next';
import profilePicture3 from './assets/profile_pic3.png'
import './App.css'
import About from './About'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Contact from './Contact'

const App = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("");

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Router>
    <div>
      <header className="header">
        <a href="#" className="logo">Portfolio.</a>
        <nav className="navbar">
          <Link style={{ "--i": 1 }} to="/" className={activeTab == '' ? "active" : ''} onClick={() => setActiveTab('')}>{t('Nav-Home')}</Link>
          <Link style={{ "--i": 2 }} to="/about" className={activeTab == 'about' ? "active" : ''} onClick={() => setActiveTab('about')}>{t('Nav-About')}</Link>
          <Link style={{ "--i": 3 }} to="/skills" className={activeTab == 'skills' ? "active" : ''} onClick={() => setActiveTab('skills')}>{t('Nav-Skills')}</Link>
          <Link style={{ "--i": 4 }} to="/portfolio" className={activeTab == 'portfolio' ? "active" : ''} onClick={() => setActiveTab('portfolio')}>Portfolio</Link>
          <Link style={{ "--i": 5 }} to="/contact" className={activeTab == 'contact' ? "active" : ''} onClick={() => setActiveTab('contact')}>{t('Nav-Contact')}</Link>
        </nav>
        <div className="language-switch">
            <select value={i18n.language} onChange={handleLanguageChange}>
              <option value="de">DE</option>
              <option value="en">EN</option>
            </select>
          </div>
      </header> 
    </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  const { t, i18n } = useTranslation();

  return(
  <section className="home">
    <div className="home-content">
      <h3>{t('App-Welcome')}</h3>
      <h1>{t('App-Introduce')}</h1>
      <h3>{t('App-I-Am')}<span className="multiple-text">{t('App-Web-UX')}</span></h3>
      <div className="social-media">
        <SocialIcon url="https://www.linkedin.com" />
        <SocialIcon url="mailto:milananovakovic922@gmail.com" />
        <SocialIcon url="https://wa.me/00491621752413" target="_blank" rel="noopener noreferrer" />
      </div>
      <a href="https://drive.google.com/file/d/1YtN2lRhIuryV-uu8aGxeCkVjI5CDy048/view?usp=sharing" target="_blank" className="btn">{t('App-CV')}</a>
    </div>
    <div className="home-img">
      <img src={profilePicture3} alt="" />
    </div>
  </section>
  );
};

export default App;