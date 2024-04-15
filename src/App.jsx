import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useRef } from "react";
import DixantaCV from "./assets/DixantaCV.pdf";
import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Courses from "./pages/Courses";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header></Header>
        <Main>
          <Routes>
            <Route index element={<Homepage />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="courses" element={<Courses />}></Route>
          </Routes>
          <p className="workInProgress">
            *hover here*{" "}
            <span className="hiddenTemp">
              <br />i am still building this but check out my resume
            </span>
          </p>
        </Main>
      </div>
    </BrowserRouter>

    //   <Main>
    //     {/* <About /> */}
    //     {/* <Courses /> */}
    //     {/* <ProjectDetails /> */}
    //     {/* <Hero /> */}
    //     <Projects /> */}
    //   </Main>
  );
}

export default App;
const emailAddress = "dixantashrestha08@gmail.com";

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <NavLink to="/">
          <img
            className="profilePicture"
            src="/src/assets/Profile.jpg"
            alt="profile picture"
          />
        </NavLink>
        <ul>
          <li>
            <NavLink to="/projects">PROJECTS</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/courses">COURSES</NavLink>
          </li>
        </ul>
      </div>
      <div className="right">
        <button
          onClick={() => {
            window.open(DixantaCV, "_blank");
          }}
        >
          RESUME
        </button>
        <button
          onClick={() => {
            const mailtoUrl = `mailto:${emailAddress}?subject=${"Hello! there"}`;

            // Open in new tab with security considerations
            window.open(mailtoUrl, "_blank", "noopener,noreferrer");
          }}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
      </div>
    </header>
  );
};

const Main = ({ children }) => {
  return <main className="main">{children}</main>;
};

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="name">DIXXANTA SHRESTHA</h1>
      <div className="job-title">
        <h2>
          WEB DEVELOPER
          <br />
          UI/UX DESIGNER
        </h2>
      </div>
    </div>
  );
};

//Courses
// const Courses = () => {
//   return (
//     <div className="courses">
//       <div className="courses-left">
//         <h1 className="courseHeading">COURSES</h1>
//       </div>
//       <div className="courses-right">
//         <CourseList />
//       </div>
//     </div>
//   );
// };

// const CourseList = () => {
//   return <Slides />;
// };

// const Slides = () => {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const handleIndicatorClicked = (index) => {
//     setSelectedIndex(index);
//   };

//   const containerRef = useRef(null);
//   const { scrollXProgress } = useScroll({
//     container: { containerRef },
//     offset: ["0,1", "1.5,1"],
//   });

//   const getFullWidth = () => {
//     if (containerRef.current) {
//       return containerRef.current.offsetWidth; // Access actual width
//     }
//     return 0; // Handle potential undefined ref (optional)
//   };

//   const slidesStyle = {
//     transform: `translateX(-${getFullWidth() * selectedIndex}px)`,
//     transition: "transform 1s ease-in",
//   };

//   // ... rest of your JSX code

//   return (
//     <>
//       <div ref={containerRef} className="slides">
//         <Slide selectedIndex={selectedIndex} id={0}>
//           <ul className="course-list">
//             <Course
//               title="Web Design for Everybody"
//               instructor="University of Michigan"
//             />
//             <Course
//               title="The Complete Web Development Bootcamp"
//               instructor="Angela Yu"
//             />
//             <Course
//               title="Python For Everybody"
//               instructor="University of Michigan"
//             />
//             <Course title="Core Java Course" instructor="Learnvern" />
//           </ul>
//         </Slide>

//         <Slide selectedIndex={selectedIndex} id={1}>
//           <ul className="course-list">
//             <Course
//               title="Basic Statistics"
//               instructor="University of Amsterdam"
//             />
//             <Course
//               title="Introduction to Front-End Developement"
//               instructor="Meta"
//             />
//             <Course title="R Programming" instructor="Learnvern" />
//             <Course
//               title="Ultimate React Course"
//               instructor="Jonas Schmedtmann"
//             />
//           </ul>
//         </Slide>

//         <Slide selectedIndex={selectedIndex} id={2}>
//           <ul className="course-list">
//             <Course
//               title="The Bits and Bytes of Computer Networking"
//               instructor="Google"
//             />
//             <Course
//               title="Data Analysis With Python"
//               instructor="freeCodeCamp"
//             />
//             <Course title=" " instructor=" " />
//             <Course title=" " instructor=" " />
//           </ul>
//         </Slide>
//       </div>
//       <div className="indicators">
//         <Indicator
//           selectedIndex={selectedIndex}
//           id={0}
//           onIndicatorClicked={handleIndicatorClicked}
//         />
//         <Indicator
//           selectedIndex={selectedIndex}
//           id={1}
//           onIndicatorClicked={handleIndicatorClicked}
//         />
//         <Indicator
//           selectedIndex={selectedIndex}
//           id={2}
//           onIndicatorClicked={handleIndicatorClicked}
//         />
//       </div>
//     </>
//   );
// };
// /* eslint react/prop-types: 0 */
// const Slide = ({ selectedIndex, id, children }) => {
//   return (
//     <div className={`slide ${selectedIndex === id ? "visible" : "hidden"}`}>
//       {children}
//     </div>
//   );
// };
// const Indicator = ({ selectedIndex, id, onIndicatorClicked }) => {
//   return (
//     <div
//       onClick={() => onIndicatorClicked(id)}
//       className={`indicator ${selectedIndex === id ? "indicator-active" : ""}`}
//     ></div>
//   );
// };

// // const CourseList = () => {
// //   return (
// //     <ul className="course-list">
// //       <Slide>
// //         <Course
// //           title="Web Design for Everybody"
// //           instructor="University of Michigan"
// //         />
// //         <Course
// //           title="The Complete Web Development Bootcamp"
// //           instructor="Angela Yu"
// //         />
// //         <Course
// //           title="Python For Everybody"
// //           instructor="University of Michigan"
// //         />
// //         <Course title="Core Java Course" instructor="Learnvern" />
// //       </Slide>
// //     </ul>
// //   );
// // };
// const Course = ({ title, instructor }) => {
//   return (
//     <li className="course-listItem">
//       <h3>{title}</h3>
//       <p>{instructor}</p>
//       <hr />
//     </li>
//   );
// };

//Project

const ProjectDetails = () => {
  return (
    <div className="project-details">
      <div className="description">
        <h1>E-LEARNING PLATFORM</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
          dolorum optio nostrum beatae in excepturi officia nisi necessitatibus.
          Consectetur sunt totam neque voluptates magni quasi vero impedit quas
          voluptas omnis vel fugiat sequi error quis dolorem doloribus,
          blanditiis aperiam quaerat natus ad eius consequatur. Omnis repellat
          fugiat error eveniet culpa porro deleniti id, delectus voluptate
          doloremque.
        </p>
      </div>
      <div className="infoList">
        <div className="info">
          <span className="info-title">CATEGORY</span>
          <span className="info-description">Web Application</span>
        </div>
        <div className="info">
          <span className="info-title">LANGUAGES</span>
          <span className="info-description">
            ASP .Net C#, HTML, CSS, JavaScript
          </span>
        </div>
        <div className="info">
          <span className="info-title">TIME</span>
          <span className="info-description">2023 Dec - 2024 Feb</span>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="about">
      <h1>HEY, THERE!</h1>
      <p className="highlight-section">
        I am interested in creating user-centeric designs that tell a story. So,
        I can reach people and connect them to the product. I am constantly
        looking for inspiration and ideas.
      </p>
      <p className="personality-section">
        I crave novelty and strive for continuous growrth. I highly value
        learning new skills and technologies. I am detail-oriented and prefer to
        have a plan before starting any work. But, when I am not working, you
        will probably find me watching tv-shows or movies.
      </p>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <h1>PROJECTS</h1>
      <ul>
        <li>E-Learning Platform in ASP.NET (C#)</li>
        <li>Cafeteria Management System (Java)</li>
        <li>APA University Website(HTML, CSS, JS)</li>
        <li>Voting Management System (C)</li>
        <li>COVID Donation System (C)</li>
        <li>Employee Attrition Data Analysis (R)</li>
        <li>Hello Holidays Case Study (Software Development Methodology)</li>
        <li>Netflix UI Case Study (HCI, UX principles and Figma)</li>
      </ul>
    </div>
  );
};
