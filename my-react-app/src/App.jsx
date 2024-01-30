// import React from 'react';
import React from 'react/jsx-runtime'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Header from './Header';
import HomePage from './HomePage.js';
import ProjectGallery from './ProjectGallery';
import ContactPage from './ContactPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js';

const projects = [ 
  { 
    title: 'Delicious Recipe Generator' , 
    description: 'A project that dynamically generates recipes using APIs, developed with the power of Javascript and meticulously crafted HTML and CSS for a seamless user experience. ', 
    image: 'delicious-recipe-generator.png' , 
    link: 'https://nonebula.github.io/delicious-recipe-generator/' ,
  },
  { 
    title: 'Professional README Generator' , 
    description:'The Professional README Generator is a command-line application that makes the creation of a README file very straightforward. This tool uses Node.js and the Inquirer package to dynamically generate a professional README.md file based on user input. This Professional README generator saves developers time and provides a structured README file. ', 
    image: 'professional-readme.png' , 
    link: 'https://github.com/celiahouston/Professional-README-Generator' ,
  },
  { 
    title: 'Multiple Choice Quiz' , 
    description: 'This is a quiz webpage with multiple choice questions with a timer, using HTML, CSS, and JavaScript. ', 
    image: 'multipl-choice-quiz.png' , 
    link: 'https://celiahouston.github.io/Multiple-Choice-Quiz-/' ,
  },
  { 
    title: 'Weather App' , 
    description: 'A webpage that uses an API to fetch and dynamically display data from a given city, as well as functionality to save searches. ', 
    image: 'weather-app.png' , 
    link: 'https://celiahouston.github.io/Weather-Data/' ,
  },
  { 
    title: 'Workday Planner' , 
    description: 'I have created a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. ', 
    image: 'workday-planner.png' , 
    link: 'https://celiahouston.github.io/Workday-Planner/' ,
  },
  { 
    title: 'Random Password Generator' , 
    description: 'In this challenge I created a webpage that generates a random password based on specific user criteria. The webpage uses HTML, CSS and JavaScript code. The HTML and CSS create a user friendly interface. I used alerts to make the generating of the password simple and straight forward. I also used if/else statements to ensure the password criteria would be met. ', 
    image: 'password-generator.png', 
    link: 'https://celiahouston.github.io/Random-Password-Generator/' ,
  },
  { 
    title: 'Console Finances' , 
    description: 'In this challenge, I used JavaScript to tackle a real-world scenario. I analysed financial records using JavaScript. I also continued to practice creating a correctly formatted GitHub Repository and using regular git commits and pushes. ', 
    image: 'console-finances.png' , 
    link: 'https://celiahouston.github.io/Console-Finances/' ,
  },
  { 
    title: 'Bootstrap Portfolio' , 
    description: 'In this project I have showcased challenges I have completed during my coursework for the Front-End Web Development bootcamp. ', 
    image: 'boostrap-portfolio.png' , 
    link: 'https://celiahouston.github.io/Bootstrap-Portfolio/' ,
  },
  { 
    title: 'SEO Accessibility Mockup Webpage' , 
    description: 'In this project, I wanted to refactor a given code for a Horiseon homepage mock-up. I adapted the HTML code to be more semantically correct, for example, ensuring images were tagged correctly and elements were used when necessary and appropriate. The goal of this project was accessibility and semantically correct HTML code, as well as ensuring linked CSS was adapted as required. This allowed me to examine more closely the specifics of Semantic HTML. ', 
    image: 'SEO-Mockup.png' , 
    link: 'https://celiahouston.github.io/SEO-Accessibility-Mockup/' ,
  },
  { 
    title: 'Pre-work Study Guide' , 
    description: 'This is a Prework Study Guide for bootcamp students. It contains notes on HTML, CSS, Git, and JavaScript. The creation of this space was to summarise the most important pieces of information that can be referenced when going through the Prework for the bootcamp. ', 
    image:'Prework-Study-Guide.png' , 
    link: 'https://celiahouston.github.io/Prework-Study-Guide/' ,
  }
]; 

function App() {
  return (
    <Router>
      <Navbar /> 
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectGallery projects={projects}/>} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
