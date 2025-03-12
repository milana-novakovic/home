import { SocialIcon } from 'react-social-icons'
import { useTranslation } from 'react-i18next';
import Divider from './Divider'
import './App.css'

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    
      <section className="home">
        <div className="home-content">
          <h3>{t('About-Nice-To-Meet')}</h3>
          <Divider />
          <p style={{marginTop: "15px"}}>
            {t('About-Part-1')}
          </p>
          <p>
            {t('About-Part-2')}
          </p>
          <p>
            {t('About-Part-3')}
          </p>
          <div className="social-media">
            <SocialIcon url="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" />
            <SocialIcon url="mailto:milananovakovic922@gmail.com" />
            <SocialIcon url="https://wa.me/00491621752413" target="_blank" rel="noopener noreferrer" />
          </div>
          <a href="https://drive.google.com/file/d/1YtN2lRhIuryV-uu8aGxeCkVjI5CDy048/view?usp=sharing" target="_blank" className="btn">{t('App-CV')}</a>
        </div>
      </section>
    
  );
};

export default About;