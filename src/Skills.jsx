import { useState} from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { SocialIcon } from 'react-social-icons'
import './Skills.css'
import { Divider, Text, Paper } from '@mantine/core';

const Skills = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <section className="home">
        <div className="home-content">
          <h4>{t('Skills-Top-Text')}</h4>
          <div className="skills-list-div">
          <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>{t('Skills-Web-Editing')}</li>
          <li>Online-Marketing</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>In Design</li>
          <li>UX/UI-Designer</li>
          </ul>
          </div>
          
          <div className="social-media">
            <SocialIcon url="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" />
            <SocialIcon url="mailto:milananovakovic922@gmail.com" />
            <SocialIcon url="https://wa.me/00491621752413" target="_blank" rel="noopener noreferrer" />
          </div>
          <a href="https://drive.google.com/file/d/1YtN2lRhIuryV-uu8aGxeCkVjI5CDy048/view?usp=sharing" target="_blank" className="btn">{t('App-CV')}</a>
        </div>
      </section>
    </div>
  );
};

export default Skills;