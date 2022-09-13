import React from "react";
import { motion } from "framer-motion";
import "./About.scss";

import { useState } from "react";
import { useEffect } from "react";
import { client, urlFor } from "../../client";
import MotionWrap from "../../wrapper/MotionWrap";
import { AppWrap } from "../../wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type== "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
    
  }, []);
  return (
    <>
      <h2 className="head-text">
        I know that <span>Good development</span> <br /> means{" "}
        <span>Good business</span>
        <div className="app__profiles"></div>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <h2 className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'About',
  'app__whitebg',
);
