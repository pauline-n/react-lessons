import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';
import ProjectsPage from './ProjectsPage';
import Contact from './Contact'

const Webpages = () => {
    return(
        <Router>
            <Route exact path="/" component= {HomePage} />
            <Route path = "/about" component = {About} />
            <Route path = "/projects" component = {ProjectsPage} />
            <Route path = "/contact" component = {Contact} />
        </Router>
    );
};
export default Webpages;