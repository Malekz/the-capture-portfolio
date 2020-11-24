import React from 'react';
import home1 from '../img/home1.png';

// Styled
import { About, Description, Image, Hide } from '../styles';

// Framer Motion
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nihil
          assumenda officia repudiandae. Obcaecati consequatur distinctio nisi,
          id deserunt laborum?
        </p>
        <button>Contact Us</button>
      </Description>
      <Image className="image">
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
