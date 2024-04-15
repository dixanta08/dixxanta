import React, { useState, useRef } from "react";

const Courses = () => {
  return <CoursesComp></CoursesComp>;
};
//Courses
const CoursesComp = () => {
  return (
    <div className="courses">
      <div className="courses-left">
        <h1 className="courseHeading">COURSES</h1>
      </div>
      <div className="courses-right">
        <CourseList />
      </div>
    </div>
  );
};

const CourseList = () => {
  return <Slides />;
};

const Slides = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleIndicatorClicked = (index) => {
    setSelectedIndex(index);
  };

  const containerRef = useRef(null);
  //   const { scrollXProgress } = useScroll({
  //     container: { containerRef },
  //     offset: ["0,1", "1.5,1"],
  //   });

  const getFullWidth = () => {
    if (containerRef.current) {
      return containerRef.current.offsetWidth; // Access actual width
    }
    return 0; // Handle potential undefined ref (optional)
  };

  const slidesStyle = {
    transform: `translateX(-${getFullWidth() * selectedIndex}px)`,
    transition: "transform 1s ease-in",
  };

  // ... rest of your JSX code

  return (
    <>
      <div ref={containerRef} className="slides">
        <Slide selectedIndex={selectedIndex} id={0}>
          <ul className="course-list">
            <Course
              title="Web Design for Everybody"
              instructor="University of Michigan"
            />
            <Course
              title="The Complete Web Development Bootcamp"
              instructor="Angela Yu"
            />
            <Course
              title="Python For Everybody"
              instructor="University of Michigan"
            />
            <Course title="Core Java Course" instructor="Learnvern" />
          </ul>
        </Slide>

        <Slide selectedIndex={selectedIndex} id={1}>
          <ul className="course-list">
            <Course
              title="Basic Statistics"
              instructor="University of Amsterdam"
            />
            <Course
              title="Introduction to Front-End Developement"
              instructor="Meta"
            />
            <Course title="R Programming" instructor="Learnvern" />
            <Course
              title="Ultimate React Course"
              instructor="Jonas Schmedtmann"
            />
          </ul>
        </Slide>

        <Slide selectedIndex={selectedIndex} id={2}>
          <ul className="course-list">
            <Course
              title="The Bits and Bytes of Computer Networking"
              instructor="Google"
            />
            <Course
              title="Data Analysis With Python"
              instructor="freeCodeCamp"
            />
            <Course title=" " instructor=" " />
            <Course title=" " instructor=" " />
          </ul>
        </Slide>
      </div>
      <div className="indicators">
        <Indicator
          selectedIndex={selectedIndex}
          id={0}
          onIndicatorClicked={handleIndicatorClicked}
        />
        <Indicator
          selectedIndex={selectedIndex}
          id={1}
          onIndicatorClicked={handleIndicatorClicked}
        />
        <Indicator
          selectedIndex={selectedIndex}
          id={2}
          onIndicatorClicked={handleIndicatorClicked}
        />
      </div>
    </>
  );
};
/* eslint react/prop-types: 0 */
const Slide = ({ selectedIndex, id, children }) => {
  return (
    <div className={`slide ${selectedIndex === id ? "visible" : "hidden"}`}>
      {children}
    </div>
  );
};
const Indicator = ({ selectedIndex, id, onIndicatorClicked }) => {
  return (
    <div
      onClick={() => onIndicatorClicked(id)}
      className={`indicator ${selectedIndex === id ? "indicator-active" : ""}`}
    ></div>
  );
};

// const CourseList = () => {
//   return (
//     <ul className="course-list">
//       <Slide>
//         <Course
//           title="Web Design for Everybody"
//           instructor="University of Michigan"
//         />
//         <Course
//           title="The Complete Web Development Bootcamp"
//           instructor="Angela Yu"
//         />
//         <Course
//           title="Python For Everybody"
//           instructor="University of Michigan"
//         />
//         <Course title="Core Java Course" instructor="Learnvern" />
//       </Slide>
//     </ul>
//   );
// };
const Course = ({ title, instructor }) => {
  return (
    <li className="course-listItem">
      <h3>{title}</h3>
      <p>{instructor}</p>
      <hr />
    </li>
  );
};

export default Courses;
