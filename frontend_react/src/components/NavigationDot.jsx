import React from "react";

const NavigationDot = ({ active }) => {
  return (
    <div className="app__navigation">
      {["Home", "About", "Work", "Skills", "Testimonial", "Contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot" 
            style={active === item ? { backgroundColor: "#313BBAC" } : {}}
          >
            
          </a>
        )
      )}
    </div>
  );
};

export default NavigationDot;
