  import React from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import './index.css';
  import { 
    faUser, 
    faTachometerAlt, 
    faBook, 
    faCalendar, 
    faEnvelope, 
    faHistory, 
    faPalette, 
    faUsers, 
    faQuestionCircle 
  } from '@fortawesome/free-solid-svg-icons';

  import { Link, useLocation } from "react-router-dom";

  function KanbasNavigation() {
    
    const links = [
      { name: "Account", icon: faUser, path: "Account" },
      { name: "Dashboard", icon: faTachometerAlt, path: "Dashboard" },  
      { name: "Courses", icon: faBook, pathRegex: /\/Kanbas\/Courses(\/.*)?/ , path: "Courses/*"},
      { name: "Calendar", icon: faCalendar, path: "#" },
      { name: "Inbox", icon: faEnvelope, path: "#" },
      { name: "History", icon: faHistory, path: "#" },
      { name: "Studio", icon: faPalette, path: "#" },
      { name: "Commons", icon: faUsers, path: "#" },
      { name: "Help", icon: faQuestionCircle, path: "#" }
    ];

    const { pathname } = useLocation();

    const isHighlighted = (link) => {
      if (link.path && pathname.includes(`/Kanbas/${link.path}`)) {
          return true;
      }
      if (link.pathRegex && link.pathRegex.test(pathname)) {
          return true;
      }
      return false;
  };

    return (
      <div className="navigation-container">
        <div className="Navigation">
          <ul>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Northeastern_seal.svg/1920px-Northeastern_seal.svg.png" width="80px" height="80px" style={{ backgroundColor: 'aliceblue' , marginTop:-10, marginLeft:-6}} />
            </li>
            {links.map((link, index) => (
              <li key={index} className={isHighlighted(link) ? "navSelected" : ""}>
                <div className="block-container">
                  <p>
                    <FontAwesomeIcon icon={link.icon} className="custom" />
                    <br />
                    <Link to={`/Kanbas/${link.path || ''}`}>{link.name}</Link>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  export default KanbasNavigation;
